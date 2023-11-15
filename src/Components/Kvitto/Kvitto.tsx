import './StyleKvitto.css'
import Footer from '../Footer/Footer'
import { TbTruckDelivery } from 'react-icons/tb'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import image from './image/image1/images.png'
import { StepsHeader } from '../StepsHeader/StepsHeader'
import Header from '../Header/Header'


const Kvitto = () => {

    const resizeImage = { width: '80%', height: '80%', objectfit: 'contain' }

    return (
        <>

        <Header/>
        <div className='parent-container'>
             <div className='container'>
            <div className='title-line'>


                <h2 className='kvitto-title'>Orderbekräftelse</h2>
                <StepsHeader />
                <div className='message'> Tack för att du handlar på Funky Fusion</div>
            </div>
           
                <div className='deliver-icons'>
                    <div>
                        <span className='time'> <AiOutlineFieldTime size={35} className="timer" /> <span>15</span> <span>min</span> </span>
                    </div>
                    <div>
                        <span className='truck'><TbTruckDelivery size={35} /> <span>Leverans: </span><span>15</span></span>
                    </div>
                    <div>
                        <span className='person'><MdOutlinePeopleAlt size={35} /><span>Order nr: </span> <span>699</span></span>
                    </div>



                </div>
                <div className='delivery-pic'>
                    <img style={resizeImage} src={image} alt="delivery pic" />
                </div>
                <div>
                    <p className='last-message'>
                        Kvitto har skickats till din mejl!
                    </p>
                </div>
                <button type='button' className='btn-grad1'> Startsidan</button>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}


export default Kvitto