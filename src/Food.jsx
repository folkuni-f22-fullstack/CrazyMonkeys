import { useState } from "react"

const TheFood = () => {
  const [foodInCart, setFoodInCart] = useState([]);
    
    const food = [
        {id:1 , name: "ramen" , pris : 110},
        {id:2 , name: "pizza" , pris : 110},
        {id:3 , name: "sushi" , pris : 110}
    ]

    const addFoodToCart = (newFood) => {
        //props.updateFood([...food, newFood]);
        setFoodInCart([...foodInCart, newFood]);
    }
    /* function Mat (name , pris) {
        const selectedFood = food.filter(item => item.name === name && item.pris === pris)
        return selectedFood
    }*/
    
    return(
        <div>
            <ul>
                {food.map(item => ( <li key={item.id}> {item.name} {item.pris} <button type="submit" onClick={() => {addFoodToCart(item)}}>click</button></li>))}
            </ul>
        </div>

    )
}

export default TheFood