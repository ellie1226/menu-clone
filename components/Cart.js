import React from "react";
import { t } from "ttag";
import { X, Plus, Minus } from "react-feather";

function Cart({
  deleteFromCart,
  addToCart,
  cartItems,
  isCartOpen,
  toggleCart,
}) {
  const checkoutTotal = cartItems.reduce(
    (acc, curr) => acc + curr.qty * curr.price,
    0
  );

  return (
    <div className={isCartOpen ? "cart-list active" : "cart-list"}>
      <div className="cart-close">
        <button onClick={() => toggleCart()}>
          <X />
        </button>
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <span>{t`Your Order`}</span>
          <span>{t`McDonalds's`}</span>
          <span className="text-light">{t`Maximum order limit $1,000`}</span>
          <div className="cart-checkout">
            <span>Checkout</span>
            <span>{t`$${checkoutTotal.toFixed(2)}`}</span>
          </div>
        </div>
      )}
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          return (
            <div className="cart-container" key={item.id}>
              <span className="product-col-left-text">{t`${item.qty} x`}</span>
              <div className="cart-product-list">
                <h3 className="product-col-left-subtitle">{item.name}</h3>
                <div className="product-col-left-buttons">
                  <button onClick={() => deleteFromCart(item)}>
                    <Minus />
                  </button>
                  <button onClick={() => addToCart(item)}>
                    <Plus />
                  </button>
                </div>
              </div>
              <span className="product-col-left-text">{t`$${item.price.toFixed(
                2
              )}`}</span>
            </div>
          );
        })
      ) : (
        <div className="cart-empty-container">
          <span className="text-light">{t`Your cart is empty`}</span>
          <span className="text-light">{t`Add items to get started`}</span>
        </div>
      )}
    </div>
  );
}

export default Cart;
