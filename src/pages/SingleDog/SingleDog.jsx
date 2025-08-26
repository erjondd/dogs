import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import GalleryLightbox from "../../components/GalleryLightbox/GalleryLightbox";
import Card from "../../components/Homepage/Card/Card";
import { getDogById, getAllDogs, getAllParents } from "../../data/dogsWP";
import SingleDogSkeleton from "./SingleDogSkeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function SingleDog() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [otherDogs, setOtherDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mother, setMother] = useState(null);
  const [father, setFather] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const dogData = await getDogById(id);
        const motherID = dogData.acf?.female?.ID;
        const fatherID = dogData.acf?.stud?.ID;
        const allDogs = await getAllDogs(id);
        setDog(dogData);
        setOtherDogs(allDogs.filter((d) => d.id !== parseInt(id)).slice(0, 4));
        if (motherID) {
          const motherData = await getAllParents(motherID);
          setMother(motherData);
        }
        if (fatherID) {
          const fatherData = await getAllParents(fatherID);
          setFather(fatherData);
        }
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

  function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

  const plainText = stripHtml(dog?.content.rendered) || "";
  const motherText = stripHtml(mother?.content.rendered) || "";
  const fatherText = stripHtml(father?.content.rendered) || "";

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

    if (birthDate > today) return "Invalid date";

    return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""
      }`;
  }

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

  function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <section className={styles.singleDog}>
      <Container>
        <section className={styles.mainDetails}>
          <div className={styles.left}>
            <div className={styles.leftImage}>
              <LazyLoadImage
                src={dog.acf.picture.url || dog.acf.picture}
                alt={dog.title.rendered}
                effect="blur"
                height="100%"
                width="100%"
              />
            </div>
            <p className={styles.description}>{plainText}</p>
          </div>
          <div className={styles.right}>
            <h2>{dog.title.rendered}</h2>
            <h3>{dog.acf.price}</h3>
            <Link to="/contact-us">
              <Button variant="primary">Contact Us</Button>
            </Link>
            <div className={styles.details}>
              <div>
                <span className={styles.detleft}>SKU</span>
                <span className={styles.detright}>: {dog.id}</span>
              </div>
              <div>
                <span className={styles.detleft}>Gender</span>
                <span className={styles.detright}>: {dog.acf.gender}</span>
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
                  : {capitalizeFirstLetter(dog.acf.size)}
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
        <section className={styles.parentsSection}>
          <div className={styles.parentsGrid}>
            {mother ? (
              <div className={styles.parentsInfo}>
                <div className={styles.top}>
                  <div className={styles.leftImage}>
                    <LazyLoadImage
                      src={mother.acf.picture.url || mother.acf.picture}
                      alt={mother.acf.picture}
                      effect="blur"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <h2>
                    <span>Parent Female:</span>
                    <span>{mother.title.rendered}</span>
                  </h2>
                  <p className={styles.description}>{motherText}</p>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div>
                      <span className={styles.detleft}>Gender</span>
                      <span className={styles.detright}>
                        : {mother.acf.gender}
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
                      <span className={styles.detright}>: {dog.acf.size}</span>
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
            ) : null}
            {father ? (
              <div className={styles.parentsInfo}>
                <div className={styles.top}>
                  <div className={styles.leftImage}>
                    <LazyLoadImage
                      src={father.acf.picture.url || father.acf.picture}
                      alt={father.acf.picture}
                      effect="blur"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <h2>
                    <span>Parent Stud:</span>
                    <span>{father.title.rendered}</span>
                  </h2>
                  <p className={styles.description}>{fatherText}</p>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div>
                      <span className={styles.detleft}>Gender</span>
                      <span className={styles.detright}>
                        : {father.acf.gender}
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
                      <span className={styles.detright}>: {father.acf.size}</span>
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
            ) : null}
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
                  type="dog"
                />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
