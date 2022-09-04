

import React from 'react';



class SearchZanr extends React.Component{
  state={term:''};

onInputChange=(event)=>{

    this.setState({term:event.target.value}); 
}; 
onFormSubmit=event=>{

    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    //DO: osigurat da pozovemo funkciju iz parent konmponente

};


render(){

    return <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Search author</label>
              <input type="text" value={this.state.term} onChange={this.onInputChange} />
            </div>
        </form>
        </div>;
     

}


}


export default SearchZanr;