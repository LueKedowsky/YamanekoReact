import React from 'react';
import './CinemaRoles.scss';
import rolesBanner from 'assets/icons/roles.svg';
import { RolesType } from 'types/dataTypes';

const CinemaRoles: React.FC<any> = ({ roles }) => {
  return (
    <div className="cinemaRoles-container">
      <img src={rolesBanner} alt="" className="cinemaRoles-banner" />
      <div className="cinemaRoles-roles">
        {roles.map((item: RolesType) => (
          <div className="cinemaRoles-roles_role" key={item.name}>
            <div className="cinemaRoles-roles_role--img-wrap">
              <img
                src={item.picture}
                alt=""
                className="cinemaRoles-roles_role-img"
              />
              <div className="cinemaRoles-roles_role--names-wrap">
                <div className="cinemaRoles-roles_role-name">{item.name}</div>
                <div className="cinemaRoles-roles_role-description">
                  Озвучил
                  <br />
                  {item.dubber}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CinemaRoles;
