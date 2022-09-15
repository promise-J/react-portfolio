import React from "react";
import SwiperSlider from "./SwiperSlider";
import { BsStar } from "react-icons/bs";


const Gallery = ({showSingle, setShowSingle}) => {
  return (
    <section id="gallery" className="gallery">
      <div className="container gallery_container">
        <div className="gallery_head">
          <h2 className="gallery_title">My Project Gallery</h2>
          <div className="empty gallery_empty">
            <BsStar className="star-icon" />
            <BsStar className="star-icon" />
            <BsStar className="star-icon" />
            <BsStar className="star-icon" />
            <BsStar className="star-icon" />
          </div>
        </div>
        <p>
          I am still taking orders.
        </p>
        <p>
           Take a minute to see some of my wonderful works.
        </p>
        <p>Dont forget to drop a Star</p>
        <SwiperSlider showSingle={showSingle} setShowSingle={setShowSingle} />
      </div>
    </section>
  );
};

export default Gallery;
