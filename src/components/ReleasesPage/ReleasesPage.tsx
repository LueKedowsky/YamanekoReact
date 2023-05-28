import { FC, useEffect, useState } from 'react';
import { SingleReleaseDataType } from 'types/dataTypes';
import releasesBanner from 'assets/icons/releases.png';
import './ReleasesPage.scss';
// import data from 'data/tempData/data.json';
import axios from 'axios';
import SingleRelease from './SingleRelease/SingleRelease';

const ReleasesPage: FC = () => {
  // const releaseData: SingleReleaseDataType[] = JSON.parse(JSON.stringify(data));

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
