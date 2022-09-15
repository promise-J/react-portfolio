import React from 'react'
import ImgBg from "../images/p1.jpeg";
import {BsStar} from 'react-icons/bs'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_left">
          <div className="header_image-bg"></div>
          <div className="header_image-lg">
            <img src={ImgBg} alt="hier" />
          </div>
          <div className="header_image-sm">
            <img src={ImgBg} alt="hier" />
          </div>
        </div>
        <div className="header_right">
          <div className="header_head">
            <div className="empty header_empty">
              <BsStar className='star-icon' />
              <BsStar className='star-icon' />
              <BsStar className='star-icon' />
              <BsStar className='star-icon' />
              <BsStar className='star-icon' />
            </div>
            <a href="https" className="header_tag">
              #Johnson Promise Chiemela
            </a>
          </div>
          <h1 className='header_title'>Dream Software, I bring Solution</h1>
          <p>
            I am a Fullstack Javascript Software Developer dedicated to building
            and designing your Software applications. Give me your ideas and i
            bring it to life. .
          </p>
          <a
            href="mailto:chiemelapromise30@gmail.com"
            className="header_btn-md"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header