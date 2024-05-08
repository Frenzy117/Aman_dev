import React from "react";
import './Contact.css';
import PhoneIcon from '@mui/icons-material/Phone';
import Mail from '../../assets/Mail.svg';
import Location from '../../assets/Location.svg';
import gitHubLogo from '../../assets/github-mark.svg';
import linkedInLogo from '../../assets/iconmonstr-linkedin-3.svg';
import resumeLogo from '../../assets/resLogo.png';




const Contact = () => 
{
    const email1 = "amansaxena2002@gmail.com";
    const email2 = "aas423@scarletmail.rutgers.edu";
    const location = "Edison, NJ";

    return (
        <section className="contact-container">
            <div className="title-container">
                <h1 className="main-title">
                    <span>Let's </span> <span className="red-color">Talk</span>
                </h1>
            </div>
            <div className="contact">
                <div className="socials">
                    <div className="contactindiv">
                        <div className="logosDiv">
                            <img className="thelogo" src={Location} alt="location"/>
                            <p className="info-title red-color"> Location </p>
                        </div>
                        <p className="info">
                            {location}
                        </p>
                    </div>
                    <div className="contactindiv">
                        <div className="logosDiv">
                            <img className="thelogo" src={Mail} alt="My Gmail"/>
                            <span className="info-title red-color"> Email (personal) </span>
                        </div>
                        <p className="info">
                            {email1}
                        </p>
                    </div>
                    <div className="contactindiv">
                        <div className="logosDiv">
                            <img className="thelogo" src= {Mail} alt="My Gmail"/>
                            <span className="info-title red-color"> Email (academic) </span>
                        </div>
                        <p className="info">
                            {email2}
                        </p>
                    </div>
                    <div className="contactindiv">
                        <div className="logosDiv">
                            <PhoneIcon className="thelogo"/>
                            <span className="info-title red-color"> Phone Number </span>
                        </div>
                        <p className="info">
                            +1 (908)-612-5822
                        </p>
                    </div>
                    <div className="linksdiv">
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
                <div className="message">
                    <p className="title">
                        <span>Send me a </span> <span className="red-color">Message</span>
                    </p>
                    <input 
                    className="name_box text_field"
                    type="text"
                    placeholder="Your Name"
                    />
                    <input
                    className="text_field email_box"
                    type="email"
                    placeholder="Your email"
                    />
                    <textarea
                    className="message_box text_field"
                    cols="20" 
                    rows="5"
                    maxLength= {1000}
                    type="text"
                    placeholder="Your message..."
                    />
                    <button className="submit">
                        Send
                    </button>
                </div>
            </div>
            
        </section>
    )
}

export default Contact;