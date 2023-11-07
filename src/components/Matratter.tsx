
import '../assets/Matratter.css'; 

const Matratter = () => {
  const matratterData = [
    {
        id: 1,
        name: 'Thai tacos ',
        description: 'Ta klassiska thailändska smaker som pad thai, gröna curry och satay och servera dem som fyllning i tacoskal.',
        price: '129:-',
        imageUrl: 'ThaiTaco.jpg',
      },
  ];

  const handleOrderClick = (name) => {
    
    alert(`Du lagt till: ${name} i korgen`);
  };

  return (
    <div className="matratt-container">
      {matratterData.map((matratt) => (
        <div className="matratt" key={matratt.id}>
          <div className="matratt-image">
            <img src={matratt.imageUrl} alt={matratt.name} />
          </div>
          <div className="matratt-details">
            <h3>{matratt.name}</h3>
            <p>{matratt.description}</p>
            <p>Pris: {matratt.price} kr</p>
            <button
              className="order-button"
              onClick={() => handleOrderClick(matratt.name)}
            >
              Lägg till
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Matratter;
