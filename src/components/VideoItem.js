import React from "react";
import "./VideoItem.css";

// Not destructuring (vs the destructuring in VideoList)
// If destructuring, then ({video, onVideoSelected})
// onVideoSelected is contained within props.
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // Add event handler to the videoitem
    // so that when clicked it will call the onVideoSelected callback
    // function in App.js
    // Use an arrow function in order to pass the video back to the callback
    <div onClick={() => onVideoSelect(video)} className="video-item item ">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="{video.snippet.title}"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
