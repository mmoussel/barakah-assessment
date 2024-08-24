import { CartProduct, Product } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] } as { cartItems: CartProduct[] },
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
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload,
      );
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
