

import {BiPlus , BiMinus} from 'react-icons/bi'
//import TheFood from './Food.jsx';
import { useState } from 'react';
import './Stylekorg.css';



const Kundkorg = () =>{
    //const [ selectedDishes , setSelectedDishes ] = useState([])
  //const [foodInCart, setFoodInCart] = useState([]);
  const [ amount, setAmount ] = useState(0)

  const addDish = () => {
    setAmount(amount + 1)
  }

    return(
        <div>
            <main className='background-korg'>
                <h2 className='varukorg-title'>Varukorg</h2>
                <div className='title-pris-antal' > <span className='pris-kundkorg'>Pris</span> <span>Antal</span> </div>
                <div> <span></span> <span>129</span> <BiMinus/> {amount} <button type='submit' onclick={addDish}>click</button><BiPlus />  </div>
                
            </main>
        </div>
    )
}

export default Kundkorg