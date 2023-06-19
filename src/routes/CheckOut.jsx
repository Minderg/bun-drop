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
  const [phonenumber, setPhonenumber] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const date = (date) => {
    setStartDate(date);
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
    } else if (!phonenumber && !creditCardNumber && !cvc) {
      toast.error("You need to choose a payment method");
    } else if (phonenumber && phonenumber.length !== 10) {
      toast.error("Phonenumber need to be 10 digits!");
    } else if (
      (creditCardNumber && creditCardNumber.length !== 16) ||
      (!creditCardNumber && cvc) ||
      (creditCardNumber && !cvc) ||
      (cvc && cvc.length !== 3)
    ) {
      toast.error("Credit card number need to be 16 digits and CVC 3 digits!");
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
        <div className="input-swish">
          <img src="/assets/swish.png" className="swish" />
          <label>
            <input
              className="input-phonenumber"
              type="text"
              placeholder="Phonenumber"
              onChange={(e) => setPhonenumber(e.target.value)}
              value={phonenumber}
            />
          </label>
        </div>
        <div className="input-credit">
          <img src="/assets/credit-card.png" className="credit-card" />
          <label>
            <input
              className="input-credit-card"
              type="text"
              placeholder="Credit Card Number"
              onChange={(e) => setCreditCardNumber(e.target.value)}
              value={creditCardNumber}
            />
          </label>
          <label>
            <input
              className="input-credit-card"
              type="text"
              placeholder="CVC"
              onChange={(e) => setCvc(e.target.value)}
              value={cvc}
            />
          </label>
          <label>
            <DatePicker
              className="input-credit-card"
              selected={startDate}
              onChange={date}
              dateFormat="dd/MM/yyyy"
              placeholderText="Expiration date"
            />
          </label>
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
