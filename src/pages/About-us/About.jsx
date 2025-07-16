import React from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";
function About() {
  return (
    <div className={styles.about}>
      <Container>
        <h1>About Us</h1>
        <p>Home / About us</p>
      </Container>
    </div>
  );
}

export default About;
