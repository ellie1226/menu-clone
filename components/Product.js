import React from "react";
import { t } from "ttag";

function Product({ products, addToCart }) {
  const categories = products[0].categories || [];
  const items = products[0].items || [];

  const getCategoryItems = (category) => {
    const menuItems = items.map((item) => {
      if (category == item.cat) {
        return (
          <div className="product-item-container" key={item.id}>
            <div className="product-col-left">
              <h3 className="product-col-left-subtitle">{item.name}</h3>
              <span className="product-col-left-text text-light">
                {item.calories}
              </span>
              <span className="product-col-left-text">{t`$${item.price}`}</span>
              <button
                className="product-col-left-cart"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
            <img
              loading="eager"
              className="product-col-right-image"
              src={item.img}
              alt="The Saweetie Meal"
            />
          </div>
        );
      }
    });
    return menuItems;
  };

  const getCategories = (categories) => {
    const gridItems = categories.map((category, index) => {
      return (
        <div className="product-item-title" key={index}>
          <h2>{category}</h2>
          <div className="product-item-col-grid">
            {items.length && getCategoryItems(category)}
          </div>
        </div>
      );
    });

    return gridItems;
  };

  return (
    <div className="product-list">
      {getCategories(categories)}
      <div className="product-disclaimer">
        <small>Prices on this menu are set directly by the Merchant.</small>
        <small>
          2,000 calories a day is used for general nutrition advice, but calorie
          needs vary. Additional nutrition information available here
        </small>
        <small>Prices may differ between Delivery and Pickup.</small>
      </div>
    </div>
  );
}

export default Product;
