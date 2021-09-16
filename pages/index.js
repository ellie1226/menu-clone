import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Cart from "../components/Cart";
import { dummyProducts } from "../lib/data";
import { t } from "ttag";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCartOpen = () => {
    setCartOpen(!isCartOpen);
  };

  // delete item from the cart state and subtract from qty count
  const deleteFromCart = (item) => {
    const exists = cartItems.find((product) => product.id == item.id);
    if (exists.qty > 1) {
      setCartItems(
        cartItems.map((product) =>
          product.id == item.id ? { ...exists, qty: exists.qty - 1 } : product
        )
      );
    } else {
      setCartItems(cartItems.filter((product) => product.id != item.id));
    }
    setCartCount(cartCount - 1);
  };

  // add item to the cart state and update the total qty
  const addToCart = (item) => {
    const exists = cartItems.find((product) => product.id == item.id);
    if (exists != undefined) {
      setCartItems(
        cartItems.map((product) =>
          item.id == product.id ? { ...exists, qty: exists.qty + 1 } : product
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { id: item.id, qty: 1, price: item.price, name: item.name },
      ]);
    }
    setCartCount(cartCount + 1);
  };

  return (
    <div className="container">
      <Head>
        <title>{t`McDonald's Delivery & Takeout`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {isCartOpen && (
          <Cart
            deleteFromCart={deleteFromCart}
            toggleCart={toggleCartOpen}
            addToCart={addToCart}
            isCartOpen={isCartOpen}
            cartItems={cartItems}
          />
        )}
        <Navbar cartCount={cartCount} toggleCartOpen={toggleCartOpen} />
      </header>
      <main>
        <Cover />
        <Product products={dummyProducts} addToCart={addToCart} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
