import React from "react";

// Images
import post from "../assets/images/activity_card/poster.png";
import event1 from "../assets/images/EventDetails/event-1.png";

// Icons
import location from "../assets/images/activity_card/icons/location.svg";
import clock from "../assets/images/activity_card/icons/clock.svg";

// Style
import "../assets/style/EventDetails/event.css";

// Libraries
import Swal from "sweetalert2";

const applied = () => {
  Swal.fire({
    title: "Əla!",
    text: "Uğurla qeydiyyatdan keçildi!",
    icon: "success",
  });
};

function EventDetails() {
  return (
    <>
      <div className="event_container">
        <div className="leftPart">
          <div className="event_post">
            <img src={post} className="post_image" alt="" />
          </div>
          <div className="postDesc">
            <div className="postDetails">
              <div className="top">
                <p>İntellektual</p>
                <p>Şahmat</p>
              </div>
              <div className="bottom">
                <p>
                  <span>#</span>Tələbələr üçün
                </p>
                <p>
                  <span>6</span> mövcud yer
                </p>
              </div>
            </div>
            <p className="postTitle">Şahmat yarışı</p>
            <p className="lastDate">Son qeydiyyat tarixi: 25.03.2025</p>
            <p className="postDesc">
              29 mart 2025-ci il, saat 14:00-da Turing Academy-nin UNO otağında
              yalnız akademiya tələbələri üçün nəzərdə tutulmuş şahmat yarışı
              keçiriləcək! 18 iştirakçının qatılacağı bu yarış, strateji düşünmə
              bacarıqlarınızı sınamaq və intellektual mühitdə rəqabət aparmaq
              üçün əla fürsətdir. Təcrübəli oyunçular və yeni başlayanlar üçün
              maraqlı olacaq bu tədbirdə, məntiq və taktikanın gücünü kəşf edin!
            </p>
            <div className="postIconsBottom">
              <p>
                <img src={location} alt="" /> Turing Academy
              </p>
              <p>
                <img src={clock} alt="" />
                29.03.2025, 14:00 - 18:00
              </p>
            </div>
            <p className="register-btn" onClick={applied}>
              Müraciət et
            </p>
          </div>
        </div>
        <div className="rightPart">
          <img src={event1} alt="" />
          <img src={event1} alt="" />
          <img src={event1} alt="" />
          <img src={event1} alt="" />
          <img src={event1} alt="" />
        </div>
      </div>
    </>
  );
}

export default EventDetails;
