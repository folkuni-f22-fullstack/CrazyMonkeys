import { BiPlus, BiMinus } from "react-icons/bi";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./Stylekorg.css";

const Kundkorg = () => {
 

  return (
    <div>
      <main className="background-korg">
        <span className="back-btn">

          <RiArrowGoBackFill size={30} />
        </span>
        <h1 className="varukorg-title">Varukorg</h1>

        <div className="title-pris-antal">
          <span className="price-title">Pris</span> <span className="antal">Antal</span>
        </div>
        <div className="food-details">
          <span className="foodname">Sushi burritos</span>
          <span className="foodprice">129:-</span>
          <BiMinus className="minus"  />
          <span className="amount-food">  </span>
          <BiPlus  className="plus" />
        </div>

        <hr className="line" />
        <p className="total-summa">Totalsumma:</p>
      </main>
    </div>
  );
};

export default Kundkorg;
