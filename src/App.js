import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Men's Sneakers Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg"
  },
  {
    title: "Men's Sneakers Nike Air Max 270",
    price: 15999,
    imageUrl: "/img/sneakers/2.jpg"
  },
  {
    title: "Men's Sneakers Nike Blazer Mid Suede",
    price: 4500,
    imageUrl: "/img/sneakers/3.jpg"
  },
  {
    title: "Men's Sneakers X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/4.jpg"
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card
            title={obj.title}
            imageUrl={obj.imageUrl}
            price={obj.price}
          />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
