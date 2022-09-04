import React from "react";
import axios from "axios";
import styles from "./App.module.css";


import Sidebar from "./Sidebar"; 
import Toolbar from "./Toolbar/Toolbar";


import Main from "./Main"; 
import Knjiznica from "./Knjiznica";

class App extends React.Component {
  state = { books: [], selectedBook: null, favorites:[] , isClicked:false,
                sideDrawerOpen: false, loading: false, dbbooks:[]
               
  };

   

    onTermSubmit = async term => {            //obični async zapis
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        { params: { q: term, key: "AIzaSyAZfPLyry2M4w1eOOLIBuWAiOU2ybNoNao" } }
      );
  
      console.log(term);
      this.setState({ books: response.data.items}); //nema kontext...brka jedno i drugo
      console.log(response.data.items);    //response je java script objekt očito - iz JSONA u java script
    };
  
    onBookSelect = book => {                                     //onBook SElect - tu smo stavili 
      console.log("From the App", book); 
      this.setState({selectedBook: book});        //odakel mi je doša ovaj book
    };

    componentDidMount(){
      const odgovor= this.getFetchUsers();

      console.log(odgovor);


   }

  

    //novo -GET bez axiosa - dohvaćanje podataka iz baze
    getFetchUsers() {     //definicija funkcije a di je poziv?
      this.setState({
          loading: true
      }, () => {
          fetch("http://localhost:3004/books").then(res => res.json()).then(result => this.setState({
              loading: false,
              dbbooks: result
          })).catch(console.log);
      });
  }
 /** ------------------------------------------------------------------------------------------------------------- */ 
     onHeartClick= book =>{ 
      this.state.favorites.push(book);  //idiote !!!!
      console.log("Iz App komponente ",book); 
      console.log(this.state.favorites.length);
     let naslov= book.volumeInfo.title; 
     let autori=  book.volumeInfo.authors;
       console.log("Imam super knjigu : "+ naslov  );  //provjera
       console.log("Od autora  : "+ autori  );  //provjera
        let niz= {'title': naslov,'authors':autori}; //član 1 , član 2
        

        let jsonoblik= JSON.stringify(niz); 

        console.log(jsonoblik); 

       const options = {
          method:'POST',
          headers:{'Content-Type': 'application/json'}, 
          body:JSON.stringify(niz)}
        
 fetch("http://localhost:3004/books",options)   
    
     //this.setState({postId:data.id});   //isto ko response.id  */
    
    };    
    
    deleteKnjiga = index => {
      this.setState(prevState => ({
        dbbooks: [
          ...prevState.dbbooks.slice(0, index),  
          ...prevState.dbbooks.slice(index + 1)  
        ]
        
      }));
    

    }; 


   deleteBookIzBaze(index){
      
        axios.delete(`http://localhost:3004/books/${index}`);     //sad ga prepoznaje
      };
      
  
   deleteItem = index => {
      this.setState(prevState => ({
        favorites: [
          ...prevState.favorites.slice(0, index),  //
          ...prevState.favorites.slice(index + 1)  //krene od indexa dalje -index ne dira
        ]
        
      }));
    };
  
    render(){
       
      return (
         
         <div className={styles.containerFlex}>
           
          <Main state={this.state} onFormSubmit={this.onTermSubmit} onBookSelect={this.onBookSelect} books={this.state.books} onHeartClick={this.onHeartClick} isClicked={this.state.isClicked}/>I have{" "} 
          {this.state.books.length} books.
  
          <Toolbar drawerClickHandler= {this.drawerToggleClickHandler} />
          
                
    
          <Sidebar favorites ={this.state.favorites} onBookSelect={this.onBookSelect} onDelete={this.deleteItem}/>
        
            I have {" "}{this.state.favorites.length} favorita. 
  
            <Knjiznica knjigeizbaze= {this.state.dbbooks} brisanje={this.deleteKnjiga} bazaBrisanje={this.deleteBookIzBaze}          >  </Knjiznica>
            
          </div>
        
                    /** deleteItem = index => {
      this.setState(prevState => ({
        favorites: [
          ...prevState.dbbooks.slice(0, index),  //
          ...prevState.dbbooks.slice(index + 1)  //krene od indexa dalje -index ne dira
        ]
        
      }));
    }; */
    
  
  
  
      );
    };

  };

  


 
 


export default App;
