import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src="img/Cart.svg" alt="Cart" />
          <span>{totalPrice} грн.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to={process.env.PUBLIC_URL + "/favorites"}>
            <img width={18} height={18} src="img/favorite.svg" alt="Heart" />
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/orders"}>
            <img width={18} height={18} src="img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
