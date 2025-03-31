import React, { useState } from "react";
import ActivityCard from "../components/ActivityCard";

// Image
import background_design from "../assets/images/home_page/background_design.png";
import unclicked from "../assets/images/home_page/icons/unclicked.png";
import clicked from "../assets/images/home_page/icons/clicked.png";

// Style
import "../assets/style/EventsStyle/events.css";

// Icons
import cup from "../assets/images/home_page/icons/cup.svg";
import flash from "../assets/images/home_page/icons/flash.svg";
import teacher from "../assets/images/home_page/icons/teacher.svg";

import { Link } from "react-router-dom";

const categories = [
  { icon: teacher, label: "Təhsil" },
  { icon: flash, label: "Əyləncə" },
  { icon: cup, label: "İntellektual" },
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const totalEvents = 40;

  const filters = [
    "Hamı",
    "Tələbələr",
    "Qonaqlar",
    "Akademiya işçiləri",
    "Müəllim və mentorlar",
    "Digər",
  ];
  const events = [
    {
      id: 1,
      image: "path/to/custom/image1.png",
      category: "İdman",
      altCategory: "Futbol",
      remainingSpots: 8,
      title: "Futbol Turniri",
      targetAudience: "Universitet tələbələri",
      location: "Bakı Olimpiya Stadionu",
      time: "10.05.2025, 15:00",
      deadline: "07.05.2025",
      applyLink: "/apply/1",
    },
    {
      id: 2,
      image: "path/to/custom/image2.png",
      category: "İncəsənət",
      altCategory: "Rəsm",
      remainingSpots: 5,
      title: "Rəsm Sərgisi",
      targetAudience: "Bütün maraqlananlar",
      location: "Heydər Əliyev Mərkəzi",
      time: "15.06.2025, 12:00",
      deadline: "10.06.2025",
      applyLink: "/apply/2",
    },
    {
      id: 3,
      image: "path/to/custom/image3.png",
      category: "İntellektual",
      altCategory: "Debat",
      remainingSpots: 10,
      title: "Debat Çempionatı",
      targetAudience: "Orta məktəb və universitet tələbələri",
      location: "UNEC Konfrans Zalı",
      time: "05.07.2025, 14:00",
      deadline: "01.07.2025",
      applyLink: "/apply/3",
    },
  ];

  const toggleFilter = (index) => {
    setActiveFilter(activeFilter === index ? null : index);
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, totalEvents));
  };

  return (
    <>
      <div className="circle first"></div>
      <div className="circle second"></div>
      <h1 className="home_title">Tədbirlər və fəaliyyətlər</h1>

      <div className="categories">
        {categories.map((category, index) => (
          <p key={index} className="category">
            <img src={category.icon} alt={category.label} /> {category.label}
          </p>
        ))}
      </div>

      <div className="events_container">
        <div className="filter_container">
          {filters.map((filter, index) => (
            <p
              key={index}
              className={`filter ${activeFilter === index ? "active" : ""}`}
              onClick={() => toggleFilter(index)}
            >
              <img
                src={unclicked}
                className={`unclicked ${
                  activeFilter === index ? "deactive" : ""
                }`}
                alt=""
              />
              <img
                src={clicked}
                className={`clicked ${
                  activeFilter === index ? "" : "deactive"
                }`}
                alt=""
              />
              {filter}
            </p>
          ))}
        </div>

        {/* Activity Cards */}
        <div className="activities">
          <p className="activities-page-title">Tədbirlər</p>
          <div className="activities_container">
            {Array.from({ length: visibleCount }).map((_, index) => (
              <ActivityCard key={index} />
            ))}
          </div>
          {visibleCount < totalEvents && (
            <Link className="more-btn" onClick={loadMore}>
              Daha çox
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
