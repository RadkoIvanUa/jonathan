import "./App.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./reset.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { useEffect, useState, useRef } from "react";

function App() {
  const [scroll, setScroll] = useState(false);
  const windowSize = useRef([window.innerWidth]);

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
    console.log("scroll");
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
    <>
      <header>
        <Header className={scroll ? "header stickyadd" : "header"} />
      </header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
