import styles from "./index.module.scss";
import Container from "../../Container/Container";
import Button from "../../Button/Button";
import CardList from "../CardList/CardList";
import { getAllDogs } from "../../../data/dogsWP";
import { Link } from "react-router-dom";
function DogPosts() {
  return (
    <section className={styles.dogPosts}>
      <Container className={styles.containerBackground}>
        <div className={styles.allTexts}>
          <div className={styles.texts}>
            <p className={styles.subTitle}>Whats new ?</p>
            <h2 className={styles.title}>Take a look at some of our pets</h2>
          </div>
          <div className={styles.buttons}>
            <Link to="/dogs">
              <Button variant="primary">View All</Button>
            </Link>
          </div>
        </div>
        <CardList limit={4} fetchData={getAllDogs} />
      </Container>
    </section>
  );
}

export default DogPosts;
