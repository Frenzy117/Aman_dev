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

function Experience ()
{
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
                                    Full Stack Developer Intern
                                </h1>
                                <p className="company">
                                    GLogic
                                </p>
                                <p className="tenure">
                                    May 2023 - Present
                                </p>
                            </div>
                            <div className="company-logo-div">
                                <img className="company-logo square-logo" src={GLogicLogo} alt='company-logo'/>
                            </div>
                        </div>
                        <div className='tech-stack'>
                            <img className='tech-logo' src={ReactImg} alt='tech-stack-logo'/>
                            <img className='tech-logo' src={Node} alt='tech-stack-logo'/>
                            <img className='tech-logo' src={JS} alt='tech-stack-logo'/>
                            <img className='tech-logo' src={HTML} alt='tech-stack-logo'/>
                            <img className='tech-logo' src={CSS} alt='tech-stack-logo'/>
                            <img className='tech-logo' src={Python} alt='tech-stack-logo'/>
                            <img className='tech-logo' src={Django} alt='tech-stack-logo'/>
                            <img className='tech-logo' src={Postgre} alt='tech-stack-logo'/>
                        </div>
                    </div>
                        <div className='accordion-content'>
                        <ul className="summary">
                            <li>Deployed fully functional multi-input forms, lookup tables, and webpages for a business automation platform using React, Node, and Django. </li>
                            <li>Applied styles and event-driven functionality using HTML, CSS, and Javascript.  Working on the development through Google Cloud Platform and Express JS.</li>
                            <li>Created new REST APIs using Django alongside formatting user input forms and creating new database schemas through DBeaver and PGAdmin.</li>
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
                            <img className='tech-logo' src={Excel} alt='tech-stack-logo'/>
                        </div>
                    </div>
                        <div className='accordion-content'>
                            <ul className="summary">
                                <li>Conducted research on member organizations and their involvement with the firm.</li>
                                <li>Designed a rubric and a scoring system using Microsoft Excel to rate/ score the interaction between the firm and its members. </li>
                                <li>Organized meeting sessions and built objectives for a collective and motivating work environment for the team. </li>
                                <li>Promptly responded to requirements and planned changes to existing developments in collaboration with the team.</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;