import React from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";

function Contact() {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.mainContent}>
          {/* Section Title */}
          <div className={styles.title}>Get in Touch</div>
          <div className={styles.text}>
            <p>
              We’re here to help with any questions about our puppies, adoption
              process, or delivery options.
            </p>
          </div>

          {/* Shipping Info */}
          <div className={styles.text}>
            <h2>📞 Phone Support</h2>
            <p>
              Call or text us at <strong>+1 (904) 111-0123</strong>
            </p>
            <p>Available Monday to Saturday, 9 AM – 6 PM</p>
          </div>

          {/* Email */}
          <div className={styles.text}>
            <h2>📧 Email</h2>
            <p>
              Send us an email anytime at <strong>info@yourkennel.com</strong>
            </p>
            <p>We typically reply within 24 hours on business days.</p>
          </div>

          {/* Location */}
          <div className={styles.text}>
            <h2>📍 Location</h2>
            <p>
              We operate between <strong>Largo, FL</strong> and{" "}
              <strong>Lakeland, FL</strong>
            </p>
            <p>
              Visits are by appointment only. Please contact us to schedule a
              time.
            </p>
          </div>

          {/* Social Media */}
          <div className={styles.text}>
            <h2>💬 Social Media</h2>
            <p>Follow and message us on:</p>
            <ul>
              <li>
                🐾 Instagram:{" "}
                <a
                  href="https://instagram.com/yourkennel"
                  target="_blank"
                  rel="noreferrer">
                  @yourkennel
                </a>
              </li>
              <li>
                🐾 Facebook:{" "}
                <a
                  href="https://facebook.com/yourkennel"
                  target="_blank"
                  rel="noreferrer">
                  /yourkennel
                </a>
              </li>
              <li>
                🐾 TikTok:{" "}
                <a
                  href="https://tiktok.com/@yourkennel"
                  target="_blank"
                  rel="noreferrer">
                  @yourkennel
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className={styles.text}>
            <h2>❓ Frequently Asked Questions</h2>
            <p>
              Looking for quick answers? Check out our FAQ page to learn more
              about adoption, delivery, health guarantees, and more.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
