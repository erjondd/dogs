import React, {useEffect, useState} from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";
import Skeleton from "@mui/material/Skeleton";

function Contact() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://app.bigdawgz.com/wp-json/wp/v2/pages?slug=contact")
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
              {/* Skeletons for title + sections */}
              <Skeleton variant="text" width="60%" height={40} />
              <Skeleton variant="text" width="80%" height={30} sx={{mb: 2}} />

              <Skeleton variant="text" width="50%" height={30} />
              <Skeleton variant="text" width="70%" height={25} sx={{mb: 2}} />

              <Skeleton variant="text" width="50%" height={30} />
              <Skeleton variant="text" width="70%" height={25} sx={{mb: 2}} />

              <Skeleton variant="text" width="50%" height={30} />
              <Skeleton variant="text" width="70%" height={25} sx={{mb: 2}} />

              <Skeleton variant="text" width="50%" height={30} />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={60}
                sx={{mb: 2}}
              />

              <Skeleton variant="text" width="50%" height={30} />
            </>
          ) : (
            pageData && (
              <>
                {/* Section Title */}
                <div className={styles.title}>{pageData[0].acf?.title}</div>
                <div className={styles.text}>
                  <p>{pageData[0].acf?.subtitle}</p>
                </div>

                {/* Phone */}
                <div className={styles.text}>
                  <h2>{pageData[0].acf?.phone_title}</h2>
                  <p>{pageData[0].acf?.phone_subtitle}</p>
                </div>

                {/* Email */}
                <div className={styles.text}>
                  <h2>{pageData[0].acf?.email_title}</h2>
                  <p>{pageData[0].acf?.email_subtitle}</p>
                </div>

                {/* Location */}
                <div className={styles.text}>
                  <h2>{pageData[0].acf?.location_title}</h2>
                  <p>{pageData[0].acf?.location_subtitle}</p>
                </div>

                {/* Social Media */}
                <div className={styles.text}>
                  <h2>{pageData[0].acf?.social_media_title}</h2>
                  <ul>
                    {pageData[0].acf?.instagram_name && (
                      <li>
                        🐾 Instagram:{" "}
                        <a
                          href={pageData[0].acf.instagram_url?.url}
                          target="_blank"
                          rel="noopener noreferrer">
                          {pageData[0].acf.instagram_name}
                        </a>
                      </li>
                    )}
                    {pageData[0].acf?.facebook_name && (
                      <li>
                        🐾 Facebook:{" "}
                        <a
                          href={pageData[0].acf.facebook_url?.url}
                          target="_blank"
                          rel="noopener noreferrer">
                          {pageData[0].acf.facebook_name}
                        </a>
                      </li>
                    )}
                    {pageData[0].acf?.tiktok_name && (
                      <li>
                        🐾 TikTok:{" "}
                        <a
                          href={pageData[0].acf.tiktok_url?.url}
                          target="_blank"
                          rel="noopener noreferrer">
                          {pageData[0].acf.tiktok_name}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                {/* FAQ */}
                <div className={styles.text}>
                  <h2>{pageData[0].acf.frequently_asked_questions_title}</h2>
                  <p>{pageData[0].acf.frequently_asked_questions_subtitle}</p>
                </div>
              </>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

export default Contact;
