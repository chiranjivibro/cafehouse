import { createContext, useReducer } from "react";
export const cartContext = createContext();
const initialState = {
  cartItems: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      const isExiting = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExiting) {
        let newCartItem = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
 return {
          ...state,
          cartItems: newCartItem,
        };
      } else {
        const newObject = {
          ...action.payload,
          qty: 1,
        };
          const updateProduct = [...state.cartItems, newObject];
          alert(`Add To Cart ${newObject.name}`)
          return {
            ...state,
            cartItems:updateProduct,
          };
        }
    }
    case "Increment": {
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
 }
        return item;
      });

      return {
        ...state,
        cartItems: newCartItems,
      };
    }
    case "Decrement": {
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return item.qty > 1 ? { ...item, qty: item.qty - 1 } : item;
          
        }
        return item;
      });

      return {
        ...state,
        cartItems: newCartItems,
      };
    }
    case "Delete": {
      const newCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cartItems: newCartItems,
      };
      
    }

    case "Clear": {
      alert("YOur Cart is Clear");
      return {
        ...state,
        cartItems: [],
      };
    }
    default: {
      return state;
    }
  }  
  
};
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};