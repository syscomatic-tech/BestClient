import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

const initialState = {
  items: getInitialState(),
};

const saveToLocalStorage = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item._id === product._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      saveToLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item._id !== productId);
      saveToLocalStorage(state.items);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find((item) => item._id === id);
      if (product) {
        product.quantity += quantity;
        if (product.quantity <= 0) {
          state.items = state.items.filter((item) => item._id !== id);
        }
      }
      saveToLocalStorage(state.items);
    },
    subTotal: (state) => {
      return state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, subTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
