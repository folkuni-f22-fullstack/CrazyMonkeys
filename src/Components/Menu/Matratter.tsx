import { useEffect, useState } from "react";
import "../assets/Matratter.css";
const Matratter = () => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/menu"); // Använd /api/menu för att utnyttja proxyen
                if (!response.ok) {
                    throw new Error("Något gick fel");
                }
                const data = await response.json();
                setFood(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleOrderClick = (name: string) => {
        alert(`Du lagt till: ${name} i korgen`);
    };

    return (
        <div className="matratt-container">
            {food.map((matratt) => (
                <div className="matratt" key={matratt.id}>
                    <div className="matratt-image">
                        <img src={matratt.img} alt={matratt.name} />
                    </div>

                    <div className="matratt-details">
                        <h3>{matratt.name}</h3>
                        <p className="matratt-p">{matratt.desc}</p>
                        <div className="bottom-details">
                            <p>Pris: {matratt.price} kr</p>

                            <button
                                className="order-button"
                                onClick={() => handleOrderClick(matratt.name)}
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
