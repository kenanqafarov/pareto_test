import React, { useState } from "react";
import ActivityCard from "../components/ActivityCard";

// Image
import background_design from "../assets/images/home_page/background_design.png";
import unclicked from "../assets/images/home_page/icons/unclicked.png";
import clicked from "../assets/images/home_page/icons/clicked.png";

// Style
import "../assets/style/HomePage/home.css";

// Icons
import cup from "../assets/images/home_page/icons/cup.svg";
import flash from "../assets/images/home_page/icons/flash.svg";
import teacher from "../assets/images/home_page/icons/teacher.svg";

import { Link } from "react-router-dom";

const categories = [
  { icon: teacher, state: "active", label: "Təhsil" },
  { icon: flash, state: "deactive", label: "Əyləncə" },
  { icon: cup, state: "deactive", label: "İntellektual" },
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const filters = [
    "Hamı",
    "Tələbələr",
    "Qonaqlar",
    "Akademiya işçiləri",
    "Müəllim və mentorlar",
    "Digər",
  ];

  const toggleFilter = (index) => {
    setActiveFilter(activeFilter === index ? null : index);
  };

  return (
    <>
      <div className="circle first"></div>
      <div className="circle second"></div>
      <h1 className="home_title">Tədbirlər və fəaliyyətlər</h1>

      <div className="categories">
        {categories.map((category, index) => (
          <p key={index} className={`category ${category.state}`}>
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
          <p className="latest-activities-title">Yeni əlavə olunanlar</p>
          <div className="latest_activities_container">
            {Array.from({ length: 3 }).map((_, index) => (
              <ActivityCard key={index} />
            ))}
          </div>
          <p className="activities-title">Tədbirlər</p>
          <div className="activities_container">
            {Array.from({ length: 8 }).map((_, index) => (
              <ActivityCard key={index} />
            ))}
          </div>
          <Link className="more-btn" to="/events">
            Daha çox
          </Link>
          <p className="galery-title">Qaleriya</p>
          <div className="galery-container">
            <div className="leftPart">
              <div className="topPart"></div>
              <div className="bottomPart"></div>
            </div>
            <div className="rightPart">
              <div className="topPart"></div>
              <div className="bottomPart">
                <div className="left">
                  <div className="top"></div>
                  <div className="bottom"></div>
                </div>
                <div className="right"></div>
              </div>
            </div>
          </div>
          <Link className="more" to="/gallery">
            Daha çox
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
