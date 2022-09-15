import React from 'react'
import Frame1 from '../images/18876-frame1.png'
import Frame2 from '../images/frame2.jpg'
import ContactFrame from './ContactFrame'

const HeaderFrames = () => {
  return (
    <>
      <div className="header_frames">
        <div className="header_frame">
          <img src={Frame2} alt="frame" />
        </div>
        <div className="header_frame">
          <img src={Frame1} alt="frame" />
        </div>
      </div>
     <ContactFrame header />
    </>
  );
}

export default HeaderFrames