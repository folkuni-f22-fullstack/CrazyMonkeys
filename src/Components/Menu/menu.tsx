import React, { useState } from "react";
import Matratter from "../Menu/Matratter.tsx";
import Drycker from "../Menu/Dryck.tsx";
import Tillbehor from "../Menu/Tillbehor.tsx";
import "../assets/menu.css";

interface ButtonProps {
  category: string;
  onClick: (category: string) => void;
  active: boolean;
}

const Button: React.FC<ButtonProps> = ({ category, onClick, active }) => {
  const handleClick = () => {
    onClick(category);
  };

  return (
    <button className={`btn ${active ? "active" : ""}`} onClick={handleClick}>
      {category}
    </button>
  );
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState("matratter");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1>Meny</h1>
        <div>
          <Button
            category="matratter"
            onClick={handleCategoryChange}
            active={activeCategory === "matratter"}
          />
          <Button
            category="drycker"
            onClick={handleCategoryChange}
            active={activeCategory === "drycker"}
          />
          <Button
            category="tillbehor"
            onClick={handleCategoryChange}
            active={activeCategory === "tillbehor"}
          />
        </div>
        <div className="funky-hr-title">
          <hr className="funky-hr"></hr>
          <p>Funky Fusion</p>
          <hr className="funky-hr"></hr>
        </div>

        {activeCategory === "matratter" && <Matratter />}
        {activeCategory === "drycker" && <Drycker />}
        {activeCategory === "tillbehor" && <Tillbehor />}
        <button className="proceed-button">Gå till varukorgen</button>
      </div>
    </div>
  );
}

export default Menu;
