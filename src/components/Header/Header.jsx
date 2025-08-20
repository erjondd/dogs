import {Link} from "react-router-dom";
import styles from "./index.module.scss";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import {useEffect, useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";
import SearchIcon from "../../assets/SearchIcon";
import Search from "../../pages/Search/Search";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    fetch("https://app.bigdawgz.com/wp-json/acf/v3/options/options")
      .then((res) => res.json())
      .then((data) => setLogoUrl(data?.acf?.logo));
  }, []);

  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.nav}>
          {/* Dynamic Logo */}
          <div className={styles.logo}>
            <Link to="/">
              <img
                src={logoUrl}
                alt="BigDawgz Logo"
                className={styles.logoImage}
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav
            className={`${styles.links} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)}>
            <Navbar />
          </nav>

          {/* Search + Menu Icons */}
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
