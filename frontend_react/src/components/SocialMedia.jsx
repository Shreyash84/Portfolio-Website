import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/shreyash84/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/_.cinos._/" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/Shreyash84" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
