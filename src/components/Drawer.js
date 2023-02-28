function Drawer({ onClose, onRemove, items = [] }) {
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

        {items.length > 0 ? (
          <div>
          <div className="items">
            {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
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
        ) : (
          <div className="cartEmpty d-flex align-center justify-content flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Empty Cart</h2>
            <p className="opacity-6">
              Add at least one pair of sneakers to place an order
            </p>
            <button className="greenButton" onClick={onClose}>
              <img src="/img/arrow.svg" alt="Come Back" />
              Come Back
            </button>
          </div>
        )}

        
      </div>
    </div>
  );
}
export default Drawer;
