import { CartProduct, Product } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";

type CartState = {
  cartItems: CartProduct[];
};

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.product.id === item.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ product: item, quantity: 1, selected: true });
      }

      Toast.show({
        type: "success",
        text1: "Successfully Added 🚀",
        text2: "Product successfully added to your cart.",
      });
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload,
      );

      Toast.show({
        type: "success",
        text1: "Successfully Removed 🚀",
        text2: "Product successfully removed from your cart.",
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product.id === id,
      );

      if (existingItem) {
        existingItem.quantity = quantity;
      }

      Toast.show({
        type: "success",
        text1: "Successfully Updated 🚀",
        text2: "Product successfully updated.",
      });
    },

    toggleSelectCartItem: (state, action: PayloadAction<number>) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === action.payload,
      );

      if (existingItem) {
        existingItem.selected = !existingItem.selected;
      }
    },
    toggleSelectAllCartItems: (state, action: PayloadAction<boolean>) => {
      state.cartItems.forEach((item) => (item.selected = action.payload));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  updateCartItemQuantity,
  toggleSelectCartItem,
  toggleSelectAllCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
