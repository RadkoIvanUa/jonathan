import { useState } from "react";
import "./color.css";
import { AiFillSetting } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
export default function Color({ setSelectedColor }) {
  const [isShowed, setIsShowed] = useState(false);

  const handleColorSwitcher = () => {
    setIsShowed(!isShowed);
  };

  return (
    <div className="color" style={{ right: isShowed ? 0 : "-230px" }}>
      <span>Color Switcher</span>

      <div className="setting__icon-wrapper" onClick={handleColorSwitcher}>
        <AiFillSetting size={30} color="white" />
      </div>

      <div className="color__wrapper">
        <button
          title="Indigo"
          onClick={() => {
            setSelectedColor("rgb(102, 16, 242)");
            setIsShowed(false);
          }}
          style={{ backgroundColor: "rgb(102, 16, 242)" }}
          className="color__item"
        ></button>
        <button
          title="Blue"
          onClick={() => {
            setSelectedColor("rgb(0, 123, 255)");
            setIsShowed(false);
          }}
          style={{ backgroundColor: "rgb(0, 123, 255)" }}
          className="color__item"
        ></button>
        <button
          title="Purple"
          onClick={() => {
            setSelectedColor("rgb(111, 66, 193)");
            setIsShowed(false);
          }}
          style={{ backgroundColor: "rgb(111, 66, 193)" }}
          className="color__item"
        ></button>
        <button
          title="Teal"
          onClick={() => {
            setSelectedColor("rgb(1, 159, 159)");
            setIsShowed(false);
          }}
          style={{ backgroundColor: "rgb(1, 159, 159)" }}
          className="color__item"
        ></button>
        <button
          title="Red"
          onClick={() => {
            setSelectedColor("rgb(220, 53, 69)");
            setIsShowed(false);
          }}
          style={{ backgroundColor: "rgb(220, 53, 69)" }}
          className="color__item"
        ></button>
        <button
          title="Pink"
          onClick={() => {
            setSelectedColor("rgb(232, 62, 140)");
            setIsShowed(false);
          }}
          style={{ backgroundColor: "rgb(232, 62, 140)" }}
          className="color__item"
        ></button>
        <button
          title="Green"
          onClick={() => {
            setSelectedColor("rgb(40, 167, 69)");
            setIsShowed(false);
          }}
          style={{ backgroundColor: "rgb(40, 167, 69)" }}
          className="color__item"
        ></button>
        <button
          title="Yellow"
          onClick={() => {
            setSelectedColor("rgb(255, 193, 7)");
            setIsShowed(false);
          }}
          style={{ backgroundColor: "rgb(255, 193, 7)" }}
          className="color__item"
        ></button>
        <button
          title="Orange"
          onClick={() => {
            setSelectedColor("rgb(253, 126, 20)");
            setIsShowed(false);
          }}
          style={{ backgroundColor: "rgb(253, 126, 20)" }}
          className="color__item"
        ></button>
        <button
          title="Brown"
          onClick={() => {
            setSelectedColor("rgb(121, 85, 72)");
            setIsShowed(false);
          }}
          style={{ backgroundColor: "rgb(121, 85, 72)" }}
          className="color__item"
        ></button>
      </div>
    </div>
  );
}
