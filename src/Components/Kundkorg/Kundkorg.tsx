import { BiPlus, BiMinus } from "react-icons/bi";
import { useEffect, useState, useContext } from "react";
import { FunkyContext } from "../../ContextRoot";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./Stylekorg.css";
import { useNavigate, Link } from "react-router-dom";
import { StepsHeader } from "../StepsHeader/StepsHeader";

const Kundkorg = () => {
  const navigate = useNavigate()

  const { orderToSend, setSelectStep } = useContext(FunkyContext);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/menu");
        if (!response.ok) {
          throw new Error("Något gick fel");
        }
        const data = await response.json();
        const orderIds = orderToSend.items.map((item) => item.menuItem);
        const sortedOrder = data.filter((item) => orderIds.includes(item._id));

                setChartData(sortedOrder);
                console.log(chartData);
                // console.log("OrderIds:" + orderIds);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [orderToSend.items]);


    const onSubmitButton = () => {
      navigate("/leverans")
      setSelectStep(2)
    }

  return (
    <div className="chart-wrapper">
      <div className="background-chart">
      <StepsHeader />

      <Link to="/menu">
        <span className="back-btn">
          <RiArrowGoBackFill size={30} />
        </span>
      </Link>

        <h1 className="chart-title">Varukorg</h1>
        {chartData.map((order) => (
          <>
            <div className="order-line">
              <div className="food-name-div">
                <h2 className="foodname">{order.name}</h2>
              </div>

              <div className="price-div">
                <h4 className="price-title">Pris</h4>{" "}
                <span className="foodprice">{order.price}</span>
              </div>

              <div className="amount-order">
                <span className="amount">Antal</span>
                <div className="minus-plus">
                  <BiMinus className="minus" />
                  <span className="amount-food">
                    {orderToSend.items.find(
                      (item) => item.menuItem === order._id
                    )?.quantity || 0}{" "}
                  </span>
                  <BiPlus className="plus" />
                </div>
              </div>
            </div>
          </>
        ))}
        <div className="line-div">
        <hr className="line" />
        </div>
        <p className="total-summa">Totalsumma:</p>
        <div className="chart-btn-grad">
        <button className="btn-grad" onClick={() => onSubmitButton()} >
            
                      Gå vidare
        </button>
        </div>
      </div>
    </div>
  );
};

export default Kundkorg;
