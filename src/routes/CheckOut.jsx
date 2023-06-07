import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CheckOut() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [housenumber, setHousenumber] = useState("");
  const [isCheckSwish, setIsCheckSwish] = useState(false);
  const [inputValueSwish, setInputValueSwish] = useState("");
  const [isCheckCredit, setIsCheckCredit] = useState(false);
  const [inputValueCredit, setInputValueCredit] = useState("");
  const [cvc, setCvc] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const date = (date) => {
    setStartDate(date);
  };

  const handleCheckBoxCredit = () => {
    setIsCheckCredit(!isCheckCredit);
  };

  const handleValueCredit = (e) => {
    setInputValueCredit(e.target.value);
  };

  const handleValueCvc = (e) => {
    setCvc(e.target.value);
  };

  const handleCheckBoxSwish = () => {
    setIsCheckSwish(!isCheckSwish);
  };

  const handleValueSwish = (e) => {
    setInputValueSwish(e.target.value);
  };

  const validateInfo = () => {
    if (
      !firstname ||
      !lastname ||
      !email ||
      !city ||
      !address ||
      !housenumber
    ) {
      toast.error("You need to enter full information");
    } else if (!isCheckSwish && !isCheckCredit) {
      toast.error("You need to choose one payment method");
    } else if (isCheckSwish && !inputValueSwish) {
      toast.error("You need to enter phone number");
    } else if (isCheckCredit && !inputValueCredit && !cvc) {
      toast.error("You need to enter credit card number");
    } else {
      window.location.href = "/summary";
    }
  };

  return (
    <div>
      <ToastContainer />
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
        <div className="checkbox-swish">
          <img src="/assets/swish.png" className="swish" />
          <label>
            <input
              type="checkbox"
              value="swish"
              checked={isCheckSwish}
              onChange={handleCheckBoxSwish}
            />
          </label>

          {isCheckSwish && (
            <input
              type="text"
              value={inputValueSwish}
              onChange={handleValueSwish}
              placeholder="Phone number"
            />
          )}
        </div>
        <div className="checkbox-credit">
          <img src="/assets/credit-card.png" className="credit-card" />
          <label>
            <input
              type="checkbox"
              value="credit"
              checked={isCheckCredit}
              onChange={handleCheckBoxCredit}
            />
          </label>
          {isCheckCredit && (
            <input
              type="text"
              value={inputValueCredit}
              onChange={handleValueCredit}
              placeholder="Credit card number"
            />
          )}

          {isCheckCredit && (
            <input
              type="text"
              value={cvc}
              onChange={handleValueCvc}
              placeholder="Cvc"
            />
          )}
          {isCheckCredit && (
            <DatePicker
              selected={startDate}
              onChange={date}
              dateFormat="dd/MM/yyyy"
              placeholderText="Expiration date"
            />
          )}
        </div>
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
