import React from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";
import CardList from "../../components/Homepage/CardList/CardList";
import {getAllAdoption} from "../../data/dogsWP";

function Adoption() {
  return (
    <section className={styles.dogs}>
      <Container>
        <CardList fetchData={getAllAdoption} />
      </Container>
    </section>
  );
}

export default Adoption;
