import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites() {
  const {favorites, onAddToFavorite} = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>My Favorites</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card
            key={item.title}
            favorited={true}
            onFavorite={onAddToFavorite}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
