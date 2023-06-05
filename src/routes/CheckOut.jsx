import React from "react";
import { Link } from "react-router-dom";

function CheckOut() {
  return (
    <div>
      <div className="checkout-title">
        <h1>Payment</h1>
      </div>
      <div className="info-container">
        <input className="firstname" placeholder="FirstName" />
        <input className="lastname" placeholder="LastName" />
        <input className="email" placeholder="Email" />
        <input className="city" placeholder="City" />
        <input className="address" placeholder="Address" />
        <input className="house-number" placeholder="House Number" />
      </div>
      <div className="payment-container">
        <img src="/assets/swish.png" className="swish" />
        <input type="checkbox" className="checkbox-swish" />
        <img src="/assets/credit-card.png" className="credit-card" />
        <input type="checkbox" className="checkbox-credit" />
      </div>
      <div className="pay">
        <Link to="/summary">
          <button className="btn-pay-style">Pay</button>
        </Link>
      </div>
    </div>
  );
}

export default CheckOut;
