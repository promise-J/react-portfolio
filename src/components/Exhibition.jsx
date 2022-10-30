import React from "react";
import ContactFrame from "./ContactFrame";
import { BsStar } from "react-icons/bs";
import Img1 from '../images/html.png'
import Img2 from '../images/react.png'
import Img3 from '../images/node.webp'
import Img4 from '../images/js.png'
import Img5 from '../images/db.webp'
import Img6 from '../images/git.png'
import Img7 from '../images/testing.png'

const Exhibition = () => {
  return (
    <div id="exhibition">
      <div className="container exhibition_container">
        <h2 className="exhibition_title">Exhibitions</h2>
        <div className="empty exhibition_empty">
          <BsStar className="star-icon" />
          <BsStar className="star-icon" />
          <BsStar className="star-icon" />
          <BsStar className="star-icon" />
          <BsStar className="star-icon" />
        </div>
        <div className="exhibition_head">
          <p>
            Now, You 've met me.
            It's time to know my tech stack. Below are some technologies I use.</p>
          <ContactFrame exhibition />
        </div>
        <div className="exhibition_gallery">
          <article>
            <img src={Img1} alt="exhi-img" />
            <p>HTML5 / CSS3</p>
          </article>
          <article>
            <img src={Img2} alt="exhi-img" />
            <p>React js</p>
          </article>
          <article>
            <img src={Img3} alt="exhi-img" />
            <p>Node js</p>
          </article>
          <article>
            <img src={Img4} alt="exhi-img" />
            <p>Javascript</p>
          </article>
          <article>
            <img src={Img5} alt="exhi-img" />
            <p>Databases (NoSQL / SQL)</p>
          </article>
          <article>
            <img src={Img6} alt="exhi-img" />
            <p>Git / Github</p>
          </article>
          <article>
            <img src={Img7} alt="exhi-img" />
            <p>Software Testing</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
