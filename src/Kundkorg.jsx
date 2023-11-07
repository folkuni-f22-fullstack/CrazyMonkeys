import { BiPlus, BiMinus } from "react-icons/bi";
import TheFood from "./Food.jsx";
import { useState } from "react";
import "./Stylekorg.css";

const Kundkorg = () => {
  const [amount, setAmount] = useState(0);
  const [amount1, setAmount1] = useState(0);

  const addDish = () => {
    setAmount(amount + 1);
  };

  const removeDish = () => {
    setAmount(amount - 1);
  };

  const addDish1 = () => {
    setAmount1(amount1 + 1);
  };

  const removeDish1 = () => {
    setAmount1(amount1 - 1);
  };

  return (
    <div>
      <main className="background-korg">
        <h1 className="varukorg-title">Varukorg</h1>
        <div className="title-pris-antal">
          <span className="foodprice-kundkorg">Pris</span> <span>Antal</span>
        </div>
        <div>
          <span className="foodname">Sushi burritos</span>
          <span className="dot">.........</span>
          <span className="foodprice">129:-</span>
          <BiMinus className="minus" onClick={removeDish} />
          <span className="amount-food"> {amount} </span>
          <BiPlus onClick={addDish} className="plus " />
        </div>
        <div>
          <span className="foodname">Indiska pizza</span>
          <span>.............</span> <span>79:-</span>
          <BiMinus className="minus" onClick={removeDish1} />
          <span className="amount-food">{amount1}</span>
          <BiPlus className="plus" onClick={addDish1} />
        </div>
      </main>
    </div>
  );
};

export default Kundkorg;
