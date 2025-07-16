import React from "react";
import Card from "../Card/Card";
import dogs from "../../../data/dogs";
import styles from "./index.module.scss";

function CardList() {
  return (
    <div className={styles.dogList}>
      {dogs.slice(0, 8).map((dog) => (
        <Card
          key={dog.id}
          id={dog.id}
          image={dog.image}
          breed={dog.breed}
          gender={dog.gender}
          age={dog.age}
          price={dog.price}
        />
      ))}
    </div>
  );
}

export default CardList;
