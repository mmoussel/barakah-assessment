import { useAppSelector } from "./app-selector.hook";

export const useCart = () => useAppSelector((state) => state.cart.cartItems);
