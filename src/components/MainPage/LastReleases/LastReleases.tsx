import React from "react";
import "./LastReleases.scss";
import data from "@/data/tempData/data.json";
import { SingleReleaseDataType } from "@/Types/dataTypes";
import LastReleasesBanner from "./LastReleasesBanner/LastReleasesBanner";
import LastReleasesRelease from "./LastReleasesRelease/LastReleasesRelease";

const LastReleases: React.FC = () => {
  const releaseData: SingleReleaseDataType[] = JSON.parse(JSON.stringify(data));
  const fourElementsOfReleaseData: SingleReleaseDataType[] = releaseData.slice(0, 4);
  return (
    <div className="lastReleases-container">
      <div className="lastReleases-container--inner">
        <div className="lastReleases-title">ПОСЛЕДНИЕ РЕЛИЗЫ</div>
        <div className="lastReleases-releases">
          {fourElementsOfReleaseData.map(({ id, titleLink, releasePoster, releaseTitleRu }) => (
            <LastReleasesRelease key={id} titleLink={titleLink} releasePoster={releasePoster} releaseTitleRu={releaseTitleRu} />
          ))}
        </div>
        <LastReleasesBanner />
      </div>
    </div>
  );
};

export default LastReleases;
