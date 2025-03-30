import React from "react";
import { Link } from "react-router-dom";

// Style
import "../assets/style/ActivityCard/card.css";
import poster from "../assets/images/activity_card/poster.png";

// Icons
import locationIcon from "../assets/images/activity_card/icons/location.svg";
import clockIcon from "../assets/images/activity_card/icons/clock.svg";
import calendarIcon from "../assets/images/activity_card/icons/calendar.svg";

function ActivityCard({
  image = poster,
  category = "İntellektual",
  altCategory = "Şahmat",
  remainingSpots = 12,
  title = "Şahmat",
  targetAudience,
  location = "AzFar satdionu ",
  time = "21.04.2025, 11:00",
  deadline = "18.04.2025",
  applyLink,
}) {
  return (
    <div className="activity_card">
      <div className="post_image">
        <img src={image} alt="Activity" />
      </div>
      <div className="post_desc">
        <div className="topPart">
          <p>
            {category} - {altCategory}
          </p>
          <p>Qalan yer sayı: {remainingSpots}</p>
        </div>
        <p className="post_title">{title}</p>
        <p className="post_target">{targetAudience}</p>
        <div className="post_info">
          <div className="topPart">
            <p className="post_location">
              <img src={locationIcon} alt="Location" />
              {location}
            </p>
            <p className="post_time">
              <img src={clockIcon} alt="Time" />
              {time}
            </p>
          </div>
          <div className="bottomPart">
            <p className="post_date">
              <img src={calendarIcon} alt="Calendar" />
              Son tarix: {deadline}
            </p>
          </div>
        </div>
      </div>
      <Link className="apply" to={applyLink}>
        Müraciət
      </Link>
    </div>
  );
}

export default ActivityCard;
