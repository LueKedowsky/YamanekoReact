import React from "react";
import "./LastReleases.scss";
import data from "../../../data/tempData/data.json";
import { SingleReleaseDataType } from "../../../Types/dataTypes";
import LastReleasesBanner from "./LastReleasesBanner/LastReleasesBanner";

const LastReleases: React.FC = () => {
  const releaseData: SingleReleaseDataType[] = JSON.parse(JSON.stringify(data));
  return (
    <div className="lastReleases-container">
      <div className="lastReleases-container--inner">
        <div className="lastReleases-title">ПОСЛЕДНИЕ РЕЛИЗЫ</div>
        <div className="lastReleases-releases">
          <div className="lastReleases-releases_item">
            <div className="lastReleases-releases_item-poster">
              <img src={releaseData[0].releasePoster} alt="" className="lastReleases-releases_item-poster_img" />
            </div>
            <div className="lastReleases-releases_item-title">{releaseData[0].releaseTitleRu}</div>
          </div>
          <div className="lastReleases-releases_item">
            <div className="lastReleases-releases_item-poster">
              <img src={releaseData[1].releasePoster} alt="" className="lastReleases-releases_item-poster_img" />
            </div>
            <div className="lastReleases-releases_item-title">{releaseData[1].releaseTitleRu}</div>
          </div>
          <div className="lastReleases-releases_item">
            <div className="lastReleases-releases_item-poster">
              <img src={releaseData[2].releasePoster} alt="" className="lastReleases-releases_item-poster_img" />
            </div>
            <div className="lastReleases-releases_item-title">{releaseData[2].releaseTitleRu}</div>
          </div>
          <div className="lastReleases-releases_item">
            <div className="lastReleases-releases_item-poster">
              <img src={releaseData[3].releasePoster} alt="" className="lastReleases-releases_item-poster_img" />
            </div>
            <div className="lastReleases-releases_item-title">{releaseData[3].releaseTitleRu}</div>
          </div>
        </div>
        <LastReleasesBanner />
      </div>
    </div>
  );
};

export default LastReleases;
