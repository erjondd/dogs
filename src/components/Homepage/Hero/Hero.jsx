import Button from "../../Button/Button";
import Container from "../../Container/Container";
import styles from "./index.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.content}>
          <h1>Raised to rule, bred for greatness.</h1>
          <p>
            Every pup we raise is a reflection of pride, strength, and unmatched
            lineage.
          </p>
          <div className={styles.buttons}>
            <Button variant="primary">View Available Pups</Button>
            <Button variant="secondary" withArrow>
              See Our Bloodline
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
