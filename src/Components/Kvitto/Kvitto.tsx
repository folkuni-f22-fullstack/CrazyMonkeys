import './StyleKvitto.css'
import { TbTruckDelivery } from 'react-icons/tb'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import image from './image/images.png'
const Kvitto = () => {


    return (

        <main className='parent-container'>
            <div className='container'>
                <div className='title-line'>


                    <h2 className='kvitto-title'>Orderbekräftelse</h2>
                    <div className='message'> Tack för att du handlar på Funky Fusion</div>
                </div>

                <div className='deliver-icons'>
                    <div>
                        <span className='time'> <AiOutlineFieldTime size={35} /> <span>15</span> <span>min</span> </span>
                    </div>
                    <div>
                        <span className='truck'><TbTruckDelivery size={35} /> <span>Leverans: </span><span>15</span></span>
                    </div>
                    <div>
                        <span className='person'><MdOutlinePeopleAlt size={35} /><span>Order nr: </span> <span>699</span></span>
                    </div>
                    <div className='delivery-pic'>
                        <img src={image} alt="delivery pic" />
                    </div>
                    <div>
                        <p className='last-message'>
                            Kvitto har skickats till din mejl!
                        </p>
                    </div>

                </div>
                <button type='button'> kick my Ass</button>
            </div>

        </main>
    )
}


export default Kvitto