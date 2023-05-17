import React from "react";
import "./CinemaPlayer.scss";
import ReactPlayer from "react-player";

const CinemaPlayer: React.FC = () => {
  return (
    <div className="cinemaPlayer-container">
      <div className="cinemaPlayer-video-archon" id="video-archon"></div>
      <div className="cinemaPlayer-devider">
        <div className="cinemaPlayer-devider--inner"></div>
      </div>

      <div className="cinemaPlayer-player-container">
        <div className="cinemaPlayer-player--outer">
          <ReactPlayer className="cinemaPlayer-player-player" url="http://94.142.139.111/preview.mp4" controls width="50%" height="50%" />
        </div>
      </div>
    </div>
  );
};

export default CinemaPlayer;
