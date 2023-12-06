import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


import Matratter from "./Matratter.jsx";
import Drycker from "./Dryck.jsx";
import Tillbehor from "./Tillbehor.jsx";
import "../assets/menu.css";

import { FunkyContext } from "../../ContextRoot.jsx";
import { StepsHeader } from "../StepsHeader/StepsHeader.jsx";



const Button = ({ category, onClick, active }) => {
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
    const [activeCategory, setActiveCategory] = useState("Maträtter");
    const {setSelectStep} = useContext(FunkyContext)

    const navigate = useNavigate()
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const goToCart = () => {
        navigate("/varukorg")
        setSelectStep(1)
    }

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
                    <button className="btn-grad" onClick={() => goToCart()}>
                        Varukorg
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Menu;
