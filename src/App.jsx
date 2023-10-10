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
import Contact from "./components/contacts/Contact";

import Footer from "./components/footer/Footer";
import LoadingPage from "./components/loading_page/LoadingPage";
import { ToastContainer } from "react-toastify";
import { Link } from "react-scroll";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [upScroll, setUpScroll] = useState(false);
  const [selectedColor, setSelectedColor] = useState("blue");

  const windowSize = useRef([window.innerWidth]);
  const timestamp = Date.now(); // Генерує унікальний timestamp

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };
  const handleUpScroll = () => {
    setUpScroll(window.scrollY > 400);
  };

  useEffect(() => {
    const importCSS = async () => {
      // Виберіть колір на основі вибраного значення та додайте додатковий параметр для оновлення
      let cssPath;

      switch (selectedColor) {
        case "red":
          cssPath = `./color/red.css?version=1&timestamp=${timestamp}`;
          break;
        case "blue":
          cssPath = `./color/blue.css?version=1&timestamp=${timestamp}`;
          break;
        case "green":
          cssPath = `./color/green.css?version=1&timestamp=${timestamp}`;
          break;
        // Додайте інші варіанти кольорів за потреби
        default:
          cssPath = `./color/blue.css?version=1&timestamp=${timestamp}`;
      }
      await import(cssPath);
      console.log(cssPath);

      // Після завершення імпорту, стилі будуть автоматично застосовані
    };

    importCSS();
  }, [selectedColor]);

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
      </main>
      <footer>
        <Footer />
      </footer>
      <div className={upScroll ? "up__scroll show" : "up__scroll hidden"}>
        <Link className="header__nav-logo" to={"hero"} spy={true}>
          <TbSquareRoundedArrowUpFilled size={40} className="up__scroll-icon" />
        </Link>
      </div>
      <LoadingPage isVisible={isLoading} />
      <ToastContainer style={{ zIndex: 1000000 }} />

      <button
        onClick={() => {
          setSelectedColor("red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setSelectedColor("blue");
        }}
      >
        Blue
      </button>
      <button
        onClick={() => {
          setSelectedColor("green");
        }}
      >
        Green
      </button>
    </>
  );
}

export default App;
