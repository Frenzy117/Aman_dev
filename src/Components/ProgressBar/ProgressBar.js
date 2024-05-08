import React from 'react';
import '../../Components/ProgressBar/ProgressBar.css';
 
const ProgressBar = ({progress, text}) => {
    
    const Parentdiv = {
        height: 30,
        width: '85%',
        borderRadius: 40,
        margin: 20,
      }
     
      const Childdiv = {
        height: '70%',
        width: `${progress}%`,
       borderRadius:40,
        textAlign: 'left'
      }
     
      const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 400,
        backgroundColor: 'transparent'
      }
       
    return (
    <div className="parentDiv" style={Parentdiv}>
      <div className="childDiv" style={Childdiv}>
        <span style={progresstext}>{`${text}`}</span>
      </div>
    </div>
    )
}
 
export default ProgressBar;