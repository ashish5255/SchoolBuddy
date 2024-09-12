import React, { useRef, useEffect } from "react";
import "./VideoPlayer.css";
import video from "../../assets/schoolvideo.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (playState && videoRef.current) {
      videoRef.current.play(); // Start the video when the player is opened
    } else if (!playState && videoRef.current) {
      videoRef.current.pause(); // Pause the video when the player is closed
      videoRef.current.currentTime = 0; // Optionally reset to the start if needed
    }

    // Function to handle key press events
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        // Check if the pressed key is "Escape"
        setPlayState(false); // Close the player
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [playState]);

  const closePlayer = (e) => {
    // Close the player if the clicked element is not the video
    if (e.target !== videoRef.current) {
      setPlayState(false); // Close the player (this triggers the pause in useEffect)
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      onClick={closePlayer}
    >
      <video ref={videoRef} src={video} controls></video>
    </div>
  );
};

export default VideoPlayer;
