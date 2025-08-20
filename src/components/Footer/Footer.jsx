import React from "react";
import styles from "./index.module.scss";
import Logo2 from "../../assets/LogoF";
import Logo1 from "../../assets/LogoF";

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
                <Logo1 />
              </Link>
            </div>
            <div className={styles.description}>
              Raised to rule,
              <br /> bred for greatness.
            </div>
            <div className={styles.socials}>
              <a
                href="https://www.facebook.com/profile.php?id=61574964713064&locale=en_GB"
                target="_blank"
                rel="noopener noreferrer">
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/bigdawgz.kennel/"
                target="_blank"
                rel="noopener noreferrer">
                <Instagram />
              </a>
              <a
                href="https://www.tiktok.com/@bigdawgzkennels"
                target="_blank"
                rel="noopener noreferrer">
                <Twitter />
              </a>
            </div>
          </div>
          <div className={styles.secondColumn}>
            <div className={styles.columnTitle}>Our Dogs</div>
            <ul className={styles.links}>
              <li>
                <Link to="/dogs">Our Dogs</Link>
              </li>
              <li>
                <Link to="/dogs">Available Pups</Link>
              </li>
              <li>
                <Link to="/parents">Studs & Females</Link>
              </li>
            </ul>
          </div>

          <div className={styles.thirdColumn}>
            <div className={styles.columnTitle}>About Our Bloodline</div>
            <ul className={styles.links}>
              <li>
                <Link to="/about">Bloodline</Link>
              </li>
              <li>
                <Link to="/about">Our Story</Link>
              </li>
              <li>
                <Link to="/dogs">Bloodline Legacy</Link>
              </li>
            </ul>
          </div>

          <div className={styles.fourthColumn}>
            <div className={styles.columnTitle}>Company Info</div>
            <ul className={styles.links}>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy & Policy</Link>
              </li>
            </ul>
          </div>

          <div className={styles.fifthColumn}>
            <div className={styles.columnTitle}>Contact Us</div>
            <ul className={styles.links}>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
              <li>
                <a href="mailto:contact@bigdawgz.com">contact@bigdawgz.com</a>
              </li>
              <li>
                <a href="tel:+38348405406">+383 48 405 406</a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.logoFoot}>
          <Link to="/">
            <Logo2 />
          </Link>
        </div>
      </div>
    </footer>
  );
}
