import itemsList from "../data/items.json";
import classes from "../styles/itemsList.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function ItemList(){

    const [items, setItems] = useState(itemsList);

    const clickToDelete = itemId => {
        const  filteredList = items.filter(eachItem =>{
            return eachItem.id !== itemId;
        }); setItems(filteredList);
    }

    
      return (
        <div className={classes.listContainer}>
            <ul>
            {items.map((item) => (
                    <div className={classes.cards} key={uuidv4()}> 
                    <p>{item.task}</p>
                    <p>checkbox</p>
                    <button onClick={()=> clickToDelete(item.id)} className={classes.deleteButton}>delete</button>
        </div>     
            ))}
            </ul>
        </div>
    )
}

export default ItemList ;