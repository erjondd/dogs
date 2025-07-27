import React from "react";
import styles from "../About-us/index.module.scss";
import Container from "../../components/Container/Container";

function Privacy() {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.mainContent}>
          <div className={styles.title}>Shipping info</div>
          <div className={styles.text}>
            We offer safe and reliable shipping options to get your puppy home
            no matter where you are located.
          </div>
          <div className={styles.title}>Shipping Process</div>
          <div className={styles.text}>
            After reserving your puppy, we’re handling all necessary
            documentation and preparations for the travel and delivery
            arrangements. Most puppies are ready to leave at around 8–10 weeks
            of age. Delivery time ranges 5–10 business days, depending on
            distance and shipping method.
          </div>
          <div className={styles.title}>Safe and Comfortable Transport</div>
          <div className={styles.text}>
            We work with reputable, pet-friendly airlines and certified couriers
            to ship. Your puppy will be transported in a clean, well-ventilated,
            and designed environment to keep your puppy calm and safe.
          </div>
          <div className={styles.title}>Shipping Fees</div>
          <div className={styles.text}>
            Shipping fees are based on your region’s specific regulations.
            Contact us directly for an accurate quote
          </div>
          <div className={styles.title}>International Shipping</div>
          <div className={styles.text}>
            International shipping is available to most countries. Certificates
            of good health, vaccination records, and necessary documentation are
            included to ensure a seamless and stress-free experience.
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Privacy;
