import React from "react";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          

          <div className="profile-details-name"></div>
          
        </div>

        <div className="profile-details-role">
          <span className="primary-text">
            {" "}
            <h1> Hiii...visiters🧸!!!!!
            {" "}
            {" "}
            {" "}
            {" "}
            </h1>
            <h3 > I am <span className="nishant"> Nishant🌝 </span></h3>
            
            <span className="profile-role-tagline">
              A Tech dev willing to work on different apps & project
            </span>
          </span>
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/nishant-singh-65606b1bb/ ">
                <i className="fa fa-linkedin-square "></i>
              </a>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox ">
                <i className="fa fa-google-plus-square "></i>
              </a>
              <a href="https://www.instagram.com/_nishant_singh01/ ">
                <i className="fa fa-instagram "></i>
              </a>
              <a href="https://github.com/ns5570  ">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.codingninjas.com/codestudio/profile/0ca65687-34a9-482b-872b-60efd94491ca">
                <i className="fa fa-coding-ninjas"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-options">
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox ">
        <button className="btn primary-btn">  Hire Me🛎️   </button>
              </a>
          
          <a href="nishantresume.pdf" download="nishantresume.pdf">
            <button className="btn highlighted-btn">Get Resume📄</button>
          </a>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>



      
    </div>
    

  );
}
