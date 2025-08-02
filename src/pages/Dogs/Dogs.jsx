import React, {useEffect, useState} from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";
import CardList from "../../components/Homepage/CardList/CardList";
import {getAllDogs} from "../../data/dogsWP";
import {priceRanges} from "../../data/prices";
function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [filters, setFilters] = useState({
    price: "",
    age: "",
    size: "",
    color: "",
    gender: "",
  });

  useEffect(() => {
    async function fetchDogs() {
      const data = await getAllDogs();
      setDogs(data);
    }
    fetchDogs();
  }, []);
  const allColors = [...new Set(dogs.map((dog) => dog.acf.colour))];
  function getGenderFromClassList(classList) {
    if (classList.includes("category-female")) return "Female";
    if (classList.includes("category-male")) return "Male";
    return "Unknown";
  }
  const allGenders = [
    ...new Set(dogs.map((dog) => getGenderFromClassList(dog.class_list || ""))),
  ];
  function getSizeFromClassList(classList) {
    if (classList.includes("category-puppy")) return "Puppy";
    if (classList.includes("category-adult")) return "Adult";
    return "Unknown";
  }
  const allSizes = [
    ...new Set(dogs.map((dog) => getSizeFromClassList(dog.class_list || ""))),
  ];
  console.log(allSizes, "allSizes");

  console.log(allGenders, "allGenders");
  console.log(priceRanges);

  const filteredDogs = dogs.filter((dog) => {
    const price = parseInt(dog.acf.price);

    // Filter by price range
    if (
      filters.price &&
      !(price >= filters.price[0] && price <= filters.price[1])
    ) {
      return false;
    }

    // Filter by color
    if (filters.color && dog.acf.colour !== filters.color) {
      return false;
    }

    // Add other filters similarly (age, gender, size)...
    return true;
  });
  return (
    <section className={styles.dogs}>
      <Container>
        <section className={styles.hero}>
          {/* <div className={styles.overlay}></div> */}

          <div className={styles.filters}>
            <div className={styles.row}>
              <div className={styles.twenty}>
                Size
                <div className={styles.sizeOptions}>
                  <div
                    className={`${styles.sizeOption} ${
                      filters.size === "" ? styles.selected : ""
                    }`}
                    onClick={() => setFilters({...filters, size: ""})}
                    tabIndex={0}
                    role="button">
                    All
                  </div>
                  {allSizes.map((size) => (
                    <div
                      key={size}
                      className={`${styles.sizeOption} ${
                        filters.size === size ? styles.selected : ""
                      }`}
                      onClick={() => setFilters({...filters, size})}
                      tabIndex={0}
                      role="button">
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.twenty}>
                Color
                <div className={styles.sizeOptions}>
                  <div
                    className={`${styles.sizeOption} ${
                      filters.color === "" ? styles.selected : ""
                    }`}
                    onClick={() => setFilters({...filters, color: ""})}
                    tabIndex={0}
                    role="button">
                    All
                  </div>
                  {allColors.map((color) => (
                    <div
                      key={color}
                      className={`${styles.sizeOption} ${
                        filters.color === color ? styles.selected : ""
                      }`}
                      onClick={() => setFilters({...filters, color})}
                      tabIndex={0}
                      role="button">
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.twenty}>
                Gender
                <div className={styles.sizeOptions}>
                  <div
                    className={`${styles.sizeOption} ${
                      filters.gender === "" ? styles.selected : ""
                    }`}
                    onClick={() => setFilters({...filters, gender: ""})}
                    tabIndex={0}
                    role="button">
                    All
                  </div>
                  {allGenders.map((gender) => (
                    <div
                      key={gender}
                      className={`${styles.sizeOption} ${
                        filters.gender === gender ? styles.selected : ""
                      }`}
                      onClick={() => setFilters({...filters, gender})}
                      tabIndex={0}
                      role="button">
                      {gender}
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className={styles.twenty}>
                Price
                <div className={styles.sizeOptions}>
                  <div
                    className={`${styles.sizeOption} ${
                      filters.price === "" ? styles.selected : ""
                    }`}
                    onClick={() => setFilters({...filters, price: ""})}
                    tabIndex={0}
                    role="button">
                    All
                  </div>
                  {priceRanges.map(({label, value}) => (
                    <div
                      key={label}
                      className={`${styles.sizeOption} ${
                        JSON.stringify(filters.price) === JSON.stringify(value)
                          ? styles.selected
                          : ""
                      }`}
                      onClick={() => setFilters({...filters, price: value})}
                      tabIndex={0}
                      role="button">
                      {label}
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <CardList fetchData={getAllDogs} />
      </Container>
    </section>
  );
}

export default Dogs;
