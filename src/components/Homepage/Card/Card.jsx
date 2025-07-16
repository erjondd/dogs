import React from "react";
import styles from "./index.module.scss";
import {Link} from "react-router-dom";
function Card({id, image, breed, gender, age, price}) {
  return (
    <Link to={`/dog/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={image} alt={breed} />
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
          <div className={styles.price}>{price}</div>
        </div>
      </div>
    </Link>
  );
}
export default Card;
