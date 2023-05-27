import './SingleRelease.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SingleReleaseDataType } from 'types/dataTypes';

const SingleRelease: FC<SingleReleaseDataType> = ({
  titleLink,
  releasePoster,
  releaseTitleRu,
  releaseTitleOrig,
  releaseGenresList,
  releaseDescription,
}: SingleReleaseDataType) => {
  return (
    <div className="single-release-container">
      <div className="single-release-container--left">
        <div className="single-release-poster">
          <Link to={titleLink}>
            <img
              className="single-release-poster--img"
              src={releasePoster}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="single-release-container--right">
        <div className="single-release-title--ru">
          <Link to={titleLink}>{releaseTitleRu}</Link>
        </div>
        <div className="single-release-title--orig">{releaseTitleOrig}</div>
        <div className="single-release-genre-list">
          {releaseGenresList.map((item: string, index: number) => (
            <p className="single-release-genre-list--item" key={item + index}>
              {item}
            </p>
          ))}
        </div>
        <div className="single-release-description">{releaseDescription}</div>
      </div>
    </div>
  );
};

export default SingleRelease;
