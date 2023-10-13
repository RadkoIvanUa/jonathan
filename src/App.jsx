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

import { ToastContainer } from "react-toastify";
import { Link } from "react-scroll";

import Cursor from "./components/cursor/Cursor";
import Settings from "./components/settings/Settings";

function App() {
  const [scroll, setScroll] = useState(false);
  const [upScroll, setUpScroll] = useState(false);
  const [selectedColor, setSelectedColor] = useState("rgb(1, 159, 159)");
  const [colorForCursor, setColorForCursor] = useState("1, 159, 159");

  const [cursor, setCursor] = useState(true);

  const windowSize = useRef([window.innerWidth]);

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
    setColorForCursor(
      selectedColor.replace(/^rgb\((\d+,\s*\d+,\s*\d+)\)$/, "$1")
    );
  }, [selectedColor]);

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };
  const handleUpScroll = () => {
    setUpScroll(window.scrollY > 400);
  };

  const cursorSwither = () => {
    setCursor(!cursor);
  };

  return (
    <>
      {cursor && <Cursor colorForCursor={colorForCursor} />}

      <div id="home"></div>
      <header>
        <Header
          className={scroll ? "header stickyadd" : "header"}
          selectedColor={selectedColor}
        />
      </header>
      <main>
        <Hero selectedColor={selectedColor} />
        <About selectedColor={selectedColor} />
        <Services selectedColor={selectedColor} />

        <Portfolio selectedColor={selectedColor} />
        <Client selectedColor={selectedColor} />
        <Contact selectedColor={selectedColor} />
      </main>
      <footer>
        <Footer selectedColor={selectedColor} />
      </footer>
      <div className={upScroll ? "up__scroll show" : "up__scroll hidden"}>
        <Link className="header__nav-logo" to={"hero"} spy={true}>
          <TbSquareRoundedArrowUpFilled
            color={selectedColor}
            size={40}
            className="up__scroll-icon"
          />
        </Link>
      </div>
      <ToastContainer style={{ zIndex: 1000000 }} />
      {/* COlOR SELECTOR */}
      <Settings
        setSelectedColor={setSelectedColor}
        cursorSwither={cursorSwither}
      />
    </>
  );
}

export default App;
