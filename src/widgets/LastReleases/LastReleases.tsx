import { FC, useContext } from 'react';
import { SingleReleaseDataType } from 'types/dataTypes';
import './LastReleases.scss';
import ReleasesDataContext from 'context/ReleasesDataContext';
import LastReleasesBanner from './LastReleasesBanner/LastReleasesBanner';
import LastReleasesRelease from './LastReleasesRelease/LastReleasesRelease';

const LastReleases: FC = () => {
  const data = useContext(ReleasesDataContext);
  const fourElementsOfReleaseData: SingleReleaseDataType[] = data.slice(0, 4);

  return (
    <div className="lastReleases-container">
      <div className="lastReleases-container--inner">
        <div className="lastReleases-title">ПОСЛЕДНИЕ РЕЛИЗЫ</div>
        <div className="lastReleases-releases">
          {fourElementsOfReleaseData.map(
            ({ id, titleLink, releasePoster, releaseTitleRu }) => (
              <LastReleasesRelease
                key={id}
                titleLink={titleLink}
                releasePoster={releasePoster}
                releaseTitleRu={releaseTitleRu}
              />
            )
          )}
        </div>
        <LastReleasesBanner />
      </div>
    </div>
  );
};

export default LastReleases;
