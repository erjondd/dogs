import React from "react";
import Card from "../Card/Card";
import styles from "./index.module.scss";
import SkeletonCard from "../../SkeletonCard/SkeletonCard";

function CardList({items = [], type = "dog"}) {
  const loading = !items || items.length === 0;

  const skeletonCount = 2;
  console.log(items.length, "items in CardList");
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
        : items.map((dog) => (
            <Card
              key={dog.id}
              id={dog.id}
              image={dog.acf.picture || ""}
              breed={dog.title.rendered || "Unknown"}
              gender={dog.gender || "Unknown"}
              age={calculateAgeDisplay(dog.acf.age || "")}
              price={dog.acf.price}
              type={type}
            />
          ))}
    </div>
  );
}

export default CardList;
