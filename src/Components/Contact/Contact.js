import {React, useState} from "react";
import emailjs from 'emailjs-com';
import './Contact.css';
import PhoneIcon from '@mui/icons-material/Phone';
import Mail from '../../assets/Mail.svg';
import Location from '../../assets/Location.svg';
import gitHubLogo from '../../assets/github-mark.svg';
import linkedInLogo from '../../assets/iconmonstr-linkedin-3.svg';
import resumeLogo from '../../assets/resLogo.png';
import Alert from '@mui/material/Alert';




const Contact = () => 
{
    const email1 = "amansaxena2002@gmail.com";
    const email2 = "aas423@scarletmail.rutgers.edu";
    const location = "Edison, NJ";
    const [alert, setAlert] = useState(null);
    const [emailBody, setEmailBody] = useState({
        name: "",
        email: "",
        message: ""
      });
    const handleChange = (e) => {
        setEmailBody({ ...emailBody, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) =>
        {
            e.preventDefault();
            emailjs.sendForm('service_nfrs5pu','template_4gxh2hr',e.target,'hORBBkuMiTeAilrQA').then((result) =>
            {
                console.log(result.text);
                setEmailBody({
                    name: "",
                    email: "",
                    message: ""
                });
                setAlert({ type: 'success', message: 'Message sent successfully!' });
            }, (error) =>
            {
                console.log(error.text);
                setAlert({ type: 'error', message: 'Failed to send the message. Please try again later.' });
            });
        };



    return (
        <section className="contact-container">
            {
                alert && 
                (
                    <Alert severity={alert.type} className="alertDialog" variant="filled" onMouseOver={() => setAlert(null)} style={{transition:'ease 0.2s'}}>
                        {alert.message}
                    </Alert>
                )
                
            }
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
                            <img className="contactLogoImg" src={gitHubLogo} alt="gitHubLink"/>
                        </a>
                        <a className="tool" rel ="noreferrer" href="https://www.linkedin.com/in/aman-saxena-ba000b212/" target="_blank">
                            <img className = "contactLogoImg" src={linkedInLogo} alt = "linkedinLink"/>
                        </a>
                        <a className="tool" rel ="noreferrer" href="https://www.dropbox.com/scl/fi/7mxmm8ynpqu012blvxw89/Aman-Saxena_02_07_2024.pdf?rlkey=h6gy9wwgsrzjbb7r0gn64x3a9&dl=0" target="_blank">
                            <img className="contactLogoImg" src={resumeLogo} alt = "resumeLink"/>
                        </a>
                    </div>
                </div>
                <form className="message" onSubmit={handleSubmit}>
                    <p className="title">
                        <span>Send me a </span> <span className="red-color">Message</span>
                    </p>
                    <input 
                    className="name_box text_field"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    id="name"
                    required
                    value={emailBody.name}
                    onChange={handleChange}
                    />
                    <input
                    className="text_field email_box"
                    type="email"
                    placeholder="Your email"
                    name="email"
                    id="email"
                    required
                    value={emailBody.email}
                    onChange={handleChange}
                    />
                    <textarea
                    className="message_box text_field"
                    cols="20" 
                    rows="5"
                    maxLength= {1000}
                    name="message"
                    id="message"
                    required
                    value={emailBody.message}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your message..."
                    />
                    <button className="submit" type="submit">
                        Send
                    </button>
                </form>
            </div>
            
        </section>
    )
}

export default Contact;