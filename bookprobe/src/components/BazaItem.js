import React from "react";
import "./bazaitem.css";
import styles from "./FaBookItem.module.css";

const BazaItem = ({ key ,index ,book ,brisanje, bazaBrisanje}) => {
     
    let bookId=key; 
  const handleClick =()=> {
    brisanje(index);
    bazaBrisanje(book.id);   //key ne konta iz nekog razloga ali može book.id
    console.log("Ključ : " + book.id); 

  };

  return (
    <div key={key} index={index}  >
      
      <div className="glovo">
        <div className="it">{book.title} <br></br>
        {book.author}</div>
        <button className={styles.closeBttn} onClick={handleClick}>        
          &times;
        </button>
      </div>
      
     
      <div> 
       
        </div>
    </div>
       
      
    
  );
};

export default BazaItem;
