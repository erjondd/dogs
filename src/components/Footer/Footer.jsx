import React from "react";
import styles from "./index.module.scss";
import LogoImage from "../../../public/images/logo.png";
import Facebook from "../../assets/Facebook";
import Instagram from "../../assets/Instagram";
import Twitter from "../../assets/Twitter";
import {Link} from "react-router-dom";
import Container from "../Container/Container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Container className={styles.containerBackground}>
          <div className={styles.firstColumn}>
            <div className={styles.logo}>
              <Link to="/">
                <img
                  src={LogoImage}
                  alt="example"
                  loading="lazy"
                  width="160"
                  height="60"
                  className={styles.logoImage}
                />
              </Link>
            </div>
            <div className={styles.description}>
              Raised to rule,
              <br /> bred for greatness.
            </div>
            <div className={styles.socials}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer">
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer">
                <Instagram />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer">
                <Twitter />
              </a>
            </div>
          </div>
          <div className={styles.secondColumn}>
            <div className={styles.columnTitle}>Dogs</div>
            <ul className={styles.links}>
              <li>
                <Link to="/dogs">Our Dogs</Link>
              </li>
              <li>
                <Link to="/available">Available Pups</Link>
              </li>
              <li>
                <Link to="/bloodline">Studs & Females</Link>
              </li>
              <li>
                <Link to="/bloodline">Upcoming Litters</Link>
              </li>
              <li>
                <Link to="/bloodline">Adoption Info </Link>
              </li>
              <li>
                <Link to="/bloodline">Health & Care</Link>
              </li>
            </ul>
          </div>
          <div className={styles.thirdColumn}>
            <div className={styles.columnTitle}>Dogs</div>
            <ul className={styles.links}>
              <li>
                <Link to="/dogs">Bloodline</Link>
              </li>
              <li>
                <Link to="/available">Our story</Link>
              </li>
              <li>
                <Link to="/bloodline">Bloodline Legacy</Link>
              </li>
              <li>
                <Link to="/bloodline">Show Records</Link>
              </li>
              <li>
                <Link to="/bloodline">Genetic Guarantee</Link>
              </li>
            </ul>
          </div>
          <div className={styles.fourthColumn}>
            <div className={styles.columnTitle}>Dogs</div>
            <ul className={styles.links}>
              <li>
                <Link to="/dogs">Kennel</Link>
              </li>
              <li>
                <Link to="/available">About us</Link>
              </li>
              <li>
                <Link to="/bloodline">FAQ</Link>
              </li>
              <li>
                <Link to="/bloodline">Privacy & Policy</Link>
              </li>
              <li>
                <Link to="/bloodline">Help</Link>
              </li>
            </ul>
          </div>
          <div className={styles.fifthColumn}>
            <div className={styles.columnTitle}>Dogs</div>
            <ul className={styles.links}>
              <li>
                <Link to="/dogs">Contact</Link>
              </li>
              <li>
                <Link to="/available">info@yourkennel.com </Link>
              </li>
              <li>
                <Link to="/bloodline">(904) 111-01223</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.logoFoot}>
          <Link to="/">
            <img
              src={LogoImage}
              alt="example"
              loading="lazy"
              width="160"
              height="60"
              className={styles.logoImage}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
