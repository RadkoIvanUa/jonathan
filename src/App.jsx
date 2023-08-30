import "./App.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./reset.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { useEffect, useState, useRef } from "react";
import About from "./components/about/About";

function App() {
  const [scroll, setScroll] = useState(false);
  const windowSize = useRef([window.innerWidth]);

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
