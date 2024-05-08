import React from "react";
import './Home.css';
import profile from '../../assets/PortfolioImg.png';
import gitHubLogo from '../../assets/github-mark.svg';
import linkedInLogo from '../../assets/iconmonstr-linkedin-3.svg';
import resumeLogo from '../../assets/resLogo.png';

function Home()
{
    return (
      <div className="intro">
        <div className="nameAndSummary">
          <p className="salutation">
            Hi,
          </p>
          <p className="name">
            <span className="default-color">I am </span><span className="red_color">Aman.</span>
          </p>
          <p className ="Summary">
            A passionate Software Engineer,
            <br/>
            and Computer Engineer.
          </p>
          <div className="socialsDiv">
            <a className="tool" rel ="noreferrer" href = "https://github.com/Frenzy117?tab=repositories" target="_blank">
              <img className="logoImg" src={gitHubLogo} alt="gitHubLink"/>
            </a>
            <a className="tool" rel ="noreferrer" href="https://www.linkedin.com/in/aman-saxena-ba000b212/" target="_blank">
                <img className = "logoImg" src={linkedInLogo} alt = "linkedinLink"/>
            </a>
            <a className="tool" rel ="noreferrer" href="https://www.dropbox.com/scl/fi/7mxmm8ynpqu012blvxw89/Aman-Saxena_02_07_2024.pdf?rlkey=h6gy9wwgsrzjbb7r0gn64x3a9&dl=0" target="_blank">
              <img className="logoImg resLogo" src={resumeLogo} alt = "resumeLink"/>
            </a>
          </div>
          
        </div>
        <div className = "myImage">
          <img className="profileimage" src={profile} alt="that's me!"></img>
        </div>
      </div>
    );
}

export default Home;