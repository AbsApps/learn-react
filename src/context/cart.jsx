import { createContext,  useReducer } from "react";

import { cartReducer, cartInitialState } from "../reducers/cart";

// 1- Crear Contexto
export const CartContext = createContext();

// Aqui creo un custom hook para manejar los dispatch y
// quitar responsabilidad al context
function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return { state, useCartReducer, addToCart, removeFromCart, clearCart };
}

// 2- Crear Provider de el contexto
// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  // La dependencia de usar react context es minima
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * -------------------------------------------------------------------------------------
 * Nota: Esta logica se ha eliminado y
 * se convirtio en un reducer para manejar la logica mucho mejor manera.
 * -------------------------------------------------------------------------------------
 * 
 * const [cart, setCart] = useState([]);
 * const addToCart = (product) => {
    //Check if the product is alredy in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    //Si el producto no esta en el carrito
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (product) => {
    // return cart.filter((item) => item.id != product.id)
    setCart((prevState) => prevState.filter((item) => item.id != product.id));
  };

  const clearCart = () => {
    setCart([]);
  };
 * 
 * 
 */
