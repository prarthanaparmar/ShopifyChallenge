import React from "react";
import './Item.css'

const Product = (props) => {

    const deleteItemHandler = () => {
        const url = "http://localhost:8080/feed/deletepost/" + props.key_id;
        fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        alert("Item Deleted!");

        
        window.location.reload();
    }
     console.log(props.key_id);
    return(
        <div className="div_top">
            <ul className="ul_top">
                <li className="li_top">{props.name}</li>
                <li className="li_top">{props.price}</li>
                <li className="li_top">{props.description}</li>
                <button onClick={props.onEdit}>Edit Item</button>
                <button onClick={deleteItemHandler}>Delete Item</button>
            </ul>
        </div>
    )
}
export default Product;