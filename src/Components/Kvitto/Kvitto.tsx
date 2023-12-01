 import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import image from './image/image 19.png';
import { StepsHeader } from "../StepsHeader/StepsHeader.jsx";
// import 
import './StyleKvitto.css';
import { FunkyContext } from '../../ContextRoot';
// import { FunkyContext } from '../../ContextRoot';

interface KvittoProps {
  orderNumber: number;
}

const Kvitto: React.FC<KvittoProps> = ({ orderNumber }) => {
    const {chosenDeliveryOption } = useContext(FunkyContext)

  // const {chosenDeliveryOption} = useContext(FunkyContext)
  const resizeImageStyle = { width: '80%', height: '80%', objectFit: 'contain' };

  const getRandomBoolean = (): number => {
    const preparationTime = Math.floor(Math.random() * (30 - 14 + 1)) + 10;
    return preparationTime ;
  };

  const getRandomDeliveryTime = (): number => {
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
          <div className='message'>Tack för att du handlar på Funky Fusion</div>
        </div>

        <div className='deliver-icons'>
            {!chosenDeliveryOption ? 
          <div>
            <span className='kvitto-icons'>
              <AiOutlineFieldTime size={35}  />
              <span>Order Time: {isFoodReady} min</span>
            </span>
          </div>
           :
          <div>
            <span >
              <TbTruckDelivery size={35} />
              <span>Leverans: {deliveryTime} min</span>
            </span>
          </div> 
        }

          <div>
            <span className='kvitto-icons'>
              <MdOutlinePeopleAlt size={35} className='person-icon'/>
              <span>Order nr: 699{orderNumber}</span>
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
      </div>
    </main>
  );
};

export default Kvitto;
// /div>

//         <Link to="/" className="btn-grad">Tillbaka till start</Link>
//       </div>
//     </main>
//   );
// };

// export default Kvitto;

