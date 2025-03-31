import './Experience.css';
import HTML from '../../assets/HTMLlogo.webp';
import CSS from '../../assets/CSS.png';
import JS from '../../assets/JS.png';
import ReactImg from '../../assets/React.png';
import Node from '../../assets/Node.svg';
import Django from '../../assets/DjangoLogo.png';
import Postgre from '../../assets/Postgre.png';
import Python from '../../assets/python.svg';
import Excel from '../../assets/Excel.png';
import RutgersLogo from '../../assets/Rutgers_logo.png';
import GLogicLogo from '../../assets/GLogic.jpeg';
import FindiLogo from '../../assets/FindiLogo.png';
import appLogo from '../../assets/AppScreen.png';
import CppLogo from '../../assets/Cpp.png';
import DartLogo from '../../assets/DartLogo.png';
import FlutterLogo from '../../assets/FlutterLogo.webp';
import TypescriptLogo from '../../assets/Typescript.png';
import Trailer from '../../assets/Trailer.mp4';
import gitHubLogo from '../../assets/github-mark.svg';
import PortfolioImg from '../../assets/PortfolioSnip.png';
import SVMImg from '../../assets/DvC.png';
import Pandas from '../../assets/Pandas.png';
import Numpy from '../../assets/Numpy.png';
import Scikit from '../../assets/Scikit.png';
import House from '../../assets/House.png';
import LinkIcon from '@mui/icons-material/Link';
import Tooltip from '@mui/joy/Tooltip';
import Listening from '../../assets/Listening.png';
import Glasses from '../../assets/GlassImg.png';
import KiCad from '../../assets/KiCad.png';
import Uvicorn from '../../assets/uvicorn.png';
import Firebase from '../../assets/FirebaseLogo.png';
import Maps from '../../assets/Maps.png';
import Figma from '../../assets/Figma.png';
import trello from '../../assets/trello.svg';
import { React, useEffect} from 'react';

