
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Nav from './components/Nav';
import CreateItem from './components/CreateItem';
import { useState } from 'react';
import ItemSet from './components/ItemSet';
import EditItem from './components/EditItem';

function App() {

  const [createitem, setCreateItem] = useState(false);
  const [viewItem, setViewItem] = useState(false);
  const [editItem, setEditItem] = useState(false);

  const [itemToEdit, storeItemToEdit] = useState("");

  const storeItem = (item) => {
    console.log(item);
    storeItemToEdit(item);
  }

  const setCreateItemHandler = () => {
    setCreateItem(true);
    setViewItem(false);
    setEditItem(false);
  }

  const setViewHandler = () =>{
    setViewItem(true);
    setCreateItem(false);
    setEditItem(false);
  }

  const editItemHandler = () => {
    setEditItem(true);
    setViewItem(false);
    setCreateItem(false); 
  }
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav setcreate = {setCreateItemHandler} setView ={setViewHandler} />
        <p>My First App!!</p>
        
    </header>
    
    {createitem && <CreateItem />}
    {viewItem && <ItemSet edit = {editItemHandler} oldValue={storeItem}/>}
    {editItem && <EditItem value = {itemToEdit} /> }
    </div>
    </Router>
  );
}

export default App;
