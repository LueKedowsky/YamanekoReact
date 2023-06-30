import { FC, RefObject, useRef } from 'react';
import CinemaTrailer from '../../widgets/CinemaTrailer/CinemaTrailer';
import CinemaPlayer from '../../widgets/CinemaPlayer/CinemaPlayer';
import CinemaInfo from '../../widgets/CinemaInfo/CinemaInfo';
import CinemaRoles from '../../widgets/CinemaRoles/CinemaRoles';

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
  releaseDescription,
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
    releaseDescription
  );
  const toPlayerRef: RefObject<null> = useRef(null);

  return (
    <div>
      <CinemaTrailer
        releaseTrailer={releaseTrailer}
        releaseTitleRu={releaseTitleRu}
        toPlayerRef={toPlayerRef}
      />
      <CinemaPlayer playerID="player1" toPlayerRef={toPlayerRef} />
      <CinemaInfo
        releaseDescription={releaseDescription}
        screenshots={screenshots}
      />
      <CinemaRoles roles={roles} />
    </div>
  );
};

export default CinemaPage;
