import React from "react";
import "./LastReleases.scss";
import data from "../../../data/tempData/data.json";
import { SingleReleaseDataType } from "../../../Types/dataTypes";
import LastReleasesBanner from "./LastReleasesBanner/LastReleasesBanner";
import { Link } from "react-router-dom";

const LastReleases: React.FC = () => {
  const releaseData: SingleReleaseDataType[] = JSON.parse(JSON.stringify(data));
  return (
    <div className="lastReleases-container">
      <div className="lastReleases-container--inner">
        <div className="lastReleases-title">ПОСЛЕДНИЕ РЕЛИЗЫ</div>
        <div className="lastReleases-releases">
          <div className="lastReleases-releases_item">
            <div className="lastReleases-releases_item-poster">
              <Link to={releaseData[0].titleLink}>
                <img src={releaseData[0].releasePoster} alt="" className="lastReleases-releases_item-poster_img" />
              </Link>
            </div>
            <div className="lastReleases-releases_item-title">
              <Link className="lastReleases-releases_item-title_link" to={releaseData[0].titleLink}>
                {releaseData[0].releaseTitleRu}
              </Link>
            </div>
          </div>
          <div className="lastReleases-releases_item">
            <div className="lastReleases-releases_item-poster">
              <Link to={releaseData[1].titleLink}>
                <img src={releaseData[1].releasePoster} alt="" className="lastReleases-releases_item-poster_img" />
              </Link>
            </div>
            <div className="lastReleases-releases_item-title">
              <Link className="lastReleases-releases_item-title_link" to={releaseData[1].titleLink}>
                {releaseData[1].releaseTitleRu}
              </Link>
            </div>
          </div>
          <div className="lastReleases-releases_item">
            <div className="lastReleases-releases_item-poster">
              <Link to={releaseData[2].titleLink}>
                <img src={releaseData[2].releasePoster} alt="" className="lastReleases-releases_item-poster_img" />
              </Link>
            </div>
            <div className="lastReleases-releases_item-title">
              <Link className="lastReleases-releases_item-title_link" to={releaseData[2].titleLink}>
                {releaseData[2].releaseTitleRu}
              </Link>
            </div>
          </div>
          <div className="lastReleases-releases_item">
            <div className="lastReleases-releases_item-poster">
              <Link to={releaseData[3].titleLink}>
                <img src={releaseData[3].releasePoster} alt="" className="lastReleases-releases_item-poster_img" />
              </Link>
            </div>
            <div className="lastReleases-releases_item-title">
              <Link className="lastReleases-releases_item-title_link" to={releaseData[3].titleLink}>
                {releaseData[3].releaseTitleRu}
              </Link>
            </div>
          </div>
        </div>
        <LastReleasesBanner />
      </div>
    </div>
  );
};

export default LastReleases;
