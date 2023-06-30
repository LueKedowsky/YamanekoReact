import { Context, createContext } from 'react';
import { SingleReleaseDataType } from 'types/dataTypes';
import data from 'entities/data/tempData/data.json';

const initialState = JSON.parse(JSON.stringify(data)).slice(0, 1);

const ReleasesDataContext: Context<SingleReleaseDataType[]> =
  createContext(initialState);

export default ReleasesDataContext;
