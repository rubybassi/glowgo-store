import { useState, createContext, useEffect } from "react";
const SiteContext = createContext();
import API from "./controllers/API";

const SiteContextProvider = ({ children }) => {
  // product states
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

  // status states
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // user states
  const [userSearch, setUserSearch] = useState("");
  const [shipping, setShipping] = useState([
    {
      firstname: "",
      surname: "",
      address1: "",
      address2: "",
      city: "",
      postcode: "",
    },
  ]);
  const [payment, setPayment] = useState([
    {
      number: "",
      name: "",
      expiry: "",
      cvv: "",
    },
  ]);

  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userPayload, setUserPayload] = useState({});
  
  // posts user sign in then sets state and local storage if successfull
  const onUserSignIn = async (e) => {
    e.preventDefault();
    const newUser = {email,password};
    const response = await API.fetch("/login", newUser);
    if (response.success && response.payload.token) {
      setUserPayload(response.payload);
      setIsloggedIn(true);
      localStorage.setItem('user', JSON.stringify(response.payload));
      setErrorMessage('');
    } else {
      setIsloggedIn(false);
      setErrorMessage(
        "There has been an error logging in. Please try again using your correct credentials"
      );
    }
    setEmail("");
    setPassword("");
  };

  // pushes logged userstate to local storage
  useEffect(() => {
    const getUserfromstore = JSON.parse(localStorage.getItem("user"));
    if (!getUserfromstore) return null;
    setUserPayload(getUserfromstore);
  }, []);

  // on passsword submit
  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  // on email submit
  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  //============================INITIAL LOAD ACTIONS=======================
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
    console.log("fetching all cat products", productsByCategory);
  };

  // get products by brand selection
  const getBrandById = async (id) => {
    setIsLoading(true);
    const payload = await API.fetch(`/product/brand/${id}`);
    setProductsByBrand(payload);
    setIsLoading(false);
    console.log("fetching all brand products", productsByBrand);
  };

  // get products by id on product list selection
  const getProductById = async (id) => {
    setIsLoading(true);
    const payload = await API.fetch(`/product/${id}`);
    setProductById(payload);
    setIsLoading(false);
    console.log("fetching product by id payload", payload);
  };

  // get all products on all products drawer selection
  const getAllProducts = async () => {
    setIsLoading(true);
    const payload = await API.fetch("/product/all");
    setProducts(payload);
    setIsLoading(false);
    console.log("fetching all products", payload);
  };
  //============================CART ACTIONS=======================
  // updates cart state from user add to cart event
  const addtoCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    console.log("items in cart", cartItems);
  };

  // updates cart state when user removes item from cart by index
  const removeItemFromCart = (id) => {
    const index = cartItems.findIndex((item) => item._id === id);
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    //console.log(newCart);
    setCartItems(newCart);
  };

  // pushes cart items to local storage when cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ cartItems }));
  }, [cartItems]);

  //============================USER SEARCH ACTIONS=======================
  // gets and sets user input from search bar
  const handleUserSearchInput = (e) => {
    console.log("user value", e.target.value);
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
        setShipping,
        setPayment,
        email,
        password,
        onUserSignIn,
        onEmail,
        onPassword,
        isLoggedIn,
        errorMessage,
        userPayload,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContext;
export { SiteContextProvider };
