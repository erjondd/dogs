import React from "react";
import styles from "./index.module.scss";
import Container from "../../../components/Container/Container";

import { getAllMales } from "../../../data/dogsWP";
import CardList from "../../../components/Homepage/CardList/CardList";

export default function Studs() {
  return (
    <section className={styles.singleDog}>
      <Container>
        <CardList fetchData={getAllMales} type="parent" />
      </Container>
    </section>
  );
}
