import React from "react";
import { Link } from "react-router-dom";
import "./LastReleasesRelease.scss";

const LastReleasesRelease: React.FC<any> = ({ titleLink, releasePoster, releaseTitleRu }) => {
  return (
    <div className="lastReleasesRelease_item">
      <div className="lastReleasesRelease_item-poster">
        <Link to={titleLink}>
          <img src={releasePoster} alt="" className="lastReleasesRelease_item-poster_img" />
        </Link>
      </div>
      <div className="lastReleasesRelease_item-title">
        <Link className="lastReleasesRelease_item-title_link" to={titleLink}>
          {releaseTitleRu}
        </Link>
      </div>
    </div>
  );
};

export default LastReleasesRelease;
