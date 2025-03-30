import React from "react";

// Images and Icons
import notification_icon from "../../assets/images/header/notification.svg";
import profile_icon from "../../assets/images/header/profile.svg";
import logo from "../../assets/images/general/logo.png";

// Style
import "../../assets/style/header/header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header_content">
          <div className="logo_part">
            <img src={logo} alt="" />
          </div>
          <div className="right_part">
            <div className="notification_icon_part">
              <img
                src={notification_icon}
                alt="Turing Activities Notification Icon"
              />
              <span className="notif_red_icon before"></span>
              <span className="notif_red_icon after"></span>
            </div>
            <div className="profile_icon_part">
              <img src={profile_icon} alt="Turing Activities Profile Icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
