import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Pagination, A11y } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";
import projects from "./projectData";


const SwiperSlider = ({ showSingle, setShowSingle }) => {
  const handleShowProject = (project) => {
    setShowSingle({state: true, value: project});
  };

  return (
    // <div className='swiper-container'>
    <Swiper
      breakpoints={{
        700: {
          width: 700,
          slidesPerView: 2,
        },
        1000: {
          width: 1000,
          slidesPerView: 3,
        },
      }}
      modules={[Navigation, EffectFade, Pagination, A11y]}
      navigation
      effect
      pagination={{ clickable: true }}
      speed={800}
      loop
      spaceBetween={30}
      // slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      className="swiper"
    >
      {projects.map((project) => (
        <SwiperSlide
          onClick={()=> handleShowProject(project)}
          className="swiper-slide"
          id="displayProject"
          key={project.id}
        >
          <article>
            <img
              src={require("../images/" + project.img)}
              alt="slide-img"
            />
            <div className="slide-content">
              {project.description.slice(0, 50) + '...'}
              <a className="slide_link" href="#displayProject">
                See Project
              </a>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>

    // </div>
  );
};

export default SwiperSlider;
