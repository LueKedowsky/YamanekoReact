import { FC, useState, useEffect } from 'react';
import ReleasesDataContext from 'context/ReleasesDataContext';
import { SingleReleaseDataType } from 'types/dataTypes';
import { httpApi } from 'shared/api/httpApi';
import { URL_GET_RELEASES } from 'shared/api/requestURL';

const ReleasesDataContextProvider: FC<any> = ({ children }) => {
  const [releasesData, setReleasesData] = useState<SingleReleaseDataType[]>([]);
  const getReleasesData = async (requestUrl: string) => {
    await httpApi
      .get(requestUrl)
      .then((response) => {
        setReleasesData(response.data);
      })
      .catch((error) => {
        console.log(error, 'AXIOS REQUEST ERROR');
        throw error;
      });
  };
  useEffect(() => {
    getReleasesData(URL_GET_RELEASES);
  }, []);
  return (
    <ReleasesDataContext.Provider value={releasesData}>
      {children}
    </ReleasesDataContext.Provider>
  );
};

export default ReleasesDataContextProvider;
