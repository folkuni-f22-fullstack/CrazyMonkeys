import React, { useState } from "react";
import Matratter from "../Menu/Matratter.tsx";
import Drycker from "../Menu/Dryck.tsx";
import Tillbehor from "../Menu/Tillbehor.tsx";
import "../assets/menu.css";
import { Link } from "react-router-dom";

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
    const [activeCategory, setActiveCategory] = useState("maträtter");

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1 className="meny-title">Meny</h1>
                <div className="meny-tabs">
                    <Button
                        category="Maträtter"
                        onClick={handleCategoryChange}
                        active={activeCategory === "Maträtter"}
                    />
                    <Button
                        category="Drycker"
                        onClick={handleCategoryChange}
                        active={activeCategory === "Drycker"}
                    />
                    <Button
                        category="Tillbehör"
                        onClick={handleCategoryChange}
                        active={activeCategory === "Tillbehör"}
                    />
                </div>
                <div className="funky-hr-title">
                    <hr className="funky-hr"></hr>
                    <p>FUNKY FUSION</p>
                    <hr className="funky-hr"></hr>
                </div>

                {activeCategory === "Maträtter" && <Matratter />}
                {activeCategory === "Drycker" && <Drycker />}
                {activeCategory === "Tillbehör" && <Tillbehor />}
                <div className="order-btn-grad-div">
                    <Link className="btn-grad menybtn" to="/kundkorg">
                        Varukorg
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;
