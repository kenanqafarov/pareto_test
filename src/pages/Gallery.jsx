import React, { useState } from "react";
import { Link } from "react-router-dom";

// Style
import "../assets/style/Gallery/gallery.css";

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const totalBlocks = 10;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 1, totalBlocks));
  };

  return (
    <>
      <div className="circle first"></div>
      <div className="circle second"></div>

      <h3 className="title_galery">Qaleriya</h3>

      <div className="activities">
        <div className="galery-container-page">
          {Array.from({ length: visibleCount }).map((_, index) => (
            <div key={index} className="galery-images">
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
          ))}
        </div>

        {visibleCount < totalBlocks && (
          <Link className="more-images-page-btn" onClick={loadMore}>
            Daha çox
          </Link>
        )}
      </div>
    </>
  );
};

export default Gallery;
