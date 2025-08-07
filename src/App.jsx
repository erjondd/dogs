import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About-us/About";
import Contact from "./pages/Contact-us/Contact";
import Layout from "./components/Layout/Layout";
import Dogs from "./pages/Dogs/Dogs";
import SingleDog from "./pages/SingleDog/SingleDog";
import Adoption from "./pages/Adoptions/Adoption";
import Parents from "./pages/Parents/Parents";
import SingleParent from "./pages/Parents/SingleParent";
import SingleAdoption from "./pages/Adoptions/SingleAdoption";
import Privacy from "./pages/Privacy/Privacy";
import styles from "./index.module.scss";
import {useState, useEffect} from "react";
import Logo2 from "./assets/Logo2";
import Studs from "./pages/Parents/Studs";
import Females from "./pages/Parents/Females";
import Search from "./pages/Search/Search";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
    setTimeout(() => {
      body.style.overflow = "auto";
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <Router>
      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}>
            <Logo2 />
          </div>
        </div>
      )}
      <Layout style={{width: "100%"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/parent/:id" element={<SingleParent />} />
          <Route path="/search" element={<Search />} />
          <Route path="/parent/studs" element={<Studs />} />
          <Route path="/parent/females" element={<Females />} />
          <Route path="/adoption/:id" element={<SingleAdoption />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/dog/:id" element={<SingleDog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
