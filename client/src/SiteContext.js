import { useState, createContext, useEffect } from "react";
const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {
  // global states
  const [products, setProducts] = useState([]);
  const [cartIconCount, setCartIconCount] = useState(0); // get from local storage
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  // functions

  // need to save local storage
  const handleCartCounter = () => {
    setCartIconCount((prev) => prev + 1);
  };

  const handleUserSearchInput = (e) => {
    console.log("user value", e.target.value);
    const searched = e.target.value;
    setUserSearch(searched);
  };

  // fetch all products
  useEffect(() => {
    const queryURL = "/product/all";
    const fetchAllProducts = async () => {
      const response = await fetch(queryURL);
      const payload = await response.json();
      console.log("products", payload);
      setProducts(payload || []);
    };
    fetchAllProducts();
  }, []);

  // fetch all categories
  useEffect(() => {
    const queryURL = "/product/category";
    const fetchAllProducts = async () => {
      const response = await fetch(queryURL);
      const payload = await response.json();
      console.log("categories", payload);
      setCategories(payload || []);
    };
    fetchAllProducts();
  }, []);

  // fetch all brands
  useEffect(() => {
    const queryURL = "/product/brand";
    const fetchAllProducts = async () => {
      const response = await fetch(queryURL);
      const payload = await response.json();
      console.log("brands", payload);
      setBrands(payload || []);
    };
    fetchAllProducts();
  }, []);

  /*const toggleMessage = async (num) => {
    setMessage( message => !message); // toggles state
    console.log('button clicked');
  } */

  return (
    <SiteContext.Provider
      value={{
        products,
        categories,
        brands,
        handleCartCounter,
        cartIconCount,
        handleUserSearchInput,
        userSearch,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContext;
export { SiteContextProvider };
