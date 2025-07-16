import React from "react";
import styles from "./index.module.scss";
import {useParams} from "react-router-dom";
import dogs from "../../data/dogs";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import GalleryLightbox from "../../components/GalleryLightbox/GalleryLightbox";
import Card from "../../components/Homepage/Card/Card";

export default function SingleDog() {
  const {id} = useParams();
  const dog = dogs.find((d) => d.id === parseInt(id));

  if (!dog) return <p>Dog not found</p>;
  console.log(dogs);
  return (
    <section className={styles.singleDog}>
      <Container>
        <section className={styles.hero}>
          {/* <div className={styles.overlay}></div> */}
          <h1>Our Dogs</h1>
          <p>
            {dog.breed} - {dog.name}
          </p>
        </section>
        <section className={styles.mainDetails}>
          <div className={styles.left}>
            <img src={dog.image} lazy="loading" />
            <p className={styles.description}>{dog.description}</p>
          </div>
          <div className={styles.right}>
            <h2>DOBERMAN BLACK & RUST</h2>
            <h3>2,800$</h3>

            <Button variant="primary">Contact Us</Button>
            <div className={styles.details}>
              <div>
                <span className={styles.detleft}>SKU</span>
                <span className={styles.detright}>: {dog.SKU}</span>
              </div>
              <div>
                <span className={styles.detleft}>Gender</span>
                <span className={styles.detright}>: {dog.gender}</span>
              </div>
              <div>
                <span className={styles.detleft}>Age</span>
                <span className={styles.detright}>: {dog.age}</span>
              </div>
              <div>
                <span className={styles.detleft}>Size</span>
                <span className={styles.detright}>: {dog.size}</span>
              </div>
              <div>
                <span className={styles.detleft}>Color</span>
                <span className={styles.detright}>: {dog.color}</span>
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
          {dog.gallery && <GalleryLightbox images={dog.gallery} />}
        </section>

        <section className={styles.seeMore}>
          <h2>See More Puppies</h2>
          <div className={styles.moreGrid}>
            <div className={styles.dogList}>
              {dogs.slice(0, 4).map((dog) => (
                <Card
                  key={dog.id}
                  id={dog.id}
                  image={dog.image}
                  breed={dog.breed}
                  gender={dog.gender}
                  age={dog.age}
                  price={dog.price}
                />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
