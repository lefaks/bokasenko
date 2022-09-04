

import React from 'react';
import styles from "./FaBookItem.module.css"

const FaBookItem = ({favorite , key , onDelete, index }) => {
 
  const handleClick =()=> {
    onDelete(index);
  };
  
  return (
    <div key={key} className={styles.item}>
      <div>
        <div className={styles.title} >{favorite.volumeInfo.title}</div>           
        
          <div className={styles.content}>{favorite.volumeInfo.authors} </div>      
      </div>

      <button className={styles.closeBttn} onClick={handleClick}>         
          &times;
        </button>
    </div>
 );
};

export default FaBookItem;
