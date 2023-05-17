import React from "react";
import CinemaTrailer from "./CinemaTrailer/CinemaTrailer";
import CinemaPlayer from "./CinemaPlayer/CinemaPlayer";
import CinemaInfo from "./CinemaInfo/CinemaInfo";

const CinemaPage: React.FC<any> = ({
  itemId,
  titleLink,
  releasePoster,
  releaseTrailer,
  releaseTitleRu,
  releaseTitleOrig,
  releaseGenresList,
  screenshots,
  releaseDesctiprion,
}) => {
  console.log(itemId, titleLink, releasePoster, releaseTrailer, releaseTitleRu, releaseTitleOrig, releaseGenresList, releaseDesctiprion);

  return (
    <div>
      <CinemaTrailer releaseTrailer={releaseTrailer} releaseTitleRu={releaseTitleRu} />
      <CinemaPlayer />
      <CinemaInfo releaseDesctiprion={releaseDesctiprion} screenshots={screenshots} />
    </div>
  );
};

export default CinemaPage;
