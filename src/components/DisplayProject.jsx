import React from "react";

const DisplayProject = ({showSingle, setShowSingle}) => {
  return (
    <div id="displayProject" className="displayProject">
      <div className="displayProject_container container">
        <div className="display_content">
          <h1>{showSingle?.value?.title}</h1>
          <p>{showSingle?.value?.description}</p>
          <div className="display_content_bottom">
            {showSingle?.value?.demo &&
              <a href={showSingle?.value?.demo} target='blank'>
            <button>See Demo</button>
            </a>
            }
            <a href={showSingle?.value?.github} target='blank'>
            <button>See Source Code</button>
            </a>
            <a
              href="#gallery"
              onClick={() => setShowSingle({ state: false, value: null })}
            >
              <button>All projects</button>
            </a>
          </div>
        </div>
        <div className="display_image">
          <img 
          src={require("../images/" + showSingle?.value?.img)}
          alt='Project-img'
           />
        </div>
      </div>
    </div>
  );
};

export default DisplayProject;
