import React from "react";

const VideoDetail = ({ video }) => {
  // Currently, if no video is selected, video is null and line
  // return <div>{video.snippet.title}</div> will throw an error because
  // we are trying to reference a null object.
  // Set a conditional.
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
