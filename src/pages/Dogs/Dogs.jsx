import React, {useEffect, useState} from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";
import CardList from "../../components/Homepage/CardList/CardList";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import SkeletonFilter from "../../components/SkeletonCard/SkeletonFilter";

function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);

  const [colourFilter, setColourFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);

  const [availableColours, setAvailableColours] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [availableGenders, setAvailableGenders] = useState([]);
  const [raceFilter, setRaceFilter] = useState([]);
  const [availableRaces, setAvailableRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get("https://ergji.com/wp-json/wp/v2/dog");
        const allDogs = response.data;
        setDogs(allDogs);
        setFilteredDogs(allDogs);

        const colours = allDogs
          .map((dog) => dog.acf.colour?.toLowerCase())
          .filter(
            (value, index, self) => value && self.indexOf(value) === index
          );
        setAvailableColours(colours);

        const sizes = allDogs
          .map((dog) => dog.acf.size?.toLowerCase())
          .filter(
            (value, index, self) => value && self.indexOf(value) === index
          );
        setAvailableSizes(sizes);

        const genders = allDogs
          .map((dog) => dog.acf.gender?.toLowerCase())
          .filter(
            (value, index, self) => value && self.indexOf(value) === index
          );
        setAvailableGenders(genders);

        const races = allDogs
          .flatMap((dog) =>
            dog.class_list.filter((cls) => cls.startsWith("category-"))
          )
          .map((cls) => cls.replace("category-", "").toLowerCase())
          .filter(
            (value, index, self) => value && self.indexOf(value) === index
          );

        setAvailableRaces(races);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchDogs();
  }, []);

  const toggleSingleSelectFilter = (
    filterValue,
    filterArray,
    setFilterArray
  ) => {
    if (filterArray.includes(filterValue)) {
      setFilterArray([]);
    } else {
      setFilterArray([filterValue]);
    }
  };

  const clearFilter = (setFilterArray) => {
    setFilterArray([]);
  };

  useEffect(() => {
    let filtered = dogs;

    if (colourFilter.length > 0) {
      filtered = filtered.filter((dog) =>
        colourFilter.includes(dog.acf.colour?.toLowerCase())
      );
    }

    if (genderFilter.length > 0) {
      filtered = filtered.filter((dog) =>
        genderFilter.includes(dog.acf.gender?.toLowerCase())
      );
    }

    if (sizeFilter.length > 0) {
      filtered = filtered.filter((dog) =>
        sizeFilter.includes(dog.acf.size?.toLowerCase())
      );
    }

    if (raceFilter.length > 0) {
      filtered = filtered.filter((dog) =>
        dog.class_list.some((cls) =>
          raceFilter.includes(cls.replace("category-", "").toLowerCase())
        )
      );
    }

    setFilteredDogs(filtered);
  }, [colourFilter, genderFilter, sizeFilter, raceFilter, dogs]);
  const toggleFilters = () => {
    setFiltersVisible((prev) => !prev);
  };

  return (
    <section className={styles.dogs}>
      <Container>
        <section className={styles.hero}>
          <div className={styles.filters}>
            <div onClick={toggleFilters} className={styles.toggleButton}>
              {filtersVisible ? "Hide Filters" : "Show Filters"}
            </div>
            <div
              className={`${styles.row} ${
                filtersVisible ? styles.active : ""
              }`}>
              {loading ? (
                <SkeletonFilter />
              ) : (
                <div className={styles.twenty}>
                  Color
                  <div className={styles.sizeOptions}>
                    <div
                      className={`${styles.sizeOption} ${
                        colourFilter.length === 0 ? styles.selected : ""
                      }`}
                      onClick={() => clearFilter(setColourFilter)}
                      tabIndex={0}
                      role="button">
                      All
                    </div>
                    {availableColours.map((color, index) => (
                      <div
                        key={index}
                        className={`${styles.sizeOption} ${
                          colourFilter.includes(color) ? styles.selected : ""
                        }`}
                        onClick={() =>
                          toggleSingleSelectFilter(
                            color,
                            colourFilter,
                            setColourFilter
                          )
                        }
                        tabIndex={0}
                        role="button">
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {loading ? (
                <SkeletonFilter />
              ) : (
                <div className={styles.twenty}>
                  Gender
                  <div className={styles.sizeOptions}>
                    <div
                      className={`${styles.sizeOption} ${
                        genderFilter.length === 0 ? styles.selected : ""
                      }`}
                      onClick={() => clearFilter(setGenderFilter)}
                      tabIndex={0}
                      role="button">
                      All
                    </div>
                    {availableGenders.map((gender) => (
                      <div
                        key={gender}
                        className={`${styles.sizeOption} ${
                          genderFilter.includes(gender) ? styles.selected : ""
                        }`}
                        onClick={() =>
                          toggleSingleSelectFilter(
                            gender,
                            genderFilter,
                            setGenderFilter
                          )
                        }
                        tabIndex={0}
                        role="button">
                        {gender.charAt(0).toUpperCase() + gender.slice(1)}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {loading ? (
                <SkeletonFilter />
              ) : (
                <div className={styles.twenty}>
                  Size
                  <div className={styles.sizeOptions}>
                    <div
                      className={`${styles.sizeOption} ${
                        sizeFilter.length === 0 ? styles.selected : ""
                      }`}
                      onClick={() => clearFilter(setSizeFilter)}
                      tabIndex={0}
                      role="button">
                      All
                    </div>
                    {availableSizes.map((size, index) => (
                      <div
                        key={index}
                        className={`${styles.sizeOption} ${
                          sizeFilter.includes(size) ? styles.selected : ""
                        }`}
                        onClick={() =>
                          toggleSingleSelectFilter(
                            size,
                            sizeFilter,
                            setSizeFilter
                          )
                        }
                        tabIndex={0}
                        role="button">
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {loading ? (
                <SkeletonFilter />
              ) : (
                <div className={styles.twenty}>
                  Race
                  <div className={styles.sizeOptions}>
                    <div
                      className={`${styles.sizeOption} ${
                        raceFilter.length === 0 ? styles.selected : ""
                      }`}
                      onClick={() => clearFilter(setRaceFilter)}
                      tabIndex={0}
                      role="button">
                      All
                    </div>
                    {availableRaces.map((race, index) => (
                      <div
                        key={index}
                        className={`${styles.sizeOption} ${
                          raceFilter.includes(race) ? styles.selected : ""
                        }`}
                        onClick={() =>
                          toggleSingleSelectFilter(
                            race,
                            raceFilter,
                            setRaceFilter
                          )
                        }
                        tabIndex={0}
                        role="button">
                        {race.charAt(0).toUpperCase() +
                          race.slice(1).replace(/-/g, " ")}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {loading ? (
          <div className={styles.cardGrid} style={{marginTop: 30}}>
            {Array.from({length: 8}).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : filteredDogs.length > 0 ? (
          <CardList items={filteredDogs} />
        ) : (
          <div className={styles.noResults}>
            No dogs found with selected filters.
          </div>
        )}
      </Container>
    </section>
  );
}

export default Dogs;
