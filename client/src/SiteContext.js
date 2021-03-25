import { useState, createContext, useEffect } from "react";
const SiteContext = createContext();
import API from "./controllers/API";
import Helpers from "./controllers/Helpers";

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
  const [userSearch, setUserSearch] = useState("");
  const [shipping, setShipping] = useState({});
  const [payment, setPayment] = useState({});
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userPayload, setUserPayload] = useState({});
  const [order, setOrder] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  //============================USER AUTH AND LOGIN STATUS ======================
  // posts user sign in then sets state and local storage if successfull
  const onUserSignIn = async (e) => {
    e.preventDefault();
    const newUser = { email, password };
    if (email.length < 3 || password.length < 3) {
      setErrorMessage("Please enter a value");
      return;
    }
    const response = await API.fetch("/login", newUser);
    if (response?.success && response?.payload.token) {
      setUserPayload(response.payload);
      setIsloggedIn(true);
      localStorage.setItem("user", JSON.stringify(response.payload));
      localStorage.setItem("loggedStatus", JSON.stringify({ status: true }));
      setErrorMessage("");
    } else {
      setIsloggedIn(false);
      setErrorMessage(
        "There has been an error logging in. Please try again using your correct credentials"
      );
    }
    setEmail("");
    setPassword("");
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
  };
  //============================INITIAL PRODUCT LOAD ACTIONS=======================
  // fetches all bestselling products
  useEffect(() => {
    const fetchAllBestsellers = async () => {
      try {
        setIsLoading(true);
        const payload = await API.fetch("/product/bestsellers");
        setBestsellers(payload);
        setIsLoading(false);
      } catch (error) {
        setBestsellers([]);
        setIsLoading(false); // add user error message toaster
      }
    };
    fetchAllBestsellers();
  }, []);
  // fetches all bestselling products
  useEffect(() => {
    const fetchAllNewArrivals = async () => {
      const payload = await API.fetch("/product/newarrivals");
      setNewarrivals(payload);
    };
    fetchAllNewArrivals();
  }, []);
  // fetches all categories
  useEffect(() => {
    const fetchAllCategories = async () => {
      const payload = await API.fetch("/product/category");
      setCategories(payload);
    };
    fetchAllCategories();
  }, []);
  // fetches all brands
  useEffect(() => {
    const fetchAllBrands = async () => {
      const payload = await API.fetch("/product/brand");
      setBrands(payload);
    };
    fetchAllBrands();
  }, []);
  //============================USER PRODUCT SELECTION ACTIONS=======================
  // get products by category selection
  const getCategoryById = async (id) => {
    setIsLoading(true);
    const payload = await API.fetch(`/product/category/${id}`);
    setProductsByCategory(payload);
    setIsLoading(false);
  };
  // get products by brand selection
  const getBrandById = async (id) => {
    setIsLoading(true);
    const payload = await API.fetch(`/product/brand/${id}`);
    setProductsByBrand(payload);
    setIsLoading(false);
  };
  // get products by id on product list selection
  const getProductById = async (id) => {
    setIsLoading(true);
    const payload = await API.fetch(`/product/${id}`);
    setProductById(payload);
    setIsLoading(false);
  };
  // get all products on all products drawer selection
  const getAllProducts = async () => {
    setIsLoading(true);
    const payload = await API.fetch("/product/all");
    setProducts(payload);
    setIsLoading(false);
  };
  //============================CART ACTIONS=======================
  // updates cart state from user add to cart event
  const addtoCart = (item) => {
    setCartItems((prev) => [...prev, item]);
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
    setIsLoading(true);
    // do some form input error checking
    const newOrder = {
      shipping,
      payment,
      cartItems,
      userID: userPayload.user.id,
      orderTotal: Helpers.GetTotalSum(cartItems),
      shippingFee: "Free",
    };
    const token = userPayload.token;
    const response = await API.fetch("/user/checkout", newOrder, token);
    if (response?.success) {
      setOrder(response.payload);
    } else {
      setErrorMessage("There has been an error submitting your order.");
    }
    console.log("order is", newOrder);
    setIsLoading(false);
  };
  //============================USER HISTORY ACTIONS=======================
  // gets user's order history
  const getOrders = async (id) => {
    setIsLoading(true);
    // do some form input error checking
    const token = userPayload.token;
    const response = await API.fetchGetToken(`/user/order/${id}`, token);
    if (response?.success) {
      setOrderHistory(response.payload);
    } else {
      setErrorMessage("There has been an error fetching your orders.");
    }
    setIsLoading(false);
    console.log("cust orders payload,", response);
  };

  //============================USER SEARCH ACTIONS=======================
  // gets and sets user input from search bar
  const handleUserSearchInput = (e) => {
    const searched = e.target.value;
    setUserSearch(searched);
  };

  return (
    <SiteContext.Provider
      value={{
        products,
        categories,
        brands,
        isLoading,
        addtoCart,
        handleUserSearchInput,
        userSearch,
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
        getOrders,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContext;
export { SiteContextProvider };
