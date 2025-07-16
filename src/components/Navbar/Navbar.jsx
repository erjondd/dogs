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
            <Link to="/dogs">Our Dogs</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
