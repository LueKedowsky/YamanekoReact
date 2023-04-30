import "./SingleRelease.scss";
import { SingleReleaseDataType } from "../../../Types/dataTypes";
import { Link } from "react-router-dom";

const SingleRelease: React.FC<SingleReleaseDataType> = ({
  id: itemId,
  titleLink,
  releasePoster,
  releaseTitleRu,
  releaseTitleOrig,
  releaseGenresList,
  releaseDesctiprion,
}) => {
  // реализовать поиск по жанрам при клике на конкретный жанр в тэгах под названием
  return (
    <>
      <div className="single-release-container" key={itemId}>
        <div className="single-release-container--left">
          <div className="single-release-poster">
            <Link to={titleLink}>
              <img className="single-release-poster--img" src={releasePoster} alt="" />
            </Link>
          </div>
        </div>
        <div className="single-release-container--right">
          <div className="single-release-title--ru">
            <Link to={titleLink}>{releaseTitleRu}</Link>
          </div>
          <div className="single-release-title--orig">{releaseTitleOrig}</div>
          <div className="single-release-genre-list">
            {releaseGenresList.map((item: any) => (
              <p className="single-release-genre-list--item">{item}</p>
            ))}
          </div>
          <div className="single-release-description">{releaseDesctiprion}</div>
        </div>
      </div>
    </>
  );
};

export default SingleRelease;
