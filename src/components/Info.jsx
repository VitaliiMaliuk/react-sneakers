import React from "react";
import AppContext from "../context";

const Info = ({ title, description, image }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-content flex-column flex">
      <img
        className="mb-20"
        width={120}
        src={image}
        alt="Empty"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button className="greenButton" onClick={() => setCartOpened(false)}>
        <img src="img/arrow.svg" alt="Come Back" />
        Come Back
      </button>
    </div>
  );
};
export default Info;
