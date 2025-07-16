import React from "react";
import Card from "../Card/Card";
import dogs from "../../../data/dogs";
import styles from "./index.module.scss";

function CardList({ limit }) {
  const dogList = limit ? dogs.slice(0, limit) : dogs;

  return (
    <div className={styles.dogList}>
      {dogList.map((dog) => (
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