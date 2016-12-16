import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url
    console.log("imageUrl "+imageUrl);
	return(
		<li>
			<img className="media-object" src={imageUrl} />
		</li>
	);
};

export default VideoListItem;