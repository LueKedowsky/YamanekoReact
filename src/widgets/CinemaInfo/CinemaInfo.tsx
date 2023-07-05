import { FC, useState } from 'react';
import './CinemaInfo.scss';
import informationBanner from 'assets/icons/information.svg';
import synopsisIcon from 'assets/icons/synopsis.svg';
import infoIcon from 'assets/icons/info.svg';
import staffIcon from 'assets/icons/staff.svg';
import { CinemaInfoProps } from 'shared/types/dataTypes';

const CinemaInfo: FC<CinemaInfoProps> = ({
  releaseDescription,
  screenshots,
}) => {
  type SwitchersType = 'synopsis' | 'info' | 'staff';
  const [currentSwitcher, setCurrentSwitcher] =
    useState<SwitchersType>('synopsis');
  const switchersClickHandler = (currentSwitch: SwitchersType): void => {
    setCurrentSwitcher(currentSwitch);
  };
  return (
    <div className="cinemaInfo-container">
      <img className="cinemaInfo-banner" src={informationBanner} alt="" />
      <div className="cinemaInfo-flexcontainer">
        <div className="cinemaInfo-container--left">
          <div
            className={`cinemaInfo-switchers${
              currentSwitcher === 'synopsis' ? ' active' : ''
            }`}
            onClick={() => switchersClickHandler('synopsis')}
            role="button"
            tabIndex={0}
          >
            <img
              className="cinemaInfo-switchers_img"
              src={synopsisIcon}
              alt=""
            />
          </div>
          <div
            className={`cinemaInfo-switchers${
              currentSwitcher === 'info' ? ' active' : ''
            }`}
            onClick={() => switchersClickHandler('info')}
            role="button"
            tabIndex={0}
          >
            <img className="cinemaInfo-switchers_img" src={infoIcon} alt="" />
          </div>
          <div
            className={`cinemaInfo-switchers${
              currentSwitcher === 'staff' ? ' active' : ''
            }`}
            onClick={() => switchersClickHandler('staff')}
            role="button"
            tabIndex={0}
          >
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
