import { FC, RefObject, useRef } from "react";
import CinemaTrailer from "./CinemaTrailer/CinemaTrailer";
import CinemaPlayer from "./CinemaPlayer/CinemaPlayer";
import CinemaInfo from "./CinemaInfo/CinemaInfo";
import CinemaRoles from "./CinemaRoles/CinemaRoles";

const CinemaPage: FC<any> = ({ releaseTrailer, releaseTitleRu, screenshots, roles, releaseDesctiprion }) => {
  const toPlayerRef: RefObject<null> = useRef(null);
  return (
    <div>
      <CinemaTrailer releaseTrailer={releaseTrailer} releaseTitleRu={releaseTitleRu} toPlayerRef={toPlayerRef} />
      <CinemaPlayer toPlayerRef={toPlayerRef} />
      <CinemaInfo releaseDesctiprion={releaseDesctiprion} screenshots={screenshots} />
      <CinemaRoles roles={roles} />
    </div>
  );
};

export default CinemaPage;
