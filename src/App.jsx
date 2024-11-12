import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies"
import Value from "./components/value/value";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Sproduct from "./components/ProductPage/Sproduct";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <>
      <Header />
      <Hero />
      <Residencies />
      <Sproduct />
      <Value />
      <Contact />
      <Footer />
    </>
    </BrowserRouter>
  );
}

export default App;
