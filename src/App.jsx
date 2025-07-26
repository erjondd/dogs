import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About-us/About";
import Contact from "./pages/Contact-us/Contact";
import Layout from "./components/Layout/Layout";
import Dogs from "./pages/Dogs/Dogs";
import SingleDog from "./pages/SingleDog/SingleDog";
import Adoption from "./pages/Adoptions/Adoption";
import Parents from "./pages/Parents/Parents";


function App() {
  return (
    <Router>
      <Layout style={{width: "100%"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/contact-us" element={<Contact />} />

          <Route path="/dog/:id" element={<SingleDog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
