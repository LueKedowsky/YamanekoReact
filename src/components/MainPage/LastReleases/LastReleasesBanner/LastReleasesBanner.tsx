import React from "react";
import "./LastReleasesBanner.scss";
import banner from "@data/assets/icons/banner.svg";

const LastReleasesBanner: React.FC = () => {
  return (
    <div className="releasesBanner-container">
      <div className="releasesBanner-banner">
        <img className="releasesBanner-banner_img" src={banner} alt="" />
      </div>
    </div>
  );
};

export default LastReleasesBanner;
