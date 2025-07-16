import React from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";

function Dogs() {
  return (
    <section className={styles.dogs}>
      <Container>
        <section className={styles.hero}>
          {/* <div className={styles.overlay}></div> */}
          <h1>Discover our Doberman collection</h1>
          <p>Home / Our Dogs</p>
          <div className={styles.filters}>
            <div className={styles.fourty}>Race</div>
            <div className={styles.twenty}>Age</div>
            <div className={styles.twenty}>Size</div>
            <div className={styles.twenty}>Color</div>
            <div className={styles.twenty}>Gender </div>
            <div className={styles.twenty}>Location</div>
            <div className={styles.twenty}>Cert</div>
            <div className={styles.twenty}>Vaccinated</div>
            <div className={styles.twenty}>Price Range</div>
          </div>
        </section>
      </Container>
    </section>
  );
}

export default Dogs;
