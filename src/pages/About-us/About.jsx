import React, {useEffect, useState} from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";
import Skeleton from "@mui/material/Skeleton";

function About() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://app.bigdawgz.com/wp-json/wp/v2/pages?slug=about")
      .then((res) => res.json())
      .then((data) => {
        setPageData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.mainContent}>
          {loading ? (
            <>
              {/* Skeleton loaders */}
              <Skeleton variant="text" width="60%" height={40} />
              <Skeleton variant="text" width="80%" height={30} />
              <Skeleton variant="rectangular" width="100%" height={100} sx={{ my: 2 }} />
              <Skeleton variant="text" width="50%" height={40} />
              <Skeleton variant="rectangular" width="100%" height={80} sx={{ my: 2 }} />
              <Skeleton variant="rectangular" width="100%" height={120} />
            </>
          ) : (
            pageData && (
              <>
                <div className={styles.title}>{pageData[0].acf?.title}</div>
                <div
                  className={styles.text}
                  dangerouslySetInnerHTML={{ __html: pageData[0].acf?.subtitle }}
                />
                <div className={styles.title}>
                  {pageData[0].acf?.shipping_title}
                </div>
                <div
                  className={styles.text}
                  dangerouslySetInnerHTML={{
                    __html: pageData[0].acf?.shipping_subtitle,
                  }}
                />
                <div className={styles.title}>
                  {pageData[0].acf?.contact_us_title}
                </div>
                <div className={styles.others}>
                  <div
                    className={styles.left}
                    dangerouslySetInnerHTML={{
                      __html: pageData[0].acf?.contact_us_subtitle,
                    }}
                  />
                </div>
              </>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

export default About;
