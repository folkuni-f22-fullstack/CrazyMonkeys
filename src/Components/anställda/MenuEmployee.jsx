import React, { useEffect, useContext, useState } from "react";
import { FunkyContext } from "../../ContextRoot";


const MenuEmployee = () => {
    const [menu, setMenu] = useState([])
    const {selectedItemId, setSelectedItemId} = useContext(FunkyContext)


    const selectItem = (id) => {
        setSelectedItemId(id)
        // console.log("menuEmployee selected item Id", id);
    }

  

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/api/menu"); // Använd /api/menu för att utnyttja proxyen
            if (!response.ok) {
              throw new Error("Något gick fel");
            }
            const data = await response.json();
            setMenu(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);


    //   console.log("menuEmployee render", menu);

    return (
        <div>
            <label htmlFor="menu">Välj från meny:</label>
            <select onChange={(e) => selectItem(e.target.value)}  name="menu" id="menu">
                {menu.map((item) => (
                    <option key={item._id}  value={item._id}> {item.name}</option>
                ))}
             
            </select>
        </div>
    );
}

export default MenuEmployee
