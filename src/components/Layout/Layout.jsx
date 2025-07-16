import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./index.module.scss";

export default function Layout({children}) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
