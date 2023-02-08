import React from "react";
import { moneyFormat } from "../helpers";

const Header = ({ money, total }) => {
  return (
    <div className={"header"}>
      <img className="headerImg" src="https://www.nicepng.com/png/full/86-866973_mukesh-ambani.png" height={100} width={150} />
      {'\n'}
      {total > 0 && money - total !== 0 && (
        <h1 className="headerText">
        You have {" "}{'\n'}
          <span className={"money"}>₹{moneyFormat(money - total)}</span>{" "} of
          Ambani's Fortune Money
        </h1>
      )}
      {total === 0 && (
        <h1 className="headerText">
          You have {'\n'} <span className={"money"}>₹{moneyFormat(money)}</span>{" "} of
          Ambani's Fortune Money
        </h1>
      )}
      {money - total === 0 && (
        <h1 className="headerText">
          {" "}
          You have lost all Ambani's Money
          {" "}
        </h1>
      )}
    </div>
  );
};

export default Header;
