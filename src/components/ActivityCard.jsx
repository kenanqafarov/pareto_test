import React from "react";

// Icons
import poster from "../assets/images/activity_card/poster.png";
import calendar from "../assets/images/activity_card/icons/calendar.svg";
import clock from "../assets/images/activity_card/icons/clock.svg";
import location from "../assets/images/activity_card/icons/location.svg";

// Style
import "../assets/style/ActivityCard/card.css";

function ActivityCard() {
  return (
    <>
      <div className="activity_card">
        <div className="post_pic">
          <img src={poster} alt="" />
        </div>
        <div className="post_desc">
          <div className="topPart">
            <p className="post_category">İntellektual - Şahmat</p>
            <p className="post_limit">Qalan yer sayı: 6</p>
          </div>
          <p className="post_title">Şahmat yarışı</p>
          <p className="post_target">Tələbələr üçün</p>
        </div>
        <div className="post_info">
          <p className="post_location">
            <img src={location} alt="" /> Turing Academy
          </p>
          <p className="post_time">
            <img src={clock} alt="" /> 29.03.2025, 14:00
          </p>
        </div>
        <p className="post_register_time">
          <img src={calendar} alt="" /> Qeydiyyat üçün son tarix: 25.03.2025
        </p>
      </div>
    </>
  );
}

export default ActivityCard;
