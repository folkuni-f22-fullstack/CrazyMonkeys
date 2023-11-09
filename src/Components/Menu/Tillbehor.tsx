import { useEffect, useState, useContext } from 'react';
import '../assets/Tillbehor.css'
import { FunkyContext } from "../../ContextRoot";
const Tillbehor = () => {
  const [tillbehorData, setTillbehorData] = useState([]);
  const {orderToSend, order, setOrder} = useContext(FunkyContext)
  const [itemCounter, setItemCounter] = useState(1)

  const addOrder = () => {
      const newOrder = {
        itemId: orderId,
        quantity: itemCounter
      };
  
      setOrder(prevOrder => [...prevOrder, newOrder]);
    };
  



  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("/api/menu"); // Använd /api/menu för att utnyttja proxyen
            if (!response.ok) {
                throw new Error("Något gick fel");
            }
            const data = await response.json();
            const sortedData = data.filter((item) => item.itemType === "tillbehör");
            setTillbehorData(sortedData);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, []);







const handleAddToCart = (foodId: string) => {
    const existingOrder = order.find((orderItem) => orderItem.itemId === foodId);

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
        quantity: 1
      };
      setOrder((prevOrder) => [...prevOrder, newOrder]);
      console.log(orderToSend);
      
    }
    setItemCounter(itemCounter + 1);

    console.log(orderToSend);
    
    
    
  };

  return (
    <>
    <h2>Tillbehör</h2>
    <div className="tillbehor-container">
      
      {tillbehorData.map((tillbehor) => (
        <div className="tillbehor-item" key={tillbehor._id}>

          <div className="tillbehor-details">
            <div className='name-price-tillbehor'>
            <h4>{tillbehor.name}</h4>
            <h3>{tillbehor.price} kr</h3>

            </div>
            <div className='tillbehor-img'><img src={tillbehor.img} alt="" /></div>

            <div className='tillbehor-desc'>
            <p >{tillbehor.desc}</p>

            </div>
          </div>
          


          <div className="addto-btn">
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(tillbehor._id)}
            >
              Lägg till
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Tillbehor;
