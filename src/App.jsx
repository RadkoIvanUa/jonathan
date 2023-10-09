import "../node_modules/modern-normalize/modern-normalize.css";
import "./reset.css";

import { motion } from "framer-motion";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { useEffect, useState, useRef } from "react";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import Client from "./components/client/Client";
import Contact from "./components/contacts/Contact";

import Footer from "./components/footer/Footer";
import LoadingPage from "./components/loading_page/LoadingPage";
import { ToastContainer } from "react-toastify";
import Loader from "react-loaders";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [upScroll, setUpScroll] = useState(false);

  const windowSize = useRef([window.innerWidth]);

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };
  const handleUpScroll = () => {
    setUpScroll(window.scrollY > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleUpScroll);
  }, []);

  useEffect(() => {
    if (windowSize.current[0] < 768) {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    setIsLoading(false);
    // }, 5000);
  }, []);

  return (
    <>
      <div id="home"></div>
      <header>
        <Header className={scroll ? "header stickyadd" : "header"} />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Client />
        <Contact />
        <Footer />
        <LoadingPage isVisible={isLoading} />

        <ToastContainer style={{ zIndex: 1000000 }} />
      </main>
      <footer></footer>
      <div className={upScroll ? "up__scroll show" : "up__scroll hidden"}>
        <a href="#home">
          <TbSquareRoundedArrowUpFilled size={50} className="up__scroll-icon" />
        </a>
      </div>
    </>
  );
}

export default App;
