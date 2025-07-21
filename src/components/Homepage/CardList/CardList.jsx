import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import styles from "./index.module.scss";
import {getAllDogs} from "../../../data/dogsWP";

function CardList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllDogs()
      .then(setDogs)
      .finally(() => setLoading(false));
  }, []);
  console.log(dogs);
  if (loading) return <p>Loading...</p>;
  return (
    <div className={styles.dogList}>
      {dogs.map((dog) => (
        <Card
          key={dog.id}
          id={dog.id}
          image={dog.acf.picture}
          breed={dog.title.rendered}
          gender={dog.gender}
          age={dog.acf.age}
          price={dog.acf.price}
        />
      ))}
    </div>
  );
}

export default CardList;
