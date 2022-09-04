import React from 'react';



class SearchBar extends React.Component{
  state={term:''};

onInputChange=(event)=>{

    this.setState({term:event.target.value}); 
}; 
onFormSubmit=event=>{          //nova funkcija koju definiramo samo u ovoj komponenti 

    event.preventDefault();
    this.props.onFormSubmit(this.state.term);     //tu pozivamo funkciju     //pozvana je funkcija-- JELI SEArch PARENT KOMPONENTA ? 
    //DO: osigurat da pozovemo funkciju iz parent konmponente ?? napišemo, prosljedimo, ne pozovemo

};


render(){
              //u returnu se hendlaju naopako propsovi 
    return <div  className="search-bar">
     <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>      
            <div className="field">
              <label>Search author</label>
              <input type="text" value={this.state.term} onChange={this.onInputChange} />
            </div>
        </form>
        </div>
        </div>;
     

}


}


export default SearchBar;