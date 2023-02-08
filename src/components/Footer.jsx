import React from "react";
import { moneyFormat } from "../helpers";
import '../App.css';

const Footer = ({ setBasket, basket, total }) => {
  const clearBasket = () => {
    setBasket([]);
  };
  return (
    <div className={"footer"}>
      <div className={"footer-header"}>Your Cart</div>
      <div className={"footer-container"}>
        {basket.map((item) => (
          <div className={"footer-basket-item"} key={item.id}>
            <span>{item.title}</span>
            <span> {item.amount}</span>
          </div>
        ))}
      </div>
      <div className="button-container">
        <span>Total: ₹{moneyFormat(total)}</span>
        <button onClick={clearBasket} className="btn btn-reset">
          reset Cart
        </button>
      </div>
    </div>
  );
};
export default Footer;
