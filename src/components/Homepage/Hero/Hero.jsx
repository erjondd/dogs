import {useMemo} from "react";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
import styles from "./index.module.scss";

export default function Hero({isHomepage, pathName}) {
  const childComponent = useMemo(() => {
    switch (pathName) {
      case "/":
        return (
          <>
            <h1>Raised to rule, bred for greatness.</h1>
            <p>
              Every pup we raise is a reflection of pride, strength, and
              unmatched lineage.
            </p>
            <div className={styles.buttons}>
              <Button variant="primary">View Available Pups</Button>
              <Button variant="secondary" withArrow>
                See Our Bloodline
              </Button>
            </div>
          </>
        );
      case "/dogs":
        return (
          <>
            <h1>Our Dogs</h1>
            <p>
              Explore our exceptional dogs, each a testament to quality and
              care.
            </p>
          </>
        );
      default:
        return null;
    }
  }, [pathName]);

  return (
    <section className={isHomepage ? styles.hero : styles.pageHero}>
      <div className={isHomepage ? styles.overlay : styles.pageOverlay}></div>
      <Container>
        <div className={styles.content}>{childComponent}</div>
      </Container>
    </section>
  );
}
