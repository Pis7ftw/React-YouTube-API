import React from "react";
import VideoItem from "./VideoItem";

// Props destructure ({videos}) to use videos.x
// (props) to use props.videos.x
// onVideoSelected passing the callback from APP to get the video selected
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    // video={video} passes a prop to the VideoItem where the video object
    // can be accessed within VideoItem.

    // Pass the callback function onVideoSelected down to the VideoItem
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return (
    <div role="list" className="ui relaxed divided list">
      {renderedList}
    </div>
  );
};

export default VideoList;
