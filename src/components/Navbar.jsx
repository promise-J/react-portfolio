import React, { useState } from 'react'
import ProfilePic from "../images/jpLogo.jpeg";
import {
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleOpenMenu = ()=>{
    setOpenMenu(true)
  }

  const handleCloseMenu = ()=>{
    setOpenMenu(false)
  }


  
  return (
    <nav id="home">
      <div className="container nav_container">
        <a href="https" className="nav_logo">
          <img src={ProfilePic} alt="my profile" />
        </a>
        <ul
          onClick={handleCloseMenu}
          className="nav_links"
          style={{ display: openMenu && "flex" }}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#exhibition">Exhibition</a>
          </li>
        </ul>
        <ul className="nav_socials">
          <li>
            <a
              href="https://www.linkedin.com/in/promise-chiemela"
              target="blank"
            >
              {" "}
              <AiFillLinkedin className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/promise.johnson.940"
              target="blank"
            >
              {" "}
              <AiOutlineFacebook className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/Promise94353263" target="blank">
              {" "}
              <AiOutlineTwitter className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/promise-J" target="blank">
              {" "}
              <AiFillGithub className="social-icon" />
            </a>
          </li>
        </ul>
        {!openMenu ? (
          <button
            onClick={handleOpenMenu}
            // style={{ display: openMenu ? "none" : "inline-block" }}
            className="nav_toggle-btn"
            // className={openMenu ? "nav_toggle-btn" : "nav_toggle-btn active"}
            id="nav_toggle-open"
          >
            <AiOutlineMenu />
          </button>
        ) : (
          <button
            onClick={handleCloseMenu}
            // style={{ display: openMenu ? "none" : "inline-block" }}
            className="nav_toggle-btn"
            // className={openMenu ? "nav_toggle-btn" : "nav_toggle-btn active"}
            id="nav_toggle-open"
          >
            <CgCloseR />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar