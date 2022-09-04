import React from 'react';
import BazaItem from './BazaItem';

const Knjiznica= ({knjigeizbaze, brisanje,bazaBrisanje}) =>{


  



    const renderedList = knjigeizbaze.map((book, index) => { console.log("Key od knjige je " + book.id); return <BazaItem key={book.id} index={index}  book={book} brisanje={brisanje} bazaBrisanje={bazaBrisanje}/>} );
   return <div> {renderedList  }</div>       //tu ih tek ispisujemo

         //taj veliki objekt pretvaram u niz 
         

}

export default Knjiznica; 