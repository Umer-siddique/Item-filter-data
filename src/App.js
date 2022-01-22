import React, { useState } from "react";
import Item from "./Components/Item";
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import Button from "./Components/Button";

const categValue= [...new Set(Menu.map((currCat)=>{return currCat.category})),"all"]


function App() {

const [myItems,setItems]=useState(Menu);
const [catVal,setCatVal]=useState(categValue);

const filterData=(itemCateg)=>{
     if(itemCateg==="all"){
       setItems(Menu);
       return;
     }
    const updatedItems=Menu.filter((currElem)=>{
      return currElem.category===itemCateg;
    })
    setItems(updatedItems);
}

  return (
    <>
      <Header />
      <Button filterData={filterData} catVal={catVal} />

      <div className="container">
        <div className="row card-container">
        {myItems.map((currItem)=>{
           return <Item key={currItem.id} {...currItem} />
        })}
        
      </div>
    </div >
    </>

  );
}

export default App;
