import styles from "./index.module.scss";
import Container from "../../Container/Container";

function OurStory() {
  return (
    <section className={styles.ourPosts}>
      <Container className={styles.containerBackground}>
        <h2>Our Story</h2>
        <p>
          [Name] is a family-owned kennel founded in 1995, built on a deep
          passion for strengthening the bond between people and dogs.<br/>
          From the beginning, we introduced a unique “open space” experience, allowing
          families to freely interact with our dogs — creating an environment
          where genuine connections are formed. Combined with our deep knowledge
          of various bloodlines and breed characteristics, this approach helps
          us guide each family in finding the perfect dog to match their
          lifestyle and needs.<br/><br/> One of the key reasons we’ve remained trusted for
          over 25 years is our unwavering focus on the health and well-being of
          every dog we raise.<br/> Three generations of our family are actively
          involved in the daily care and operations of our kennel, ensuring a
          direct and personal connection between our team, our dogs, and the
          values we started with. We strictly follow the highest standards for
          early socialization, vaccinations, veterinary care, health guarantees,
          and premium nutrition — all designed to support the full development
          of each pup from the moment they arrive until the day they find their
          forever home.<br/><br/> Our commitment to these high standards of care is the
          reason so many of our past customers return — and recommend us — when
          it's time to welcome another four-legged companion into their family.<br/><br/>
          Thank you for taking the time to consider bringing your next family
          member home through us. We hope your new companion brings you years of
          loyalty, love, and happiness.
        </p>
      </Container>
    </section>
  );
}

export default OurStory;
