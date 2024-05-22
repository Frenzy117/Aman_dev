import React  from "react";
import './About.css';
import RutgersLogo from '../../assets/Rutgers_logo.png';
import UdemyLogo from '../../assets/Udemy.png';
import LinkedInLogo from '../../assets/iconmonstr-linkedin-3.svg';
import { ConfigProvider, Progress } from "antd";

const About = () =>
{
    const twoColors = {
        '0%': '#33401c',
        '100%': '#33401c',
      };
    return (
        <section className="about_container">
            <div className="title-container">
                <p className="page-title">
                    <span>About </span>
                    <span className="red-color">Me</span>
                </p>
            </div>

            
            <div className="container">
                <div className="education-tab">
                    <div className="header">
                        <div className="basic">
                            <h1 className="location">
                                Rutgers University
                            </h1>
                            <h2 className="duration">
                                2020-2024
                            </h2>
                            <h2 className="fields">
                                Bachelor of Science: Computer Engineering 
                            </h2>
                            <h2 className="fields">
                                Minor: Computer Science
                            </h2>
                            
                        </div>
                        <div className="education-logo">
                            <img className="logo-ed-div" src={RutgersLogo} alt="Rutgers"/>
                        </div>
                    </div>
                    <div className="details">
                        <ul className="list">
                            <li className="detail">
                                (2023-2024) Rutgers Electrical and Computer Engineering Honor Society 
                            </li>
                            <li className="detail">
                                Cumulative GPA: 3.64
                            </li>
                            <li className="detail">
                                Dean's List (2020-2023)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="education-tab">
                    <div className="header">
                        <div className="basic">
                            <h1 className="location">
                                LinkedIn Learning
                            </h1>
                            <h2 className="duration">
                                January 2024
                            </h2>
                            <h2 className="fields">
                                Agile Software Development 
                            </h2>
                            <h2 className="fields">
                                Scrum and Kanban Methodology
                            </h2>
                            
                        </div>
                        <div className="education-logo">
                            <img className="logo-ed-div" src={LinkedInLogo} alt="LinkedIn"/>
                        </div>
                    </div>
                </div>
                <div className="education-tab">
                    <div className="header">
                        <div className="basic">
                            <h1 className="location">
                                Udemy
                            </h1>
                            <h2 className="duration">
                                January 2024
                            </h2>
                            <h2 className="fields">
                                Google Cloud Platform - Digital Cloud Leader 
                            </h2>
                            <h2 className="fields">
                                
                            </h2>
                            
                        </div>
                        <div className="education-logo">
                            <img className="logo-ed-div" src={UdemyLogo} alt="Udemy"/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="skills-container">
                <div className="tech-container">
                    <p className="sub-title">
                        <span className="red-color">Tech </span>
                        <span >Stack</span>
                    </p>
                    <div className="web-dev">
                        <div className="frontend"> 
                            <div className="development-titles">
                                <span className="dev-container red-color">
                                    Front End  </span>
                            </div>
                            <div className="carousel">
                                <div className="slider">
                                    <section className="slide">
                                    <ConfigProvider
                                        theme={{
                                            components: {
                                            Progress: {
                                                circleTextFontSize: '0.75em'
                                            },
                                            },
                                        }}
                                        >
                                            <Progress className= "Python bar" type="circle" percent={85} format= {()=> 'Python'} size={100} strokeColor={twoColors} circle/>
                                            <Progress className= "Java bar" type="circle" percent={60} format= {()=> 'Java' } size={100} strokeColor={twoColors}/>
                                            <Progress className= "React bar" type="circle" percent={79} format= {()=> 'React' } size={100} strokeColor={twoColors}/>
                                        </ConfigProvider>
                                    </section>
                                    <section className="slide">
                                        <ConfigProvider
                                            theme={{
                                                components: {
                                                Progress: {
                                                    circleTextFontSize: '0.75em'
                                                },
                                                },
                                            }}
                                        >
                                            <Progress className= "Javascript bar" type="circle" percent={92} format= {()=> 'Javascript'} size={100} strokeColor={twoColors}/>
                                            <Progress className= "HTML/CSS bar" type="circle"  percent={94} format= {()=> 'HTML/CSS' } size={100} strokeColor={twoColors}/>
                                            <Progress className= "Dart bar" type="circle" percent={74} format= {()=> 'Dart'} size={100} strokeColor={twoColors}/>
                                        </ConfigProvider>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="backend">
                            <div className="development-titles">
                                <span className="dev-container red-color">
                                    Back End  </span>
                            </div>
                            <div className="carousel">
                                <div className="slider">
                                    <section className="slide">
                                        <ConfigProvider
                                            theme={{
                                                components: {
                                                Progress: {
                                                    circleTextFontSize: '0.75em'
                                                },
                                                },
                                            }}
                                        >
                                            <Progress className= "SQL bar" type="circle" percent={72} format= {()=> 'SQL'} size={100} strokeColor={twoColors}/>
                                            <Progress className= "Django bar" type="circle" percent={80} format= {()=> 'Django'} size={100} strokeColor={twoColors}/>
                                            <Progress className= "DBeaver bar" type="circle" percent={69} format= {()=> 'DBeaver'} size={100} strokeColor={twoColors}/>
                                        </ConfigProvider>
                                    </section>
                                    <section className="slide">
                                        <ConfigProvider
                                            theme={{
                                                components: {
                                                Progress: {
                                                    circleTextFontSize: '0.75em'
                                                },
                                                },
                                            }}
                                        >
                                            <Progress className= "GCP bar" type="circle" percent={77} format= {()=> 'GCP'} size={100} strokeColor={twoColors}/>
                                            <Progress className= "Express bar" type="circle" percent={79} format= {()=> 'Express'} size={100} strokeColor={twoColors}/>
                                            <Progress className= "Node bar" type="circle" percent={83} format= {()=> 'Node'}  size={100} strokeColor={twoColors}/>
                                        </ConfigProvider>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="computer-div">
                        <div className="development-titles">
                            <span className="dev-container red-color">
                                Computer Engineering</span>
                        </div>
                        <div className="carousel">
                            <div className="slider">
                                <section className="slide">
                                <ConfigProvider
                                            theme={{
                                                components: {
                                                Progress: {
                                                    circleTextFontSize: '0.75em'
                                                },
                                                },
                                            }}
                                        >
                                    <Progress className= "C/C++ bar" type="circle" percent={90} format= {()=> 'C/C++'} size={100} strokeColor={twoColors}/>
                                    <Progress className= "Linux bar" type="circle" percent={83} format= {()=> 'Linux'}  size={100} strokeColor={twoColors}/>
                                    <Progress className= "Verilog bar" type="circle" percent={81} format= {()=> 'Verilog'} size={100} strokeColor={twoColors}/>
                                    </ConfigProvider>
                                </section>
                                <section className="slide">
                                <ConfigProvider
                                            theme={{
                                                components: {
                                                Progress: {
                                                    circleTextFontSize: '0.75em'
                                                },
                                                },
                                            }}
                                        >
                                    <Progress className= "MATLAB bar" type="circle" percent={85} format= {()=> 'MATLAB'} size={100} strokeColor={twoColors}/>
                                    <Progress className= "RISC-V bar" type="circle" percent={90} format= {()=> 'RISC-V'} size={100} strokeColor={twoColors}/>
                                    <Progress className= "x86-64 bar" type="circle" percent={77} format= {()=> 'x86-64'} size={100} strokeColor={twoColors}/>
                                    </ConfigProvider>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;