import React, { useContext } from "react";
import "./Cartitems.css";
import all_product from "../../assets/all_product";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/remove.webp";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div className="cart-item" key={e.id}>
                  <div className="cart-item-left">
                    <img src={e.image} alt={e.name} className="cart-img" />
                    <div className="cart-item-details">
                      <h3>{e.name}</h3>
                      <p className="price">${e.new_price}</p>
                      <div className="cart-quantity">
                        <button>-</button>
                        <span>{cartItems[e.id]}</span>
                        <button>+</button>
                      </div>
                    </div>
                  </div>

                  <div className="cart-item-right">
                    <p className="item-total">
                      ${(e.new_price * cartItems[e.id]).toFixed(2)}
                    </p>
                    <img
                      src={remove_icon}
                      alt="Remove"
                      className="remove-btn"
                      onClick={() => removeFromCart(e.id)}
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <p>Subtotal</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>
          <div className="summary-row">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="summary-row total">
            <p>Total</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>

          <div className="promo-code">
            <p>Have a promo code?</p>
            <div className="promo-input">
              <input type="text" placeholder="Enter code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
