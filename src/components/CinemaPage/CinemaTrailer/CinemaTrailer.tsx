import React from "react";
import ReactPlayer from "react-player/youtube";
import "./CinemaTrailer.scss";

const CinemaTrailer: React.FC<any> = ({ releaseTrailer }) => {
  return (
    <div className="cinematrailer-container">
      <div className="cinematrailer-trailer">
        <ReactPlayer url={releaseTrailer} autoPlay={true} controls={false} width="100%" height="100vh" />
      </div>
      <div className="cinematrailer-playbutton"></div>
    </div>
  );
};

export default CinemaTrailer;
