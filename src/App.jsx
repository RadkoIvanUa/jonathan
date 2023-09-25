import "./App.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./reset.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { useEffect, useState, useRef } from "react";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import Client from "./components/client/Client";

function App() {
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

  return (
    <div>
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
      </main>
      <footer></footer>
      <div className={upScroll ? "up__scroll show" : "up__scroll hidden"}>
        <a href="#home">
          <TbSquareRoundedArrowUpFilled size={50} className="up__scroll-icon" />
        </a>
      </div>
    </div>
  );
}

export default App;
