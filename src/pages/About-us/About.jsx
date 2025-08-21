import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";
function About() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    fetch("https://app.bigdawgz.com/wp-json/wp/v2/pages?slug=about")
      .then((res) => res.json())
      .then((data) => setPageData(data));
  }, []);

  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.mainContent}>
          {pageData && (
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
                {/* <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div> */}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

export default About;
