import { FC, useState, useEffect } from 'react';
import { SingleReleaseDataType } from 'types/dataTypes';
import axios from 'axios';
import './LastReleases.scss';
// import data from 'data/tempData/data.json';
import LastReleasesBanner from './LastReleasesBanner/LastReleasesBanner';
import LastReleasesRelease from './LastReleasesRelease/LastReleasesRelease';

const LastReleases: FC = () => {
  const [data, setData] = useState<SingleReleaseDataType[]>([]);
  const getData = async (link: string) => {
    await axios
      .get(link)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        console.log(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData('https://yamaneko.fun/api/get_releases');
  }, []);
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
