import React from "react";

import Card from "../components/Card";


function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      isLoading
        ? [...Array(8).fill(<Card isLoading={isLoading} />)]
        : filtredItems
    ).map((item) => (
      <Card
        key={item.title}
        title={item.title}
        imageUrl={item.imageUrl}
        price={item.price}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        id={item.id}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Seach by: "${searchValue}"` : "All Sneakers"}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="cu-p clear"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
