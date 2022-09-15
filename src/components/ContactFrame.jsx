import React from 'react'
import { FaPaperPlane } from "react-icons/fa";


const ContactFrame = (props) => {
  return (
    <a
      href="mailto:chiemelapromise30@gmail.com"
      className={`contact_btn ${Object.keys(props)[0]}_btn`}
    >
      <FaPaperPlane className="icon" title="Send Me a Message" />
    </a>
  );
}

export default ContactFrame