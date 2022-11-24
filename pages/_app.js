import { useState, useEffect } from 'react';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) : [];
  const [cart, setCart] = useState(cartLS ?? []);
  const [cartCount, setCartCount] = useState(-1);
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    setIsPageReady(true);
    setCartCount(cart.length);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    if(cartCount !== -1) setCartCount(cart.length);
  }, [cart])

  function addToCart(guitar) {
    if (cart.some(_guitar => _guitar.id === guitar.id)) {
      const updatedCart = cart.map(_guitar => _guitar.id === guitar.id ? guitar : _guitar);
      setCart(updatedCart);
    } else {
      setCart([...cart, guitar]);
    }
  }

  function updateAmount(id, amount) {
    const updatedCart = cart.map(_guitar => {
      if (_guitar.id === id) _guitar.amount = amount;
      return _guitar;
    });

    setCart(updatedCart);
  }

  function deleteFromCart(id) {
    const updatedCart = cart.filter(_guitar => _guitar.id !== id);
    setCart(updatedCart);
  }

  return isPageReady ? <Component {...pageProps}
    cart={cart}
    cartCount={cartCount}
    addToCart={addToCart}
    updateAmount={updateAmount}
    deleteFromCart={deleteFromCart}
  /> : null
}

export default MyApp
