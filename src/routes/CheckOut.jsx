import React, { useState } from "react";

function CheckOut() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [housenumber, setHousenumber] = useState("");
  const [swish, setSwish] = useState("");
  const [credit, setCredit] = useState("");

  const validateInfo = () => {
    if (
      !firstname ||
      !lastname ||
      !email ||
      !city ||
      !address ||
      !housenumber
    ) {
      alert("You need to enter full information");
    } else if (!swish && !credit) {
      alert("You need to choose one payment method");
    } else {
      alert(
        `Thank you for your order ${firstname} ${lastname} you payed with ${
          swish ? "Swish" : "Credit Card"
        }`
      );
      window.location.href = "/summary";
    }
  };

  return (
    <div>
      <div className="checkout-title">
        <h1>Payment</h1>
      </div>
      <div className="info-container">
        <input
          className="firstname"
          placeholder="FirstName"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
        />
        <input
          className="lastname"
          placeholder="LastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastname}
        />
        <input
          className="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="city"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <input
          className="address"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <input
          className="housenumber"
          placeholder="Housenumber"
          onChange={(e) => setHousenumber(e.target.value)}
          value={housenumber}
        />
      </div>
      <div className="payment-container">
        <img src="/assets/swish.png" className="swish" />
        <input
          type="checkbox"
          className="checkbox-swish"
          value="swish"
          checked={swish}
          onChange={(e) => setSwish(e.target.checked)}
        />
        <img src="/assets/credit-card.png" className="credit-card" />
        <input
          type="checkbox"
          className="checkbox-credit"
          value="credit"
          checked={credit}
          onChange={(e) => setCredit(e.target.checked)}
        />
      </div>
      <div className="pay">
        <button onClick={validateInfo} className="btn-pay-style">
          Pay
        </button>
      </div>
    </div>
  );
}

export default CheckOut;
