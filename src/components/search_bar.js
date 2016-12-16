/*import React from 'react';
const SearchBar =() => {
    return(
        <div>
        Search your favourite video
       <input value="" onChange={(event) => {console.log(event.target.value)}}/>
        </div>
        
    );
    
};
export default SearchBar;*/


import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term:'Modi'};
    }
    
    render(){
        console.log('inside render search ',this.state.term);
        return(
            <div className="search-bar">
            Search your favourite video
           <input value={this.state.term} onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>

        );
    }

    onInputChange(term ){
        this.setState({term});
        console.log(term);
        this.props.onSearchBarChange(term);
    }


};


export default SearchBar;