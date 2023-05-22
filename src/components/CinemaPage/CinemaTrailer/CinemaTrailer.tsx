import { FC } from "react";
import ReactPlayer from "react-player";
import "./CinemaTrailer.scss";

const CinemaTrailer: FC<any> = ({ releaseTrailer, releaseTitleRu, toPlayerRef }) => {
  return (
    <div className="cinemaTrailer-container">
      <div className="cinemaTrailer-trailer">
        <div className="cinemaTrailer-trailer_overlay">
          <div className="cinemaTrailer-trailer_overlay-title">{releaseTitleRu}</div>
          <div className="cinemaTrailer-trailer_overlay-watchButton">
            <button className="cinemaTrailer-trailer_overlay-watchButton_button" onClick={() => toPlayerRef.current.scrollIntoView({ behavior: "smooth" })}>
              СМОТРЕТЬ
            </button>
          </div>
        </div>
        <ReactPlayer className="cinemaTrailer-trailer_player" url={releaseTrailer} playing loop volume={0} muted controls={false} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default CinemaTrailer;
