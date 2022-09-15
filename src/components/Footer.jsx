import React from 'react'
import ContactFrame from './ContactFrame';

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <div className="footer_head">
          <h2 className="footer_title">Chiemelapromise30@gmail.com</h2>
          <ContactFrame footer />
        </div>
        <ul className="footer_links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#exhibition">Exhibitions</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer