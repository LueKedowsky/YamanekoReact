import React from "react";
import "./CinemaPlayer.scss";
import { Playerjs } from "./playerjs.js";

const CinemaPlayer: React.FC<any> = (props) => {
  const newplayer = () => {
    const player2 = Playerjs({
      id: props.propsID,
      file: "http://94.142.139.111/preview.mp4",
      default_quality: "720p",
    });
  };
  React.useEffect(() => newplayer, []);
  return (
    <div className="cinemaPlayer-container">
      <div className="cinemaPlayer-video-archon" id="video-archon"></div>
      <div className="cinemaPlayer-devider">
        <div className="cinemaPlayer-devider--inner"></div>
      </div>
      <div className="cinemaPlayer-player-container">
        <div className="cinemaPlayer-player--outer">
          <div id={props.propsID}></div>
        </div>
      </div>
    </div>
  );
};

export default CinemaPlayer;
