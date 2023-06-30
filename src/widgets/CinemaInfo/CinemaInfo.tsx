import React from 'react';
import './CinemaInfo.scss';
import informationBanner from 'assets/icons/information.svg';
import synopsisIcon from 'assets/icons/synopsis.svg';
import infoIcon from 'assets/icons/info.svg';
import staffIcon from 'assets/icons/staff.svg';

const CinemaInfo: React.FC<any> = ({ releaseDescription, screenshots }) => {
  return (
    <div className="cinemaInfo-container">
      <img className="cinemaInfo-banner" src={informationBanner} alt="" />
      <div className="cinemaInfo-flexcontainer">
        <div className="cinemaInfo-container--left">
          <div className="cinemaInfo-switchers active">
            <img
              className="cinemaInfo-switchers_img"
              src={synopsisIcon}
              alt=""
            />
          </div>
          <div className="cinemaInfo-switchers">
            <img className="cinemaInfo-switchers_img" src={infoIcon} alt="" />
          </div>
          <div className="cinemaInfo-switchers">
            <img className="cinemaInfo-switchers_img" src={staffIcon} alt="" />
          </div>
        </div>
        <div className="cinemaInfo-container--center">
          <div className="cinemaInfo-title">Синопсис</div>
          <div className="cinemaInfo-description" role="contentinfo">
            {releaseDescription}
          </div>
        </div>
        <div className="cinemaInfo-container--right">
          <div className="cinemaInfo-screenshots">
            <img
              className="cinemaInfo-screenshots_screenshot"
              src={screenshots[0]}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaInfo;
