import { useState, createContext, useEffect } from "react";
const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  const getCart = () => JSON.parse(localStorage.getItem("cart"));
  const [cartItems, setcartItems] = useState(getCart()?.cartItems || []);
  const [cartQty, setcartQty] = useState(getCart()?.cartQty || 0);

  // function to handle cartItems added to cart and save to local storage
  const addtoCart = (item, qty) => {
    setcartItems((prev) => [...prev, item]);
    setcartQty((prev) => prev + qty);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ cartItems, cartQty }));
  }, [cartItems, cartQty]);

  const handleUserSearchInput = (e) => {
    console.log("user value", e.target.value);
    const searched = e.target.value;
    setUserSearch(searched);
  };

  // ======== refactor all fetches - create a single custom hook with response, error and status state
  // fetch all products add try catch
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
        addtoCart,
        handleUserSearchInput,
        userSearch,
        cartItems,
        cartQty,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContext;
export { SiteContextProvider };
