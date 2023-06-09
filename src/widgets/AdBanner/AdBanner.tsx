import React from 'react';
import './AdBanner.scss';
import banner from 'assets/icons/banner.svg';

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
