import React, {useEffect, useState} from "react";
import styles from "./index.module.scss";
import {useParams} from "react-router-dom";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import GalleryLightbox from "../../components/GalleryLightbox/GalleryLightbox";
import Card from "../../components/Homepage/Card/Card";
import {getDogById, getAllDogs, getAllParents} from "../../data/dogsWP";
import SingleDogSkeleton from "./SingleDogSkeleton";
export default function SingleDog() {
  const {id} = useParams();
  const [dog, setDog] = useState(null);
  const [otherDogs, setOtherDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mother, setMother] = useState(null);
  const [father, setFather] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const dogData = await getDogById(id);
        const motherID = dogData.acf?.female.ID || null;
        const motherData = await getAllParents(motherID);
        const fatherID = dogData.acf?.Stud.ID || null;
        const fatherData = await getAllParents(fatherID);
        const allDogs = await getAllDogs(id);
        setDog(dogData);
        setOtherDogs(allDogs.filter((d) => d.id !== parseInt(id)).slice(0, 4));
        setMother(motherData);
        setFather(fatherData);
      } catch (error) {
        console.error("Error fetching dog:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    return <SingleDogSkeleton />;
  }
  if (!dog) {
    return <p>Dog not found</p>;
  }
  console.log(dog);
  console.log(mother, father);

  // Dangerous HTML TEXT
  function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  const plainText = stripHtml(dog.content.rendered);

  //calcyulate age

  function calculateAge(birthDateStr) {
    if (!birthDateStr) return "Unknown";

    const [day, month, year] = birthDateStr.split("/").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    // Optional: prevent future dates
    if (birthDate > today) return "Invalid date";

    return `${years} year${years !== 1 ? "s" : ""} ${months} month${
      months !== 1 ? "s" : ""
    }`;
  }

  //check for gender and size in dog array
  function getGenderFromClassList(classList) {
    if (classList.includes("category-female")) return "Female";
    if (classList.includes("category-male")) return "Male";
    return "Unknown";
  }

  function getSizeFromClassList(classList) {
    if (classList.includes("category-puppy")) return "Puppy";
    if (classList.includes("category-adult")) return "Adult";
    return "Unknown";
  }

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
    <section className={styles.singleDog}>
      <Container>
        <section className={styles.hero}>
          <div className={styles.overlay}></div>
          <h1>Our Dogs</h1>
          <p>
            {dog.title.rendered} - {dog.title.rendered}
          </p>
        </section>

        <section className={styles.parentsSection}>
          <div className={styles.parentsGrid}>
            <div className={styles.parentsInfo}>
              <div className={styles.top}>
                <img
                  src={mother.acf.picture.url || mother.acf.picture}
                  alt={mother.acf.picture}
                  loading="lazy"
                />
                <p className={styles.description}>{plainText}</p>
              </div>
              <div className={styles.bottom}>
                <h2>{dog.acf.female.post_title}</h2>

                <Button variant="primary">Contact Us</Button>
                <div className={styles.details}>
                  <div>
                    <span className={styles.detleft}>Gender</span>
                    <span className={styles.detright}>
                      : {getGenderFromClassList(mother.class_list)}
                    </span>
                  </div>
                  <div>
                    <span className={styles.detleft}>Age</span>
                    <span className={styles.detright}>
                      : {calculateAge(mother.acf.age)}
                    </span>
                  </div>
                  <div>
                    <span className={styles.detleft}>Size</span>
                    <span className={styles.detright}>
                      : {getSizeFromClassList(mother.class_list)}
                    </span>
                  </div>
                  <div>
                    <span className={styles.detleft}>Color</span>
                    <span className={styles.detright}>
                      : {mother.acf.colour}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.parentsInfo}>
              <div className={styles.top}>
                <img
                  src={father.acf.picture.url || father.acf.picture}
                  alt={father.acf.picture}
                  loading="lazy"
                />
                <p className={styles.description}>{plainText}</p>
              </div>
              <div className={styles.bottom}>
                <h2>{dog.acf.Stud.post_title}</h2>

                <Button variant="primary">Contact Us</Button>
                <div className={styles.details}>
                  <div>
                    <span className={styles.detleft}>Gender</span>
                    <span className={styles.detright}>
                      : {getGenderFromClassList(father.class_list)}
                    </span>
                  </div>
                  <div>
                    <span className={styles.detleft}>Age</span>
                    <span className={styles.detright}>
                      : {calculateAge(father.acf.age)}
                    </span>
                  </div>
                  <div>
                    <span className={styles.detleft}>Size</span>
                    <span className={styles.detright}>
                      : {getSizeFromClassList(father.class_list)}
                    </span>
                  </div>
                  <div>
                    <span className={styles.detleft}>Color</span>
                    <span className={styles.detright}>
                      : {father.acf.colour}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mainDetails}>
          <div className={styles.left}>
            <img
              src={dog.acf.picture.url || dog.acf.picture}
              alt={dog.title.rendered}
              loading="lazy"
            />
            <p className={styles.description}>{plainText}</p>
          </div>
          <div className={styles.right}>
            <h2>{dog.title.rendered}</h2>
            <h3>{dog.acf.price}</h3>

            <Button variant="primary">Contact Us</Button>
            <div className={styles.details}>
              <div>
                <span className={styles.detleft}>SKU</span>
                <span className={styles.detright}>: {dog.id}</span>
              </div>
              <div>
                <span className={styles.detleft}>Gender</span>
                <span className={styles.detright}>
                  : {getGenderFromClassList(dog.class_list)}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Age</span>
                <span className={styles.detright}>
                  : {calculateAge(dog.acf.age)}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Size</span>
                <span className={styles.detright}>
                  : {getSizeFromClassList(dog.class_list)}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Color</span>
                <span className={styles.detright}>: {dog.acf.colour}</span>
              </div>
              <div>
                <span className={styles.detleft}>Vaccinated</span>
                <span className={styles.detright}>
                  : {dog.vaccinated ? "Yes" : "No"}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Certified</span>
                <span className={styles.detright}>
                  : {dog.cert ? "Yes" : "No"}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Dewormed</span>
                <span className={styles.detright}>
                  : {dog.dewormed ? "Yes" : "No"}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Microchip</span>
                <span className={styles.detright}>
                  : {dog.microchip ? "Yes" : "No"}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Location</span>
                <span className={styles.detright}>: {dog.location}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.gallery}>
          {dog.acf.gallery && dog.acf.gallery.length > 0 && (
            <GalleryLightbox
              images={dog.acf.gallery.map((img) => img.image || img)}
            />
          )}
        </section>

        <section className={styles.seeMore}>
          <h2>See More Puppies</h2>
          <div className={styles.moreGrid}>
            <div className={styles.dogList}>
              {otherDogs.slice(0, 4).map((dog) => (
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
          </div>
        </section>
      </Container>
    </section>
  );
}
