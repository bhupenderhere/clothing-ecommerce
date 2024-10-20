import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 100;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please Select A Size");
      return;
    }

    const cart = structuredClone(cartItems);

    if (cart[itemId]) {
      if (cart[itemId][size]) cart[itemId][size] += 1;
      else cart[itemId][size] = 1;
    } else {
      cart[itemId] = { [size]: 1 };
    }

    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const getCartCount = () => {
    let count = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        count += cartItems[item][size];
      }
    }
    return count;
  };

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCartItems(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const getCartAmount = () => {
    let amount = 0;
    for (const item in cartItems) {
      const product = products.find((product) => product._id === item);
      for (const size in cartItems[item]) {
        amount += product.price * cartItems[item][size];
      }
    }
    return amount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
