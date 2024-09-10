import React from "react";
import "./VideoPlayer.css";
import video from "../../assets/schoolvideo.mp4";
const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video src={video} autoplay controls></video>
    </div>
  );
};

export default VideoPlayer;
