import { FC, useEffect } from "react";
import "./CinemaPlayer.scss";
import { Playerjs } from "./playerjs.js";

const CinemaPlayer: FC<any> = ({ playerID, toPlayerRef }) => {
  const newplayer = () => {
    const player2 = Playerjs({
      id: playerID,
      file: "http://94.142.139.111/preview.mp4",
      default_quality: "720p",
    });
  };
  useEffect(() => newplayer, []);
  return (
    <div className="cinemaPlayer-container">
      <div className="cinemaPlayer-video-archon" ref={toPlayerRef}></div>
      <div className="cinemaPlayer-devider">
        <div className="cinemaPlayer-devider--inner"></div>
      </div>
      <div className="cinemaPlayer-player-container">
        <div className="cinemaPlayer-player--outer">
          <div className="cinemaPlayer-player-video" id={playerID}></div>
        </div>
      </div>
    </div>
  );
};

export default CinemaPlayer;
