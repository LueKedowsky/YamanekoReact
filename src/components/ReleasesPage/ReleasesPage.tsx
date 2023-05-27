import { FC } from 'react';
import { SingleReleaseDataType } from 'types/dataTypes';
import releasesBanner from 'assets/icons/releases.png';
import './ReleasesPage.scss';
import data from 'data/tempData/data.json';
import SingleRelease from './SingleRelease/SingleRelease';

const ReleasesPage: FC = () => {
  const releaseData: SingleReleaseDataType[] = JSON.parse(JSON.stringify(data));
  return (
    <div className="releases-container">
      <div className="releases-banner">
        <img className="releases-banner-img" src={releasesBanner} alt="" />
      </div>
      <main className="releases-container-main">
        {releaseData.map((props) => {
          // eslint-disable-next-line react/prop-types
          return <SingleRelease key={props.id} {...props} />;
        })}
      </main>
    </div>
  );
};

export default ReleasesPage;
