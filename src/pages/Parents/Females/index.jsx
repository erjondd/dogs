import React from "react";
import styles from "./index.module.scss";
import Container from "../../../components/Container/Container";

import {getAllFemaleParents} from "../../../data/dogsWP";
import CardList from "../../../components/Homepage/CardList/CardList";

export default function Females() {
  return (
    <section className={styles.singleDog}>
      <Container>
        <CardList fetchData={getAllFemaleParents} />
      </Container>
    </section>
  );
}
