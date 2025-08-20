import {useEffect, useState} from "react";
import styles from "./index.module.scss";
import Container from "../../Container/Container";

function OurStory() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    fetch("https://app.bigdawgz.com/wp-json/wp/v2/pages?slug=homepage")
      .then((res) => res.json())
      .then((data) => setPageData(data));
  }, []);

  if (!pageData) return <p>Loading...</p>;

  return (
    <section className={styles.ourPosts}>
      <Container className={styles.containerBackground}>
        <h2>{pageData[0].acf.title}</h2>
        <p dangerouslySetInnerHTML={{__html: pageData[0].acf.subtitle}} />
      </Container>
    </section>
  );
}

export default OurStory;
