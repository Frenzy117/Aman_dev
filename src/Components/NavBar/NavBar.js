import React from "react";
import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';

function NavBar() {
  return (
    <Nav variant="pills" defaultActiveKey="/" class="nav_bar" >
      <Nav.Item className="item">
        <Nav.Link className = "link" href="/">
          <HomeIcon style={{backgroundColor: 'white' }}/>
          <span className="tooltip">Home</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="item">
        <Nav.Link className = "link" href="/about">
          <PersonIcon style={{backgroundColor: 'white'}}/>
          <span className="tooltip">About Me</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="item">
        <Nav.Link className = "link" href="/experience">
          <WorkIcon style={{backgroundColor: 'white'}}/>
          <span className="tooltip">Experience</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="item">
        <Nav.Link className = "link" href="/contact">
          <ChatIcon style={{backgroundColor: 'white'}}/>  
          <span className="tooltip">Let's Connect!</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>

  );
}

export default NavBar;