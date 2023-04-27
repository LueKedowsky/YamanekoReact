import "./SingleRelease.scss";
import { SingleReleaseDataType } from "../../Types/dataTypes";

const SingleRelease: React.FC<SingleReleaseDataType> = ({
  id: itemId,
  releasePoster,
  releaseTitleRu,
  releaseTitleOrig,
  releaseGenresList,
  releaseDesctiprion,
}) => {
  return (
    <>
      <div className="single-release-container" key={itemId}>
        <div className="single-release-container--left">
          <div className="single-release-poster">
            <img className="single-release-poster--img" src={releasePoster} alt="" />
          </div>
        </div>
        <div className="single-release-container--right">
          <div className="single-release-title--ru">{releaseTitleRu}</div>
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
