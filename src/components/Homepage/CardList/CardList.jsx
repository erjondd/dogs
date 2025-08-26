import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./index.module.scss";
import SkeletonCard from "../../SkeletonCard/SkeletonCard";

function CardList({ items = [], fetchData, type = "dog" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(!items.length && !!fetchData);
  useEffect(() => {
    const fetchItems = async () => {
      if (fetchData) {
        setLoading(true);
        try {
          const response = await fetchData();
          setData(response);
        } catch (err) {
          console.error("Failed to fetch data:", err);
          setData([]);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchItems();
  }, [fetchData]);

  // Use items if passed directly, otherwise use fetched data
  const displayItems = items.length > 0 ? items : data;

  function calculateAgeDisplay(birthDateStr) {
    if (!birthDateStr) return "Unknown";
    const [day, month, year] = birthDateStr.split("/").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    if (birthDate > today) return "Invalid date";

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    if (today.getDate() < birthDate.getDate()) months -= 1;
    if (months < 0) {
      years--;
      months += 12;
    }

    if (years <= 0) return `${months} month${months !== 1 ? "s" : ""}`;
    return `${years} year${years !== 1 ? "s" : ""}`;
  }

  return (
    <div className={styles.dogList}>
      {loading
        ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
        : displayItems
          .map((dog) => (
            <Card
              key={dog.id}
              id={dog.id}
              image={dog.acf?.picture || ""}
              breed={dog.title?.rendered || "Unknown"}
              gender={dog.acf?.gender || "Unknown"}
              age={calculateAgeDisplay(dog.acf?.age || "")}
              price={dog.acf?.price}
              type={type}
            />
          ))}
    </div>
  );
}

export default CardList;
