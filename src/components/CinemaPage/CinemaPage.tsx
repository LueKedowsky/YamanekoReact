import { FC, RefObject, useRef } from "react";
import CinemaTrailer from "./CinemaTrailer/CinemaTrailer";
import CinemaPlayer from "./CinemaPlayer/CinemaPlayer";
import CinemaInfo from "./CinemaInfo/CinemaInfo";
import CinemaRoles from "./CinemaRoles/CinemaRoles";

const CinemaPage: FC<any> = ({
  itemId,
  titleLink,
  releasePoster,
  releaseTrailer,
  releaseTitleRu,
  releaseTitleOrig,
  releaseGenresList,
  screenshots,
  roles,
  releaseDesctiption,
}) => {
  console.log(itemId, titleLink, releasePoster, releaseTrailer, releaseTitleRu, releaseTitleOrig, releaseGenresList, roles, releaseDesctiption);
  const toPlayerRef: RefObject<null> = useRef(null);

  return (
    <div>
      <CinemaTrailer releaseTrailer={releaseTrailer} releaseTitleRu={releaseTitleRu} />
      <CinemaPlayer playerID="player1" toPlayerRef={toPlayerRef} />
      <CinemaInfo releaseDesctiption={releaseDesctiption} screenshots={screenshots} />
      <CinemaRoles roles={roles} />
    </div>
  );
};

export default CinemaPage;
