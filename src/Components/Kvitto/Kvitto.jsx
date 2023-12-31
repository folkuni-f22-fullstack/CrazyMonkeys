 import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TimerIcon from '@mui/icons-material/Timer';
import GroupIcon from '@mui/icons-material/Group';
import image from './image/image 19.png';
import { StepsHeader } from "../StepsHeader/StepsHeader.jsx";
// import 
import './StyleKvitto.css';
import { FunkyContext } from '../../ContextRoot.jsx';



const Kvitto = ({ orderNumber }) => {
    const {chosenDeliveryOption, recipeId, order } = useContext(FunkyContext)

  // const {chosenDeliveryOption} = useContext(FunkyContext)
  const resizeImageStyle = { width: '80%', height: '80%', objectFit: 'contain' };

  const getRandomBoolean = () => {
    const preparationTime = Math.floor(Math.random() * (30 - 14 + 1)) + 10;
    return preparationTime ;
  };

  const getRandomDeliveryTime = () => {
    return Math.floor(Math.random() * (25 - 15 + 1)) + 15;
  };

  const isFoodReady = getRandomBoolean();
  const deliveryTime = getRandomDeliveryTime();
  return (
    <main className='parent-container'>
      <div className='container'>
        <div className='title-page-n1'>
          <h2 className='kvitto-title'>Orderbekräftelse</h2>
          <span className='step-kvitto-header'><StepsHeader /> </span>
          <h2 className='desktop-kvitto-title'>Orderbekräftelse</h2>
        </div>

        {
          order.length > 0 ? (
            <>
               <div className='deliver-icons'>
            <div className='message'>Tack för att du handlar på Funky Fusion</div>
                {!chosenDeliveryOption ? 
              <div>
                <span className='kvitto-icons'>
                  <TimerIcon size={35}  />
                  <span>Order Time: {isFoodReady} min</span>
                </span>
              </div>
               :
              <div>
                <span >
                  <DeliveryDiningIcon size={35} />
                  <span>Leverans: {deliveryTime} min</span>
                </span>
              </div> 
            }
    
              <div>
                <span className='kvitto-icons'>
                  <GroupIcon size={35} className='person-icon'/>
                  <span>Order nr: {recipeId}</span>
                </span>
              </div>
            </div>
    
            <div className='delivery-pic'>
              <img style={resizeImageStyle} src={image} alt="delivery pic" />
            </div>
    
            <div>
              <p className='last-message'>Kvitto har skickats till din mejl!</p>
            </div>
    
            <Link to="/" className="btn-grad">Tillbaka till start</Link>
            </>
          ) : (
            <>
                <div className="receipt-center">
                  <p>Du måste ha slutfört en beställning för att få en orderbekräftelse!</p>
                </div>
                <Link to="/menu" className="btn-grad">Tillbaka till menyn</Link>
              </>
          )
        }

      </div>
    </main>
  );
};

export default Kvitto;

