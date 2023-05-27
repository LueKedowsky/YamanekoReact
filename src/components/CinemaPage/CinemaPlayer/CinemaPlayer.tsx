import { FC, useEffect } from 'react';
import './CinemaPlayer.scss';
import { Playerjs } from './playerjs';

const CinemaPlayer: FC<any> = ({ playerID, toPlayerRef }) => {
  const newplayer = () => {
    const player2 = Playerjs({
      id: playerID,
      file: 'https://yamaneko.fun/files/preview.mp4',
      default_quality: '720p',
    });
    console.log(player2);
  };
  useEffect(() => {
    newplayer();
  }, []);
  return (
    <div className="cinemaPlayer-container">
      <div className="cinemaPlayer-video-archon" ref={toPlayerRef} />
      <div className="cinemaPlayer-divider">
        <div className="cinemaPlayer-divider--inner" />
      </div>
      <div className="cinemaPlayer-player-container">
        <div className="cinemaPlayer-player--outer">
          <div className="cinemaPlayer-player-video" id={playerID} />
        </div>
      </div>
    </div>
  );
};

export default CinemaPlayer;
