import React from "react";
import styles from "./index.module.scss";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function Card({id, image, breed, gender, age, price, type}) {
  return (
    <Link to={`/${type}/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.image}>
          <LazyLoadImage src={image} effect="blur" height="100%" width="100%" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{breed}</h3>
          <div className={styles.description}>
            <div className={styles.gender}>
              Gender: <span>{gender}</span>
            </div>
            <div className={styles.age}>
              Age: <span>{age}</span>
            </div>
          </div>
          {price && <div className={styles.price}>{price} €</div>}
        </div>
      </div>
    </Link>
  );
}

export default Card;
