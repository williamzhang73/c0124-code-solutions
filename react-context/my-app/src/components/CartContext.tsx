import { createContext } from 'react';
import { Product } from '../lib';
export type Item = {
  product: Product;
  quantity: number;
};
export type CartValue = {
  cart: Item[];
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartValue>({
  cart: [],
  addToCart: () => undefined,
});
export default CartContext;
