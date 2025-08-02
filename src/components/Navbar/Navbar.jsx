import {Link} from "react-router-dom";
import Container from "../Container/Container";
import styles from "./index.module.scss";

export default function Navbar() {
  return (
    <Container>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dogs">For sale</Link>
          </li>
          <li className={styles.hasSubmenu}>
            <Link to="/parents">Parents</Link>
            <ul className={styles.submenu}>
              <li>
                <Link to="/parent/studs">Studs</Link>
              </li>
              <li>
                <Link to="/parent/females">Females</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/adoption">For adoption</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
