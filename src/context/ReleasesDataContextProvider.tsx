import { FC, useState, useEffect } from 'react';
import ReleasesDataContext from 'context/ReleasesDataContext';
import { SingleReleaseDataType } from 'types/dataTypes';
import axios from 'axios';

const ReleasesDataContextProvider: FC<any> = ({ children }) => {
  const [releasesData, setReleasesData] = useState<SingleReleaseDataType[]>([]);
  const getReleasesData = async (requestDataLink: string) => {
    await axios
      .get(requestDataLink)
      .then((response) => {
        setReleasesData(response.data);
      })
      .catch((error) => {
        console.log(error, 'AXIOS REQUEST ERROR');
      });
  };
  useEffect(() => {
    getReleasesData('https://yamaneko.fun/api/get_releases');
  }, []);
  return (
    <ReleasesDataContext.Provider value={releasesData}>
      {children}
    </ReleasesDataContext.Provider>
  );
};

export default ReleasesDataContextProvider;
