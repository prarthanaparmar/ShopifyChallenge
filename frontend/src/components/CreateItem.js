import React, { useState } from "react";

const CreateItem = (props) => {

    const [enteredName, setEnteredName] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const itemData = {
            name : enteredName,
            price : enteredPrice,
            description : enteredDescription
        };

        //axios.post("http://localhost:8080/feed/post",itemData);
        const url = "http://localhost:8080/feed/post";
        fetch(url, {
          method: "POST",
          body:JSON.stringify(itemData),
          headers: {
            "Content-Type": "application/json",
          },
        })

        
        alert("Item created and added to inventory!!");        
        window.location = "http://localhost:3000";

    }

    return (
        <div>
          <div>  
           <div>
            <h2>Add An Item</h2>
            <form onSubmit={submitHandler}>
              <div>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  name="item_name"
                  value={enteredName}
                  onChange={nameChangeHandler}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Product Price"
                  name="price"
                  value={enteredPrice}
                  onChange={priceChangeHandler}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Product Description"
                  name="description"
                  value={enteredDescription}
                  onChange={descriptionChangeHandler}
                />
              </div>
              
              <button>Add Product</button>
            </form>
          </div>
        </div>
      </div>  
      );
    }

     
    export default CreateItem;

