import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import styles from "./Card.module.scss";


function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={270}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="106" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="125" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="162" rx="8" ry="8" width="80" height="24" />
          <rect x="114" y="154" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onFavorite}>
            <img
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
              alt="Heart Unliked"
              onClick={onClickFavorite}
            />
          </div>

          <img width={133} height={112} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between  align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price} грн.</b>
            </div>

            <img
              className={styles.plus}
              src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="Plus"
              onClick={onClickPlus}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
