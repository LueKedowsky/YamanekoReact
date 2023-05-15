import React from "react";
import CinemaTrailer from "./CinemaTrailer/CinemaTrailer";

const CinemaPage: React.FC<any> = ({
  itemId,
  titleLink,
  releasePoster,
  releaseTrailer,
  releaseTitleRu,
  releaseTitleOrig,
  releaseGenresList,
  releaseDesctiprion,
}) => {
  console.log(itemId, titleLink, releasePoster, releaseTrailer, releaseTitleRu, releaseTitleOrig, releaseGenresList, releaseDesctiprion);

  return (
    <div>
      <CinemaTrailer releaseTrailer={releaseTrailer} />
    </div>
  );
};

export default CinemaPage;
