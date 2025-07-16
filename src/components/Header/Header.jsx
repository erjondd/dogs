import {Link} from "react-router-dom";
import styles from "./index.module.scss";
import Container from "../Container/Container";
import LogoImage from "../../../public/images/logo.png";
import Navbar from "../Navbar/Navbar";
import {useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";
import SearchIcon from "../../assets/SearchIcon";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.nav}>
          <nav
            className={`${styles.links} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)} // close on click
          >
            <Navbar />
          </nav>
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
          <div className={styles.icons}>
            <SearchIcon />
          </div>
          <div
            className={styles.menuToggle}
            onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </header>
    </Container>
  );
}
