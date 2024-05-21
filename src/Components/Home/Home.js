import React from "react";
import './Home.css';
import profile from '../../assets/PortfolioImg.png';
import gitHubLogo from '../../assets/github-mark.svg';
import linkedInLogo from '../../assets/iconmonstr-linkedin-3.svg';
import resumeLogo from '../../assets/resLogo.png';
import Tooltip from '@mui/joy/Tooltip';

function Home()
{
    return (
      <div className="home-container">
        <div className="home">
          <div className="nameAndSummary">
            <div className="summary1">
              <p className="salutation">
                Hi!
              </p>
              <p className="name">
                <span className="default-color">I am </span><span className="red_color">Aman Saxena.</span>
              </p>
            </div>
            <div className="summary2">
              <p className ="Summary">
                A passionate Software Engineer,
                <br/>
                and Computer Engineer.
              </p>
            </div>
            <div className="socialsDiv">
              <Tooltip title="My Github" variant="soft" size="sm">
                <a className="tool" rel ="noreferrer" href = "https://github.com/Frenzy117?tab=repositories" target="_blank">
                  <img className="logoImg" src={gitHubLogo} alt="gitHubLink"/>
                </a>
              </Tooltip>
              
              <Tooltip title="My LinkedIn" variant="soft" size="sm">
                <a className="tool" rel ="noreferrer" href="https://www.linkedin.com/in/aman-saxena-ba000b212/" target="_blank">
                  <img className = "logoImg" src={linkedInLogo} alt = "linkedinLink"/>
                </a>
              </Tooltip>
              <Tooltip title="Resume" variant="soft" size="sm">
                <a className="tool" rel ="noreferrer" href="https://docs.google.com/document/d/1xynvQ6QYRyHmFPT-l3sUg1UhL6DeCOYh4ZwSgOegQvc/edit?usp=sharing" target="_blank">
                  <img className="logoImg resLogo" src={resumeLogo} alt = "resumeLink"/>
                </a>
              </Tooltip>
            </div>
            
          </div>
          <div className = "myImage">
            <img className="profileimage" src={profile} alt="that's me!"></img>
          </div>
        </div>
      </div>
      
    );
}

export default Home;