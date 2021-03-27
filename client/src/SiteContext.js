import { useState, createContext, useEffect } from "react";
const SiteContext = createContext();
import API from "./controllers/API";
import Helpers from "./controllers/Helpers";
import { toast } from "react-toastify";

const SiteContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [productsByBrand, setProductsByBrand] = useState([]);
  const [productById, setProductById] = useState({});
  const [bestsellers, setBestsellers] = useState([]);
  const [newarrivals, setNewarrivals] = useState([]);
  const getCart = () => JSON.parse(localStorage.getItem("cart"));
  const [cartItems, setCartItems] = useState(getCart()?.cartItems || []);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [shipping, setShipping] = useState({});
  const [payment, setPayment] = useState({});
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userPayload, setUserPayload] = useState({});
  const [order, setOrder] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [checkedOut, setCheckedOut] = useState(false);
  const [searched, setSearched] = useState('');
  const [productsBySearch, setProductsBySearch,] = useState([]);

  //============================USER AUTH AND LOGIN STATUS ======================

  // posts user sign in then sets state and local storage if successfull
  const onUserSignIn = async (e) => {
    e.preventDefault();
    const newUser = { email, password };
    if (email.length < 3 || password.length < 6) {
      setErrorMessage("Please enter a value");
      return;
    }
    try {
      setIsLoading(true);
      const response = await API.fetch("/login", newUser);
      if (response?.success && response?.payload.token) {
        setUserPayload(response.payload);
        setIsloggedIn(true);
        localStorage.setItem("user", JSON.stringify(response.payload));
        localStorage.setItem("loggedStatus", JSON.stringify({ status: true }));
        setErrorMessage("");
        setEmail("");
        setPassword("");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsloggedIn(false);
        setErrorMessage(
          "There has been an error logging in. Please try again using your correct credentials"
        );
      }
    } catch (err) {
      console.log(err);
      setIsloggedIn(false);
      toast.error("Something went wrong logging you in. Please try again.");
    }
  };

  // gets and sets logged userstate from local storage
  useEffect(() => {
    const getUserfromstore = JSON.parse(localStorage.getItem("user"));
    if (getUserfromstore === "" || getUserfromstore === null) {
      return null;
    }
    setUserPayload(getUserfromstore);
    const getUserStatus = JSON.parse(localStorage.getItem("loggedStatus"));
    if (getUserStatus === "" || getUserStatus === null) {
      return null;
    }
    setIsloggedIn(getUserStatus);
  }, []);

  // on passsword submit
  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  // on email submit
  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  // logs out user on request and clears user toekn and payload
  const onLogOut = () => {
    setIsloggedIn(false);
    localStorage.clear();
    setCheckedOut(false);
  };

  //============================INITIAL PRODUCT LOAD ACTIONS=======================

  // fetches all bestselling products
  useEffect(() => {
    const fetchAllBestsellers = async () => {
      try {
        setIsLoading(true);
        const payload = await API.fetch("/api/product/bestsellers");
        setBestsellers(payload);
        setIsLoading(false);
      } catch (error) {
        setBestsellers([]);
        setIsLoading(false);
        toast.error("Something went wrong fetching the products");
      }
    };
    fetchAllBestsellers();
  }, []);

  // fetches all new arrivals products
  useEffect(() => {
    const fetchAllNewArrivals = async () => {
      try {
        setIsLoading(true);
        const payload = await API.fetch("/api/product/newarrivals");
        setNewarrivals(payload);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Something went wrong fetching the products");
      }
    };
    fetchAllNewArrivals();
  }, []);

  // fetches all categories
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        setIsLoading(true);
        const payload = await API.fetch("/api/product/category");
        setCategories(payload);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Something went wrong fetching the products");
      }
    };
    fetchAllCategories();
  }, []);

  // fetches all brands
  useEffect(() => {
    const fetchAllBrands = async () => {
      try {
        setIsLoading(true);
        const payload = await API.fetch("/api/product/brand");
        setBrands(payload);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Something went wrong fetching the products");
      }
    };
    fetchAllBrands();
  }, []);

  //============================USER PRODUCT SELECTION ACTIONS=======================

  // get products by category selection
  const getCategoryById = async (id) => {
    try {
      setIsLoading(true);
      const payload = await API.fetch(`/api/product/category/${id}`);
      setProductsByCategory(payload);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong fetching the products");
    }
  };

  // get products by brand selection
  const getBrandById = async (id) => {
    try {
      setIsLoading(true);
      const payload = await API.fetch(`/api/product/brand/${id}`);
      setProductsByBrand(payload);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong fetching the products");
    }
  };

  // get products by id on product list selection
  const getProductById = async (id) => {
    try {
      setIsLoading(true);
      const payload = await API.fetch(`/api/product/${id}`);
      setProductById(payload);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong fetching the products");
    }
  };

  // get all products on all products drawer selection
  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const payload = await API.fetch("/api/product/all");
      setProducts(payload);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong fetching the products");
    }
  };

  //============================CART ACTIONS=======================

  // updates cart state from user add to cart event
  const addtoCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    Helpers.notify("added to cart");
  };

  // updates cart state when user removes item from cart by index
  const removeItemFromCart = (id) => {
    const index = cartItems.findIndex((item) => item._id === id);
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  // pushes cart items to local storage when cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ cartItems }));
  }, [cartItems]);

  //============================CHECKOUT ACTIONS=======================

  // on checkout shipping input
  const onShipping = (e) => {
    const value = e.target.value;
    setShipping({
      ...shipping,
      [e.target.name]: value,
    });
  };

  // on checkout payment input
  const onPayment = (e) => {
    const value = e.target.value;
    setPayment({
      ...payment,
      [e.target.name]: value,
    });
  };

  // on checkout submit
  const onCheckoutSubmit = async () => {
    if (Helpers.loginValidation(shipping, payment) === false) {
      setErrorMessage("please enter valid values");
      return;
    }
    try {
      setIsLoading(true);
      const newOrder = {
        shipping,
        payment,
        cartItems,
        userID: userPayload.user.id,
        orderTotal: Helpers.GetTotalSum(cartItems),
        shippingFee: "Free",
      };
      const token = userPayload.token;
      const response = await API.fetch("/api/user/checkout", newOrder, token);
      setOrder(response.payload);
      setIsLoading(false);
      console.log("order submited");
      setShipping("");
      setPayment("");
      toast.success("order submitted successfully!");
      localStorage.removeItem("cart");
      setCartItems([]);
      setCheckedOut(true);
    } catch (error) {
      setErrorMessage("There has been an error submitting your order.");
      setIsLoading(false);
      toast.error("please enter valid values");
    }
  };

  //============================USER SEARCH ACTIONS=======================

  // gets and sets user input from search bar
  const handleUserSearchInput = (e) => {
    const searched = e.target.value;
    console.log('searched');
    setSearched(searched);
  };

  // fetch products by query params
  const getbySearch = async () => {
    try {
      setIsLoading(true);
      console.log('searched for', searched);
      const payload = await API.fetch(`/api/product?search=${searched}`);
      setProductsBySearch(payload);
      setSearched('');
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("There has been an error fetching your data.");
      setIsLoading(false);
    }
  };
 

  return (
    <SiteContext.Provider
      value={{
        products,
        categories,
        brands,
        isLoading,
        addtoCart,
        cartItems,
        getCategoryById,
        getBrandById,
        getProductById,
        getAllProducts,
        productsByCategory,
        productsByBrand,
        productById,
        getCart,
        bestsellers,
        newarrivals,
        removeItemFromCart,
        shipping,
        payment,
        email,
        password,
        onUserSignIn,
        onEmail,
        onPassword,
        isLoggedIn,
        errorMessage,
        userPayload,
        setErrorMessage,
        onLogOut,
        onCheckoutSubmit,
        onShipping,
        onPayment,
        orderHistory,
        setIsLoading,
        setErrorMessage,
        checkedOut,
        getbySearch,
        handleUserSearchInput,
        searched,
        productsBySearch
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContext;
export { SiteContextProvider };
