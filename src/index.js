import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//Create a new component. Component always produce some HTML

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY="AIzaSyA6GJbqBoqMlDGJQ-eKp5FyjYqtKX2L9O4";

class App extends Component {
    
    constructor(props){
        super(props);
            this.state={
                videos:[],
                selectedVideo:null
            };
            this.videoSearch('Modi');
    }

    videoSearch(term){
        console.log("searchTerm "+term);
        YTSearch({key:API_KEY,term}, videos =>{             //function(){
                    console.log(videos);
                    this.setState({videos,selectedVideos:videos[0]});                 
        });
        
        console.log('videoSearch  ',term);
    }

    render(){
        console.log('inside app render');
        return(
            <div>
            <h1><SearchBar onSerachTermChange={term => this.videoSearch(term)}/></h1>       
            <VideoList videos={this.state.videos}/>            
			<VideoDetails video={this.state.selectedVideo} />
            </div>
            )
    }
}

//Place the component on the index.html page

ReactDOM.render( <App />, document.querySelector('.container'));
// <VideoList/>
                //<VideoDetails/>