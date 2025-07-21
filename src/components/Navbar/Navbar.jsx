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
          <li>
            <Link to="/dogs">Parents</Link>
          </li>
          <li>
            <Link to="/adoption">Adoption</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
