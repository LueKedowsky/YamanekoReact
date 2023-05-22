export type SingleReleaseDataType = {
  id: number,
  titleLink: string,
  releasePoster: string,
  releaseTrailer: string,
  releaseTitleRu: string,
  releaseTitleOrig: string,
  releaseGenresList: string[],
  screenshots: string[],
  roles: RolesType[],
  releaseDesctiption: string
}

export type RolesType = {
  name: string,
  picture: string,
  dubber: string,
}