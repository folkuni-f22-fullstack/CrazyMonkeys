import { useEffect, useState } from 'react';
import '../assets/Tillbehor.css'
const Tillbehor = () => {
  const [tillbehorData, setTillbehorData] = useState([]);


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

  const handleAddToCart = (tillbehorId: number) => {
    // Implementera här: Lägg till logik för att lägga till tillbehör i varukorgen
    console.log(`Lägg till tillbehör ${tillbehorId} i varukorgen.`);
  };

  return (
    <>
    <h2>Tillbehör</h2>
    <div className="tillbehor-container">
      
      {tillbehorData.map((tillbehor) => (
        <div className="tillbehor-item" key={tillbehor._Id}>

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
              onClick={() => handleAddToCart(tillbehor.id)}
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
