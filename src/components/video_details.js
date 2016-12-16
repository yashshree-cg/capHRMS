import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const VideoDetail=({video})=>{
    console.log("VideoDetail");
    if(!video){
        return <div>Loading...</div>
    }
    
    const videoDescription = video.snippet.description;
    const videoId = video.id.videoId;
    
    const url = `https://www.youtube.com/embed/${videoId}`;
    console.log('videoDescription  ',videoDescription);
    console.log('url  ',url,'\nvideoId ',videoId);
       
	return(
		<div>
			<div>
				<iframe src={url} ></iframe>
			</div>
			<div><h1>{video.snippet.title}</h1></div>
			<div>{videoDescription}</div>
		
		</div>
	);

};

export default VideoDetail;