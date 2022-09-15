import React from "react";
import AboutImg from "../images/p2.jpeg";
import ContactFrame from "./ContactFrame";
import { BsStar } from "react-icons/bs";


const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <h2 className="about_title">
          About <br />
          Promise Johnson
        </h2>
        <ContactFrame about />
        <div className="about_left">
          <div className="about_image">
            <div className="about_image-bg"></div>
            <div className="about_image-lg">
              <img src={AboutImg} alt="about promise" />
            </div>
            <div className="about_image-sm">
              <img src={AboutImg} alt="about promise" />
            </div>
          </div>
        </div>
        <div className="about_right">
          <div className="empty about_empty">
            <BsStar className="star-icon" />
            <BsStar className="star-icon" />
            <BsStar className="star-icon" />
            <BsStar className="star-icon" />
            <BsStar className="star-icon" />
          </div>
          <p>
            Hello! I am Johnson Promise. I am a Bachelor degree holder in
            Biochemistry. I am a Web Developer . I design web applications on
            the internet. My passion for this discipline started over three
            years ago when i attended a coding boot-camp where i was taught
            HTML5 and CSS. From building a personal comedy website to building
            sophiscated web apps and even deeper in Projects Collaborations.
          </p>
          <p>
            With prior experience as a Microverse intern, 
            serving about 8+ months solving problems and colloborating with fellow intern and working with different tools, libraries,
             within and outside of the Microverse, contributing to various client works.
          </p>
          <p>
            At this present day, working as a free lancer and part time with
            Solution Academy as a mentor and Head Of Department (HOD). Having
            organized a handful of Boot-camps programmes, I earned the Best
            staff of the year. (2018, 2019, 2020)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
