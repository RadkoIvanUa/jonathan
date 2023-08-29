import "./App.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./reset.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { useEffect, useState } from "react";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
      console.log("Scroll");
    });
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
