import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import CartContext, { Item } from './components/CartContext';
import { useState } from 'react';
/* import { CartValue, Item } from './components/CartContext'; */
import { Product } from './lib';
export function App() {
  const [cart, setCart] = useState<Item[]>([]);
  function addToCart(product: Product): undefined {
    const itemFound = cart.find((item) => {
      return item.product.productId === product.productId;
    });
    console.log('cart: ', cart);
    if (!itemFound) {
      const TobeAddedProduct: Item = { product, quantity: 1 };
      setCart([...cart, TobeAddedProduct]);
    } else {
      itemFound.quantity++;
      const mapped = cart.map((item) => {
        return item.product.productId === itemFound.product.productId
          ? itemFound
          : item;
      });
      setCart(mapped);
    }
  }
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}
