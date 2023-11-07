import Kundkorg from './Kundkorg.jsx';
import './App.css';
import TheFood from './Food.jsx';
import { useState } from "react";

function App() {

  //const [foodInCart, setFoodInCart] = useState([]);

  //  useEffect(() => {
  //   console.log(foodInCart);
  // }, [foodInCart]); food={foodInCart} updateFood={() => setFoodInCart()}

 return (
  <>
   <Kundkorg/>
  <TheFood   />
  </>
 )
}

export default App