function Experience ()
{
    const playVideoOnHover = () =>
    {
        const videoContainer = document.querySelector('.column1');
        const video = document.querySelector('.trailer');
        if ('ontouchstart' in window || navigator.maxTouchPoints) 
            {
            videoContainer.addEventListener('touchstart', function () 
            {
                if (video.paused) 
                {
                    video.play();
                } 
                else 
                {
                    video.pause();
                }
            }
        );
    } 
        else 
        {
            videoContainer.addEventListener('mouseenter', function () 
            {
                video.play();
            }
        );

            videoContainer.addEventListener('mouseleave', function () 
            {
                video.pause();
                video.currentTime = 0;
            }
        );
        }
    } 
    useEffect(
        playVideoOnHover,[]
    );
    
    return (
        <div className="experience-container">
            <div className='title-container red-color'>
            <h1 className='page-title'>
                Experience
            </h1>
            </div>
            
            <div className='professional-container'>
            <div className='accordion'>
                    <div className='accordion-header'>
                        <div className="main-head">
                            <div className="basic">
                                <h1 className="position">
                                    Software Engineer
                                </h1>
                                <p className="company">
                                    Findi
                                </p>
                                <p className="tenure">
                                    June 2024
                                </p>
                            </div>
                            <div className="company-logo-div">
                                <img className="company-logo square-logo" src={FindiLogo} alt='company-logo'/>
                            </div>
                        </div>
                        <div className='tech-stack'>
                            <Tooltip title="React Native" variant='soft' size="sm">
                                <img className='tech-logo' src={ReactImg} alt='tech-stack-logo'/>
                            </Tooltip>

                            <Tooltip title='NodeJS' variant='soft' size="sm">
                                <img className='tech-logo' src={Node} alt='tech-stack-logo'/>
                            </Tooltip>
                            
                            <Tooltip title='TypeScript' variant='soft' size="sm">
                                <img className='tech-logo' src={TypescriptLogo} alt='tech-stack-logo'/>
                            </Tooltip>
                            <Tooltip title='CSS' variant='soft' size="sm">
                                <img className='tech-logo' src={CSS} alt='tech-stack-logo'/>
                            </Tooltip>
                            <Tooltip title='Firebase' variant='soft' size="sm">
                                <img className='tech-logo' src={Firebase} alt='tech-stack-logo'/>
                            </Tooltip>
                            <Tooltip title='Figma' variant='soft' size="sm">
                                <img className='tech-logo' src={Figma} alt='tech-stack-logo'/>
                            </Tooltip>
                            <Tooltip title='Trello' variant='soft' size="sm">
                                <img className='tech-logo' src={trello} alt='tech-stack-logo'/>
                            </Tooltip>
                        </div>
                    </div>
                        <div className='accordion-content'>
                        <ul className="summary">
                            <li>Driving the development and implementation of new features for a cross-platform React Native mobile application (iOS & Android) deployed on Firebase, ensuring optimal performance and user experience within an Agile framework.</li>
                            <li>Managing feature requests and bug fixes using Trello in a Kanban setup, collaborating with design teams via Figma to ensure functionality aligns with user-centric design principles and Agile practices</li>
                            <li>Translating complex bug reports and error tickets into clear, actionable code, leveraging various React Native libraries to enhance the app's functionality and performance, and contributing to the stability and efficiency of the mobile application.</li>
                        </ul>
                    </div>
                </div>
                <div className='accordion'>
                    <div className='accordion-header'>
                        <div className="main-head">
                            <div className="basic">
                                <h1 className="position">
                                    Full Stack Developer Intern
                                </h1>
                                <p className="company">
                                    GLogic
                                </p>
                                <p className="tenure">
                                    May 2023 - June 2024
                                </p>
                            </div>
                            <div className="company-logo-div">
                                <img className="company-logo square-logo" src={GLogicLogo} alt='company-logo'/>
                            </div>
                        </div>
                        <div className='tech-stack'>
                            <Tooltip title="ReactJS" variant='soft' size="sm">
                                <img className='tech-logo' src={ReactImg} alt='tech-stack-logo'/>
                            </Tooltip>

                            <Tooltip title='NodeJS' variant='soft' size="sm">
                                <img className='tech-logo' src={Node} alt='tech-stack-logo'/>
                            </Tooltip>
                            
                            <Tooltip title='Javascript' variant='soft' size="sm">
                                <img className='tech-logo' src={JS} alt='tech-stack-logo'/>
                            </Tooltip>
                            
                            <Tooltip title='HTML' variant='soft' size="sm">
                                <img className='tech-logo' src={HTML} alt='tech-stack-logo'/>
                            </Tooltip>
                            
                            <Tooltip title='CSS' variant='soft' size="sm">
                                <img className='tech-logo' src={CSS} alt='tech-stack-logo'/>
                            </Tooltip>
                            
                            <Tooltip title='Python' variant='soft' size="sm">
                                <img className='tech-logo' src={Python} alt='tech-stack-logo'/>
                            </Tooltip>
                            
                            <Tooltip title='Django' variant='soft' size="sm">
                                <img className='tech-logo' src={Django} alt='tech-stack-logo'/>
                            </Tooltip>
                            
                            <Tooltip title='PostgreSQL' variant='soft' size="sm">
                                <img className='tech-logo' src={Postgre} alt='tech-stack-logo'/>
                            </Tooltip>
                        </div>
                    </div>
                        <div className='accordion-content'>
                        <ul className="summary">
                            <li>Deployed dynamic webpages for a GCP's App Engine based business automation platform serving healthcare clients. Utilized frameworks such as ReactJS, HTML, JS, CSS, and ExpressJS.</li>
                            <li>Implemented styles and event-driven functionality using libraries such as Material UI ensuring a seamless and responsive user experience. Managed version control and collaboration using Git/Github.</li>
                            <li>Created new REST APIs, constructed new database schema using PostgreSQL and created data routes, serializers using Django framework.</li>
                        </ul>
                    </div>
                </div>
                <div className='accordion'>
                    <div className='accordion-header'>
                        <div className="main-head">
                            <div className="basic">
                                <h1 className="position">
                                    Lead Research Extern
                                </h1>
                                <p className="company">
                                    Rutgers MBS Externship Exchange / TVD Associates
                                </p>
                                <p className="tenure">
                                    September 2022 - December 2022
                                </p>
                            </div>
                            <div className="company-logo-div">
                                <img className="company-logo" src={RutgersLogo} alt='company-logo'/>
                            </div>
                        </div>
                        <div className='tech-stack'>
                            <Tooltip title='Microsoft Excel' variant='soft' size="sm">
                                <img className='tech-logo' src={Excel} alt='tech-stack-logo'/>
                            </Tooltip>
                        </div>
                    </div>
                        <div className='accordion-content'>
                            <ul className="summary">
                                <li>Conducted research on member organizations and their involvement with the firm.</li>
                                <li>Designed a rubric and a scoring system using Microsoft Excel to rate/ score the interaction between the firm and its members. </li>
                                <li>Organized meeting sessions and built objectives for a motivating work environment. </li>
                                <li>Promptly responded to requirements and planned changes with the team.</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className='project-wrapper'>
                <div className='title-container red-color'>
                    <h1 className='page-title'>
                        Projects
                    </h1>
                </div>
                <div className='projects'>
                <div className='bento-grid'>
                        <div className='column1 col project'>
                            <video className="trailer" controls poster={appLogo}>
                                <source src={Trailer} type="video/mp4"/>
                            </video>
                            <div className='overlay video-overlay'>
                                        <div className='overlay-text'>
                                            <div className='project-title'>
                                                <h1 className="big-title-header">
                                                    R-INSIGHT Mobile App Companion 
                                                </h1>
                                                <Tooltip title='Github' variant='soft' size="sm">
                                                    <a rel="noreferrer" className='github-link' href='https://github.com/Frenzy117/RINSIGHT/tree/main/rinsight_companion_app' target='_blank'>
                                                        <img className='tech-logo sub-tech-logo gitlogo' src={gitHubLogo} alt='tech-stack-logo'/>
                                                    </a>
                                                </Tooltip>
                                            </div>
                                            <ul style={{background:'inherit'}}>
                                                <li style={{marginLeft: '0', background:'inherit'}}>
                                                    Control and Access your R-INSIGHT glasses through the iOS & Android App
                                                </li>
                                                <li style={{marginLeft: '0', background:'inherit'}}>
                                                    Simple Translation | Transcription | Navigation & Text-To-Speech UI
                                                </li>
                                            </ul>
                                            <div className='stack-div'>
                                                <h1 className="tech-stack-header" style={{background:'transparent', color:'white', fontSize:'small'}}>
                                                    Tech Stack:
                                                </h1>
                                                <div className='project-tech-stack'>
                                                    <Tooltip title='Python' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Python} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='Dart' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={DartLogo} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='Flutter' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={FlutterLogo} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                    <Tooltip title='Google Maps' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Maps} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                        </div>
                        <div className='column2 col'>
                            <div className='row1 row'>
                                <div className='portfolio-div project'>
                                    <img className="trailer-img" src={PortfolioImg} alt='thumbnail'/>
                                    <div className='overlay'>
                                        <div className='overlay-text'>
                                            <div className='project-title'>
                                                <h1 className="big-title-header" >
                                                    Personal Portfolio 
                                                </h1>
                                                <div className='tooltips'>
                                                    <Tooltip title='Github' variant='soft' size="sm">
                                                        <a className='github-link' href='https://github.com/Frenzy117/Aman_dev' target='_blank'  rel="noreferrer">
                                                            <img className='tech-logo sub-tech-logo gitlogo' src={gitHubLogo} alt='tech-stack-logo'/>
                                                        </a>
                                                    </Tooltip>
                                                    <Tooltip title='Link' variant='soft' size="sm">
                                                        <a className='github-link' href='https://aman-dev-13a2b.web.app' target='_blank' rel="noreferrer">
                                                            <LinkIcon className='tech-logo sub-tech-logo gitlogo linklogo' color='dark'/>
                                                        </a>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                            <ul style={{background:'inherit'}}>
                                                <li style={{marginLeft: '0', background:'inherit'}}>
                                                    Get to know my skills, interests, and experience!
                                                </li>
                                                <li style={{marginLeft: '0', background:'inherit'}}>
                                                    Reach out to me about any opportunities!
                                                </li>
                                            </ul>
                                            <div className='stack-div'>
                                                <h1 className="tech-stack-header" style={{background:'transparent', color:'white', fontSize:'small'}}>
                                                    Tech Stack:
                                                </h1>
                                                <div className='project-tech-stack'>
                                                    <Tooltip title='ReactJS' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={ReactImg} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='HTML' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={HTML} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='Javascript' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={JS} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                    
                                                    <Tooltip title='CSS' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={CSS} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='NodeJS' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Node} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='svm-div project'>
                                    <img className="trailer-img" src={SVMImg} alt='thumbnail'/>
                                    <div className='overlay'>
                                        <div className='overlay-text'>
                                            <div className='project-title'>
                                                <h1 className="big-title-header">
                                                    Image Classification Model
                                                </h1>
                                                <Tooltip title='Github' variant='soft' size="sm">
                                                    <a className='github-link' href='https://github.com/Frenzy117/Binary-Image-Classifier' target='_blank'  rel="noreferrer">
                                                        <img className='tech-logo sub-tech-logo gitlogo' src={gitHubLogo} alt='tech-stack-logo'/>
                                                    </a>
                                                </Tooltip>
                                            </div>
                                            <ul style={{background:'inherit'}}>
                                                <li style={{marginLeft: '0', background:'inherit', fontSize:'smaller'}}>
                                                    Support Vector Machine based model
                                                </li>
                                                <li style={{marginLeft: '0', background:'inherit', fontSize:'smaller'}}>
                                                    K Fold Cross Validation | Tested Regularization
                                                </li>
                                            </ul>
                                            <div className='stack-div'>
                                                <h1 className="tech-stack-header" style={{background:'transparent', color:'white', fontSize:'smaller'}}>
                                                    Tech Stack:
                                                </h1>
                                                <div className='project-tech-stack'>
                                                    <Tooltip title='Python' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Python} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='Pandas' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Pandas} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='Numpy' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Numpy} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='Scikit-Learn' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Scikit} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row2 row'>
                                <div className='glasses-div project'>
                                    <img className="trailer-img bento-img" src={Glasses} alt='thumbnail'/>
                                    <div className='overlay'>
                                        <div className='overlay-text'>
                                            <div className='project-title'>
                                                <h1 className="big-title-header">
                                                    R-INSIGHT
                                                </h1>
                                                <Tooltip title='Github' variant='soft' size="sm">
                                                    <a className='github-link' href='https://github.com/aezrapour/RINSIGHT' target='_blank'  rel="noreferrer">
                                                        <img className='tech-logo sub-tech-logo gitlogo' src={gitHubLogo} alt='tech-stack-logo'/>
                                                    </a>
                                                </Tooltip>
                                            </div>
                                            <ul style={{background:'inherit'}}>
                                                <li style={{marginLeft: '0', background:'inherit', fontSize:'small'}}>
                                                    Smart Glasses for those hard of hearing
                                                </li>
                                                <li style={{marginLeft: '0', background:'inherit', fontSize:'small'}}>
                                                    Lightning Fast Real-Time Transcription | Translation | Text-To-Speech | Google Maps Navigation on Display
                                                </li>
                                                <li style={{marginLeft: '0', background:'inherit', fontSize:'small'}}>
                                                    Mobile App Companion for both iOS & Android
                                                </li>
                                            </ul>
                                            <div className='stack-div'>
                                                <h1 className="tech-stack-header" style={{background:'transparent', color:'white', fontSize:'small'}}>
                                                    Tech Stack:
                                                </h1>
                                                <div className='project-tech-stack'>
                                                    <Tooltip title='C++' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={CppLogo} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                    <Tooltip title='KiCad' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={KiCad} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                    <Tooltip title='Uvicorn' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Uvicorn} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row3 row'>
                                <div className='house-div project'>
                                    <img className="trailer-img" src={House} alt='thumbnail'/>
                                    <div className='overlay'>
                                        <div className='overlay-text'>
                                            <div className='project-title'>
                                                <h1 className="big-title-header">
                                                    House Price Prediction Model
                                                </h1>
                                                <Tooltip title='Github' variant='soft' size="sm">
                                                    <a className='github-link' href='https://github.com/Frenzy117/House-Price-Prediction' target='_blank'  rel="noreferrer">
                                                        <img className='tech-logo sub-tech-logo gitlogo' src={gitHubLogo} alt='tech-stack-logo'/>
                                                    </a>
                                                </Tooltip>
                                            </div>
                                            <ul style={{background:'inherit'}}>
                                                <li style={{marginLeft: '0', background:'inherit', fontSize:'smaller'}}>
                                                    Uses Linear Regression & Ridge Regression
                                                </li>
                                                <li style={{marginLeft: '0', background:'inherit', fontSize:'smaller'}}>
                                                    R2 score of 0.7 on both models
                                                </li>
                                            </ul>
                                            <div className='stack-div'>
                                                <h1 className="tech-stack-header" style={{background:'transparent', color:'white', fontSize:'smaller'}}>
                                                    Tech Stack:
                                                </h1>
                                                <div className='project-tech-stack'>
                                                    <Tooltip title='Python' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Python} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='Pandas' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Pandas} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='Numpy' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Numpy} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='Scikit-Learn' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Scikit} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='listening-div project'>
                                    <img className="trailer-img" src={Listening} alt='thumbnail'/>
                                    <div className='overlay'>
                                        <div className='overlay-text'>
                                            <div className='project-title'>
                                                <h1 className="big-title-header" style={{background:'inherit', fontSize:'large'}}>
                                                    RU Listening
                                                </h1>
                                                <Tooltip title='Github' variant='soft' size="sm">
                                                    <a className='github-link' href='https://github.com/Frenzy117/RU-Listening' target='_blank'  rel="noreferrer">
                                                        <img className='tech-logo sub-tech-logo gitlogo' src={gitHubLogo} alt='tech-stack-logo'/>
                                                    </a>
                                                </Tooltip>
                                            </div>
                                            <ul style={{background:'inherit'}}>
                                                <li style={{marginLeft: '0', background:'inherit', fontSize:'small'}}>
                                                    Audiobook Streaming Web Application
                                                </li>
                                                <li style={{marginLeft: '0', background:'inherit', fontSize:'small'}}>
                                                    Listen, Wish for, Review & Rate your favorite audiobook out of 100s of genres
                                                </li>
                                            </ul>
                                            <div className='stack-div'>
                                                <h1 className="tech-stack-header" style={{background:'transparent', color:'white', fontSize:'small'}}>
                                                    Tech Stack:
                                                </h1>
                                                <div className='project-tech-stack'>
                                                    <Tooltip title='HTML' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={HTML} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='Javascript' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={JS} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                    
                                                    <Tooltip title='CSS' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={CSS} alt='tech-stack-logo'/>
                                                    </Tooltip>

                                                    <Tooltip title='NodeJS' variant='soft' size="sm">
                                                        <img className='tech-logo sub-tech-logo' src={Node} alt='tech-stack-logo'/>
                                                    </Tooltip>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
/*
R-INSIGHT (Glasses)
R-INSIGHT Mobile App
Personal Portfolio
DvC Classifier
House Price Prediction Model
RU-Listening
*/
export default Experience;