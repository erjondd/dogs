import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./index.module.scss";

export default function Navbar() {
  return (
    <Container>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dogs"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              For sale
            </NavLink>
          </li>
          {/* <li className={styles.hasSubmenu}>
            <NavLink
              to="/parents"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Parents
            </NavLink> 
          <ul className={styles.submenu}>
              <li>
                <NavLink
                  to="/parent/studs"
                  className={({isActive}) => (isActive ? styles.active : "")}>
                  Studs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/parent/females"
                  className={({isActive}) => (isActive ? styles.active : "")}>
                  Females
                </NavLink>
              </li>
            </ul> 
           </li> */}
          <li>
            <NavLink
              to="/parent/studs"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Studs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/parent/females"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Females
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adoption"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              For adoption
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
