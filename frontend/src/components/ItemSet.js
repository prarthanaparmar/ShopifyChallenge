import React, { useEffect } from "react";
import Product from "./Item";
import { useState } from "react";

const ItemSet = (props) => {
      
    const [products, setProducts] = useState([]) ;

    // console.log(products);  

    const editItemHandler = (item) => {
        props.oldValue(item);  
        props.edit(); 
    }

    const fetchItem = () => {
        console.log("fetch products");
        fetch("http://localhost:8080/feed/posts").then((result) => {
            if (result.status !== 200) {
                throw new Error("Could not fetch Items from inventory");
              }
              return result.json();
        }).then((itemsData) => {
            console.log("Fetch Successful", itemsData);
            setProducts(itemsData.data);
          })
          .catch((err) => {
            throw err;
          });
    }    

    useEffect(()=> {
        fetchItem();
    }, []);
    return(
        <div>
        {products.map((item) => (
            <Product
            key_id = {item._id}
            name = {item.name}
            price = {item.price}
            description = {item.description}
            onEdit={editItemHandler.bind(this, item)}
            />
        ))}
        </div>
)}

export default ItemSet;