import React, { useEffect, useState } from "react";
import styles from "../SingleDog/index.module.scss";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import GalleryLightbox from "../../components/GalleryLightbox/GalleryLightbox";
import Card from "../../components/Homepage/Card/Card";
import { getAllAdoption, getAllAdoptions } from "../../data/dogsWP";
import SingleDogSkeleton from "../SingleDog/SingleDogSkeleton";
export default function SingleAdoption() {
  const { id } = useParams();
  const [parent, setParent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [otherDogs, setOtherDogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllAdoptions(id);
        const allDogs = await getAllAdoption();
        setOtherDogs(allDogs.filter((d) => d.id !== parseInt(id)).slice(0, 4));
        setParent(data);
      } catch (error) {
        console.error("Error fetching parent dog:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <SingleDogSkeleton />;
  if (!parent) return <p>Parent not found</p>;

  function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
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

  const plainText = stripHtml(parent.content.rendered);
  return (
    <section className={styles.singleDog}>
      <Container>
        <section className={styles.mainDetails}>
          <div className={styles.left}>
            <img
              src={parent.acf.picture.url || parent.acf.picture}
              alt={parent.title.rendered}
              loading="lazy"
            />
            <p className={styles.description}>{plainText}</p>
          </div>
          <div className={styles.right}>
            <h2>{parent.title.rendered}</h2>
            <h3>{parent.acf.price}</h3>
            <Link to="/contact-us">
              <Button variant="primary">Contact Us</Button>
            </Link>
            <div className={styles.details}>
              <div>
                <span className={styles.detleft}>SKU</span>
                <span className={styles.detright}>: {parent.id}</span>
              </div>
              <div>
                <span className={styles.detleft}>Gender</span>
                <span className={styles.detright}>
                  : {getGenderFromClassList(parent.class_list)}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Age</span>
                <span className={styles.detright}>
                  : {calculateAgeDisplay(parent.acf.age)}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Size</span>
                <span className={styles.detright}>
                  : {getSizeFromClassList(parent.class_list)}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Color</span>
                <span className={styles.detright}>: {parent.acf.colour}</span>
              </div>
              <div>
                <span className={styles.detleft}>Vaccinated</span>
                <span className={styles.detright}>
                  : {parent.vaccinated ? "Yes" : "No"}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Certified</span>
                <span className={styles.detright}>
                  : {parent.cert ? "Yes" : "No"}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Dewormed</span>
                <span className={styles.detright}>
                  : {parent.dewormed ? "Yes" : "No"}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Microchip</span>
                <span className={styles.detright}>
                  : {parent.microchip ? "Yes" : "No"}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Location</span>
                <span className={styles.detright}>: {parent.location}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.gallery}>
          {parent.acf.gallery && parent.acf.gallery.length > 0 && (
            <GalleryLightbox
              images={parent.acf.gallery.map((img) => img.image || img)}
            />
          )}
        </section>

        <section className={styles.seeMore}>
          <h2>See More Adoption Puppies</h2>
          <div className={styles.moreGrid}>
            <div className={styles.dogList}>
              {otherDogs.slice(0, 4).map((dog) => (
                <Card
                  key={dog.id}
                  id={dog.id}
                  image={dog.acf.picture}
                  breed={dog.title.rendered}
                  gender={getGenderFromClassList(dog.class_list)}
                  age={calculateAgeDisplay(dog.acf.age)}
                  price={dog.acf.price}
                  type="adoption"
                />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
