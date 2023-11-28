import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


import Matratter from "../Menu/Matratter.tsx";
import Drycker from "../Menu/Dryck.tsx";
import Tillbehor from "../Menu/Tillbehor.tsx";
import "../assets/menu.css";

import { FunkyContext } from "../../ContextRoot.tsx";
import { StepsHeader } from "../StepsHeader/StepsHeader";

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
    const navigate = useNavigate()

    const {
        selectStep,
        setSelectStep,
    } = useContext(FunkyContext);

    const [activeCategory, setActiveCategory] = useState("matratter");

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
    };

    const goToCart = () => {
        navigate("/varukorg")
        setSelectStep(1)
    }

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
