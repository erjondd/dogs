import { useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
import styles from "./index.module.scss";

export default function Hero({ isHomepage, pathName }) {
  const childComponent = useMemo(() => {
    if (pathName.startsWith("/dog/")) {
      return (
        <>
          <h1>Details</h1>
          <p>Home / For sale </p>
        </>
      );
    }
    if (
      pathName !== "/parent/studs" &&
      pathName !== "/parent/females" &&
      pathName.startsWith("/parent/")
    ) {
      return (
        <>
          <h1>Details</h1>
          <p>Home / Parents </p>
        </>
      );
    }
    if (pathName.startsWith("/adoption/")) {
      return (
        <>
          <h1>Details</h1>
          <p>Home / Adoption </p>
        </>
      );
    }
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
              <Link to="/dogs">
                <Button variant="primary">View Available Pups</Button>
              </Link>
              <Link to="/parents">
                <Button variant="secondary" withArrow>
                  See Our Bloodline
                </Button>
              </Link>
            </div>
          </>
        );
      case "/dogs":
        return (
          <>
            <h1>Discover our dogs collection</h1>
            <p>Home / For sale</p>
          </>
        );
      case "/about":
        return (
          <>
            <h1>About Us</h1>
            <p>Home / About us</p>
          </>
        );
      case "/parents":
        return (
          <>
            <h1>Discover our parents</h1>
            <p>Home / Parents</p>
          </>
        );
      case "/privacy":
        return (
          <>
            <h1>Privacy & Policy</h1>
          </>
        );
      case "/adoption":
        return (
          <>
            <h1>Discover our adoptions</h1>
            <p>Home / Adoption</p>
          </>
        );
      case "/parent/studs":
        return (
          <>
            <h1>Discover our studs</h1>
            <p>Home / Parents / Studs</p>
          </>
        );
      case "/parent/females":
        return (
          <>
            <h1>Discover our females</h1>
            <p>Home / Parents / Females</p>
          </>
        );
      case "/contact-us":
        return (
          <>
            <h1>Contact for puppies</h1>
            <p>Home / Contact</p>
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
