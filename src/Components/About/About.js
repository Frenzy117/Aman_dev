import React, { useState } from "react";
import './About.css';
import RutgersLogo from '../../assets/Rutgers_logo.png';
import UdemyLogo from '../../assets/Udemy_logo.png';
import LinkedInLogo from '../../assets/iconmonstr-linkedin-3.svg';
import ProgressBar from "../ProgressBar/ProgressBar";

const About = () =>
{
    const [skill] = useState({
        Python: 100,
        Java: 91,
        Javascript: 93,
        HTML: 94,
        CSS: 86,
        Node: 76,
        React: 79,
        Django: 70,
        C: 74,
        GCP: 82,
        DBeaver: 65,
        PostgreSQL: 72,
        Numpy: 85,
        Express: 77,
        Agile: 69,
        Scrum: 67,
        Kanban: 70,
        Scikit: 83,
        Git: 90,
        RISCV: 86,
        POSIX: 79,
        AWS: 62,
        MATLAB: 86,
        Verilog: 80,
    })

    return (
        <section className="about_container">
            <div className="title-container">
                <p className="page-title">
                    <span>About </span>
                    <span className="red-color">Me</span>
                    </p>
            </div>

            
            <div className="timeline-container">
                <div className="timelines">
                    <div className="timeline">
                        <div className="timeline-date">
                        2020 - 2024
                        </div>
                        <div className="timeline-content">
                            <div className="header">
                                <div className="place">
                                    Rutgers University
                                </div>
                                <div className="img-div">
                                    <img className="logo" src= {RutgersLogo} alt="Rutgers Logo"/>
                                </div>
                                
                            </div>
                            <div className="location">
                            New Brunswick, NJ
                            </div>
                            <div className="Description">
                                Bachelor of Science: Computer Engineering
                                <br/>
                                Minor: Computer Science
                                
                            </div>
                        </div>
                    </div>
                    <div className="timeline">
                        <div className="timeline-date">
                        January 2024
                        </div>
                        <div className="timeline-content">
                            <div className="header">
                                <div className="place">
                                    Google Cloud Platform
                                </div>
                                <div className="img-div">
                                    <img className="logo" src= {UdemyLogo} alt="Udemy Logo"/>
                                </div>
                                
                            </div>
                            <div className="location">
                            Udemy
                            </div>
                            <div className="Description">
                                Certification
                                <br/>
                                In-depth exploration of Google Cloud Platform Services.
                            </div>
                        </div>
                    </div>
                    <div className="timeline">
                        <div className="timeline-date">
                        January 2024
                        </div>
                        <div className="timeline-content">
                            <div className="header">
                                <div className="place">
                                    Agile Software Development
                                </div>
                                <div className="img-div">
                                    <img className="logo" src= {LinkedInLogo} alt="LinkedIn Logo"/>
                                </div>
                                
                            </div>
                            <div className="location">
                            LinkedIn Learning
                            </div>
                            <div className="Description">
                                Certification
                                <br/>
                                Agile Development, Scrum, Kanban
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="skills-container">
                <div className="tech-container">
                    <div className="technical"> 
                        <ProgressBar 
                            progress={skill.Python}
                            text="Python"
                        />
                        <ProgressBar 
                            progress={skill.Java}
                            text="Java"
                        />
                        <ProgressBar 
                            progress={skill.Javascript}
                            text="Javascript"
                        />
                        <ProgressBar 
                            progress={skill.HTML}
                            text="HTML"
                        />
                        <ProgressBar 
                            progress={skill.CSS}
                            text="CSS"
                        />
                        <ProgressBar 
                            progress={skill.C}
                            text="C/C++"
                        />
                        <ProgressBar 
                            progress={skill.AWS}
                            text="AWS"
                        />
                        <ProgressBar
                            progress={skill.GCP}
                            text="Google Cloud Platform"
                        />
                        <ProgressBar 
                            progress={skill.React}
                            text="React"
                        />
                        <ProgressBar 
                            progress={skill.Express}
                            text="Express"
                        />
                        <ProgressBar 
                            progress={skill.POSIX}
                            text="POSIX/Unix"
                        />  
                    </div>
                    <div className="technical">
                        <ProgressBar 
                            progress={skill.Numpy}
                            text="Pandas & Numpy"
                        />
                        <ProgressBar 
                            progress={skill.Django}
                            text="Django"
                        />
                        <ProgressBar 
                            progress={skill.Scrum}
                            text="ScrumBan"
                        />
                        <ProgressBar 
                            progress={skill.Agile}
                            text="Agile"
                        />
                        <ProgressBar 
                            progress={skill.PostgreSQL}
                            text="MySQL/ PostgreSQL"
                        />
                        <ProgressBar 
                            progress={skill.Kanban}
                            text="Kanban"
                        />
                        <ProgressBar 
                            progress={skill.Scikit}
                            text="Scikit-Learning"
                        />
                        <ProgressBar 
                            progress={skill.Git}
                            text="Git/Github"
                        />
                        <ProgressBar 
                            progress={skill.RISCV}
                            text="RISC-V"
                        />
                        <ProgressBar 
                            progress={skill.Verilog}
                            text="Verilog HDL"
                        />
                    </div>
                </div>
            </div>


            <div className="projects">

            </div>


        </section>
    );
}
export default About;