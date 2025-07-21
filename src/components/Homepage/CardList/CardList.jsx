import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import styles from "./index.module.scss";
import {getAllDogs} from "../../../data/dogsWP";
import SkeletonCard from "../../SkeletonCard/SkeletonCard";

function CardList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllDogs()
      .then(setDogs)
      .finally(() => setLoading(false));
  }, []);

  const skeletonCount = dogs.length > 0 ? dogs.length : 2;

  //calc years only for age
  function calculateAgeDisplay(birthDateStr) {
    if (!birthDateStr) return "Unknown";

    const [day, month, year] = birthDateStr.split("/").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) return "Invalid date";

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (today.getDate() < birthDate.getDate()) {
      months -= 1;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years <= 0) {
      return `${months} month${months !== 1 ? "s" : ""}`;
    } else {
      return `${years} year${years !== 1 ? "s" : ""}`;
    }
  }

  return (
    <div className={styles.dogList}>
      {loading
        ? Array.from({length: skeletonCount}).map((_, i) => (
            <SkeletonCard key={i} />
          ))
        : dogs.map((dog) => (
            <Card
              key={dog.id}
              id={dog.id}
              image={dog.acf.picture}
              breed={dog.title.rendered}
              gender={dog.gender}
              age={calculateAgeDisplay(dog.acf.age)}
              price={dog.acf.price}
            />
          ))}
    </div>
  );
}

export default CardList;
