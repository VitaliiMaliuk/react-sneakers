import React from "react";
import axios from "axios";
import Card from "../components/Card/index";
import AppContext from "../context";

function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://63fe2268370fe830d9cee7c8.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Error while requesting orders");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>My Orders</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item) => (
          <Card
            key={item.title}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            id={item.id}
            loading={isLoading}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
