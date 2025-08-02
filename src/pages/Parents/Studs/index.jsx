import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styles from "./index.module.scss";
import Container from "../../"
import Button from "../../components/Button/Button";
import GalleryLightbox from "../../components/GalleryLightbox/GalleryLightbox";
import Card from "../../components/Homepage/Card/Card";
import {getAllParents} from "../../data/dogsWP";
import SingleDogSkeleton from "../Dog/SingleDogSkeleton"; // reuse dog skeleton if same layout

export default function Studs() {
  const {id} = useParams();
  const [stud, setStud] = useState(null);
  const [loading, setLoading] = useState(true);
  const [otherStuds, setOtherStuds] = useState([]);

  useEffect(() => {
    async function fetchStudData() {
      try {
        const studData = await getAllParents(id);
        const allParents = await getAllParents(); // get all
        setStud(studData);
        setOtherStuds(
          allParents.filter(
            (p) =>
              p.id !== parseInt(id) && p.class_list.includes("category-male")
          )
        );
      } catch (error) {
        console.error("Error fetching stud:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStudData();
  }, [id]);

  if (loading) return <SingleDogSkeleton />;
  if (!stud) return <p>Stud not found</p>;

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

    if (years <= 0) return `${months} month${months !== 1 ? "s" : ""}`;
    return `${years} year${years !== 1 ? "s" : ""}`;
  }

  function getGenderFromClassList(classList) {
    if (classList.includes("category-male")) return "Male";
    if (classList.includes("category-female")) return "Female";
    return "Unknown";
  }

  function getSizeFromClassList(classList) {
    if (classList.includes("category-adult")) return "Adult";
    if (classList.includes("category-puppy")) return "Puppy";
    return "Unknown";
  }

  const plainText = stripHtml(stud.content.rendered);

  return (
    <section className={styles.singleDog}>
      {/* <Container>
        <section className={styles.mainDetails}>
          <div className={styles.left}>
            <img
              src={stud.acf.picture?.url || stud.acf.picture}
              alt={stud.title.rendered}
              loading="lazy"
            />
            <p className={styles.description}>{plainText}</p>
          </div>
          <div className={styles.right}>
            <h2>{stud.title.rendered}</h2>
            <Button variant="primary">Contact Us</Button>
            <div className={styles.details}>
              <div>
                <span className={styles.detleft}>Gender</span>
                <span className={styles.detright}>
                  : {getGenderFromClassList(stud.class_list)}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Age</span>
                <span className={styles.detright}>
                  : {calculateAgeDisplay(stud.acf.age)}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Size</span>
                <span className={styles.detright}>
                  : {getSizeFromClassList(stud.class_list)}
                </span>
              </div>
              <div>
                <span className={styles.detleft}>Color</span>
                <span className={styles.detright}>: {stud.acf.colour}</span>
              </div>
            </div>
          </div>
        </section>

        {stud.acf.gallery?.length > 0 && (
          <section className={styles.gallery}>
            <GalleryLightbox
              images={stud.acf.gallery.map((img) => img.image || img)}
            />
          </section>
        )}

        <section className={styles.seeMore}>
          <h2>Other Studs</h2>
          <div className={styles.moreGrid}>
            {otherStuds.slice(0, 4).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.acf.picture}
                breed={item.title.rendered}
                gender={getGenderFromClassList(item.class_list)}
                age={calculateAgeDisplay(item.acf.age)}
                price={item.acf.price}
              />
            ))}
          </div>
        </section>
      </Container> */}
      asdasd
    </section>
  );
}
