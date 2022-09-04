
import React from 'react'; 
import SearchBar from './SearchBar'; 
import BookList from './BookList'; 
import styles from './Main.module.css';


class Main extends React.Component {
     
      state=this.props.state;    //staviš u state tuđe propsove -- cijeli poslani state - valjda smo poslli cijeli state?

       
   onClick=()=>{
      this.setState({isClicked:true});

       console.log(this.state); 
                                  //console mora bit u funkciji //  

  };

    render (){
         return (
           <main className={styles.containerFlexColumn}>
    
           <SearchBar onFormSubmit={this.props.onFormSubmit}   />
          <BookList books={this.props.books} onBookSelect={this.props.onBookSelect} onHeartClick={this.props.onHeartClick}    />

       </main>
    );
  }
  
}



export default Main; 