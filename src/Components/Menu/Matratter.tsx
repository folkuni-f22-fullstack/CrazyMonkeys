import { useEffect, useState, useContext } from "react";
import "../assets/Matratter.css";
import { FunkyContext } from "../../ContextRoot";
const Matratter = () => {
  const [food, setFood] = useState([]);
  const { orderToSend, order, setOrder } = useContext(FunkyContext);
  const [itemCounter, setItemCounter] = useState(1);

  const addOrder = () => {
    const newOrder = {
      itemId: orderId,
      quantity: itemCounter,
    };

    setOrder((prevOrder) => [...prevOrder, newOrder]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/menu"); // Använd /api/menu för att utnyttja proxyen
        if (!response.ok) {
          throw new Error("Något gick fel");
        }
        const data = await response.json();
        const sortedData = data.filter((item) => item.itemType === "food");
        setFood(sortedData);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (foodId: string) => {
    const existingOrder = order.find(
      (orderItem) => orderItem.itemId === foodId
    );

    if (existingOrder) {
      // Om drycken finns, öka antalet
      setOrder((prevOrder) =>
        prevOrder.map((orderItem) =>
          orderItem.itemId === foodId
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      // Om drycken inte finns, lägg till en ny order
      const newOrder = {
        itemId: foodId,
        quantity: 1,
      };
      setOrder((prevOrder) => [...prevOrder, newOrder]);
    }
    setItemCounter(itemCounter + 1);

    console.log(orderToSend);
  };

  // const handleOrderClick = (name: string) => {
  //     alert(`Du lagt till: ${name} i korgen`);
  // };

  return (
    <div className="matratt-container">
      {food.map((matratt) => (
        <div className="matratt" key={matratt._id}>
          <div className="matratt-image">
            <img src={matratt.img} alt={matratt.name} />
          </div>

          <div className="matratt-details">
            <h4>{matratt.name}</h4>
            <p className="matratt-p">{matratt.desc}</p>
            <div className="bottom-details">
              <p>Pris: {matratt.price} kr</p>

              <button
                className="order-button"
                onClick={() => handleAddToCart(matratt._id)}
              >
                Lägg till
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Matratter;
