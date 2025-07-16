import React, {useState} from "react";
import styles from "./index.module.scss";
import Container from "../../components/Container/Container";
function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the formData to an API, email service, etc.
    console.log("Form submitted:", formData);

    // Optional: clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.about}>
      <Container>
        <h1>About Us</h1>
        <p>Home / About us</p>
        <div className={styles.mainContent}>
          <div className={styles.title}>Our Story</div>
          <div className={styles.text}>
            For over 25 years, we’ve raised dogs with passion, care, and
            purpose. Our kennel is built on a deep love for dogs and a
            commitment to raising healthy, well-socialized companions.
            <br />
            <br />
            Each pup is raised in a clean, loving environment, with proper
            nutrition, veterinary care, and early socialization. We work only
            with recognized bloodlines, and every dog we sell comes with full
            certifications and health guarantees.
            <br />
            <br />
            What sets us apart is our dedication to quality, transparency, and
            the lifelong happiness of each puppy that finds a new home through
            us.
          </div>
          <div className={styles.title}>Shipping & Delivery</div>
          <div className={styles.text}>
            We offer safe and reliable shipping for all our puppies, both
            locally and internationally.
            <br />
            <br />
            Once your puppy is reserved, we handle all documentation and
            preparation. Delivery usually takes 5–10 business days depending on
            your location.
            <br />
            <br />
            We use pet-friendly airlines and certified couriers to ensure a safe
            and comfortable journey for your new family member.
            <br />
            <br />
            Shipping fees vary depending on distance and regulations. For
            detailed information, please contact us directly.
          </div>
          <div className={styles.title}>Contact Us</div>
          <div className={styles.others}>
            <div className={styles.left}>
              Have questions or ready to bring a new puppy home?
              <br />
              <br />
              📧 Email: info@yourkennel.com <br />
              📞 Phone: +1 (904) 111-0123 <br />
              📍 Location: Largo, FL – Lakeland, FL <br />
              🕒 Working Hours: Monday – Saturday, 9AM to 6PM
              <br />
              <br />
              <br />
              You can also reach out via our social media or use the contact
              form below.
            </div>
            <div className={styles.contactForm}>
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
