import { FC, RefObject, useRef } from "react";
import CinemaTrailer from "./CinemaTrailer/CinemaTrailer";
import CinemaPlayer from "./CinemaPlayer/CinemaPlayer";
import CinemaInfo from "./CinemaInfo/CinemaInfo";
import CinemaRoles from "./CinemaRoles/CinemaRoles";

const CinemaPage: React.FC<any> = ({
  itemId,
  titleLink,
  releasePoster,
  releaseTrailer,
  releaseTitleRu,
  releaseTitleOrig,
  releaseGenresList,
  screenshots,
  roles,
  releaseDesctiprion,
}) => {
  console.log(
    itemId,
    titleLink,
    releasePoster,
    releaseTrailer,
    releaseTitleRu,
    releaseTitleOrig,
    releaseGenresList,
    roles,
    releaseDesctiprion
  );

  return (
    <div>
      <CinemaTrailer
        releaseTrailer={releaseTrailer}
        releaseTitleRu={releaseTitleRu}
      />
      <CinemaPlayer propsID="player1" />
      <CinemaInfo
        releaseDesctiprion={releaseDesctiprion}
        screenshots={screenshots}
      />
      <CinemaRoles roles={roles} />
    </div>
  );
};

export default CinemaPage;
