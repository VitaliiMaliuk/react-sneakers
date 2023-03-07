import React from "react";
import Info from "../Info";
import axios from "axios";

import { useCart } from "../../hooks/useCart";

import styles from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63fe2268370fe830d9cee7c8.mockapi.io/orders",
        {
          items: cartItems,
        }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://63fcb13f859df29986c25472.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Error with order!");
    }
    setIsLoading(false);
  };

  return (

    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    className="cartItemImg"
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>{totalPrice} грн.</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{totalPrice * 0.05} грн. </b>
                </li>
              </ul>
              <button
                className="greenButton"
                onClick={onClickOrder}
                disabled={isLoading}
              >
                Сheckout <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Order Complete!" : "Empty Cart"}
            description={
              isOrderComplete
                ? `Your order #${orderId} will be delivered to courier soon`
                : "Add at least one pair of sneakers to place an order"
            }
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}
export default Drawer;
