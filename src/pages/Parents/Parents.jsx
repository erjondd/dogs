import React from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";
import CardList from "../../components/Homepage/CardList/CardList";
import {getAllParent} from "../../data/dogsWP";

function Parents() {
  return (
    <section className={styles.dogs}>
      <Container>
        <CardList fetchData={getAllParent} type="parent" />
      </Container>
    </section>
  );
}

export default Parents;
