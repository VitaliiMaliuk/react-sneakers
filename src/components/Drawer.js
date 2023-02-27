function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
            onClick={onClose}
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                className="cartItemImg"
                style={{ backgroundImage: `url(${obj.imageUrl})`}}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} грн.</b>
              </div>
              <img
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
              <b>21 498 грн.</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>1074 грн. </b>
            </li>
          </ul>
          <button className="greenButton">
            Сheckout <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
