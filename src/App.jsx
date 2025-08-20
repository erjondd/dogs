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
import Logo2 from "./assets/LogoFWhite";
import Studs from "./pages/Parents/Studs";
import Females from "./pages/Parents/Females";
import Search from "./pages/Search/Search";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LogoF from "./assets/LogoF";
import {FloatingWhatsApp} from "react-floating-whatsapp";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
    setTimeout(() => {
      body.style.overflow = "auto";
      setIsLoading(false);
    }, 5000);

    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(isMobile);
  return (
    <Router>
      <ScrollToTop />
      <FloatingWhatsApp
        phoneNumber="0038348405406" // Your WhatsApp number with country code
        accountName="Big Dawgz Kennels"
        avatar="https://app.bigdawgz.com/wp-content/uploads/2025/08/svgviewer-output-1-300x300.png"
        chatMessage="Hi👋 How can we help you?"
        placeholder="Type your message..."
        darkMode={true}
      />
      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}>
            {isMobile ? <LogoF style={{height: "200px"}} /> : <Logo2 />}
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
