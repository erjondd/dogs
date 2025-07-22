import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./index.module.scss";
import Hero from "../Homepage/Hero/Hero";
import {useLocation} from "react-router-dom";

export default function Layout({children}) {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  return (
    <>
      <div className={isHomepage ? styles.home : styles.page}>
        <Header />
        <Hero isHomepage={isHomepage} pathName={location.pathname} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
