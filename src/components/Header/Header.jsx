import {Link, Navigate} from "react-router-dom";
import styles from "./index.module.scss";
import Container from "../Container/Container";
import LogoImage from "../../../public/images/doggy.svg";
import Logo from "../../assets/Logo2";
import Navbar from "../Navbar/Navbar";
import {useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";
import SearchIcon from "../../assets/SearchIcon";
import Search from "../../pages/Search/Search";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/">
              <Logo className={styles.logoImage} />
            </Link>
          </div>
          <nav
            className={`${styles.links} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)} // close on click
          >
            <Navbar />
          </nav>

          <div className={styles.icons}>
            <SearchIcon
              onClick={() => setSearchOpen(true)}
              style={{cursor: "pointer"}}
            />
            <Search open={searchOpen} onClose={() => setSearchOpen(false)} />
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
