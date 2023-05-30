import { FC, useState, useEffect } from 'react';
import ReleasesDataContext from 'context/ReleasesDataContext';
import { SingleReleaseDataType } from 'types/dataTypes';
import axios from 'axios';

const ReleasesDataContextProvider: FC<any> = ({ children }) => {
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
    <ReleasesDataContext.Provider value={data}>
      {children}
    </ReleasesDataContext.Provider>
  );
};

export default ReleasesDataContextProvider;
