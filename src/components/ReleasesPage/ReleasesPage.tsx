import { FC, useContext } from 'react';
import releasesBanner from 'assets/icons/releases.png';
import './ReleasesPage.scss';
import ReleasesDataContext from 'context/ReleasesDataContext';
import SingleRelease from './SingleRelease/SingleRelease';

const ReleasesPage: FC = () => {
  const data = useContext(ReleasesDataContext);
  return (
    <div className="releases-container">
      <div className="releases-banner">
        <img className="releases-banner-img" src={releasesBanner} alt="" />
      </div>
      <main className="releases-container-main">
        {data.map((props) => {
          // eslint-disable-next-line react/prop-types
          return <SingleRelease key={props.id} {...props} />;
        })}
      </main>
    </div>
  );
};

export default ReleasesPage;
