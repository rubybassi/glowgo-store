import { useState, createContext, useEffect } from "react";
const SiteContext = createContext();
import API from "./controllers/API";

const SiteContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [productsByBrand, setProductsByBrand] = useState([]);
  const [productById, setproductById] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const getCart = () => JSON.parse(localStorage.getItem("cart"));
  const [cartItems, setcartItems] = useState(getCart()?.cartItems || []);
  const [cartQty, setcartQty] = useState(getCart()?.cartQty || 0);
  const [isLoading, setisLoading] = useState(true);

  //============================INITIAL LOAD ACTIONS=======================
  // fetches all products
  useEffect(() => {
    const fetchAllProducts = async () => {
      const payload = await API.fetch("/product/all");
      setProducts(payload);
    };
    fetchAllProducts();
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

  //============================CART ACTIONS=======================
  // updates cart states from user add to cart event
  const addtoCart = (item, qty) => {
    setcartItems((prev) => [...prev, item]);
    setcartQty((prev) => prev + qty);
  };

  // pushes cart items to local storage when cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ cartItems, cartQty }));
  }, [cartItems, cartQty]);

  //============================USER SEARCH ACTIONS=======================
  // pushes cart items to local storage when cart state changes
  const handleUserSearchInput = (e) => {
    console.log("user value", e.target.value);
    const searched = e.target.value;
    setUserSearch(searched);
  };

  // get products by category selection
  const getCategoryById = async (id) => {
    setisLoading(true);
    const payload = await API.fetch(`/product/category/${id}`);
    setProductsByCategory(payload);
    setisLoading(false);
  };

  // get products by brand selection
  const getBrandById = async (id) => {
    setisLoading(true);
    const payload = await API.fetch(`/product/brand/${id}`);
    setProductsByBrand(payload);
    setisLoading(false);
  };

    // get products by id on product list selection
    const getProductById = async (id) => {
      setisLoading(true);
      const payload = await API.fetch(`/product/brand/${id}`);
      setproductById(payload);
      console.log("productsById", productById);
      setisLoading(false);
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
        cartQty,
        getCategoryById,
        getBrandById,
        getProductById,
        productsByCategory,
        productsByBrand,
        productById
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContext;
export { SiteContextProvider };

// old code for possible reuse or reference

// useEffect(() => {
//   const queryURL = "/product/brand";
//   const fetchAllProducts = async () => {
//     const response = await fetch(queryURL);
//     const payload = await response.json();
//     console.log("brands", payload);
//     setBrands(payload || []);
//   };
//   fetchAllProducts();
// }, []);

/*const toggleMessage = async (num) => {
    setMessage( message => !message); // toggles state
    console.log('button clicked');
  } */
