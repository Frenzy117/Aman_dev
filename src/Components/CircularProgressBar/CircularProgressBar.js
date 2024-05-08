import React from "react";
import './CircularProgressBar.css';

const CircularProgressBar = ({circleWidth,progress,text}) =>
{
    const radius = 85;
    const dashArray = radius * 2 * Math.PI;
    const dashOffset = dashArray - (dashArray * progress) / 100;
    return (
        <div className="parent">
            <svg 
                width={circleWidth}
                height={circleWidth}
                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            >
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="10%" stop-color="#D9381E"/>
                        <stop offset="50%" stop-color="#EC9F05"/>
                        <stop offset="100%" stop-color="#FFFFFF"/>
                    </linearGradient>
                </defs>
                <circle
                    cx={circleWidth/2}
                    cy={circleWidth/2}
                    strokeWidth="15px"
                    r={radius}
                    className="circle-background"
                />
                <circle
                    cx={circleWidth/2}
                    cy={circleWidth/2}
                    strokeWidth="15px"
                    r={radius}
                    className="circle-progress"
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }}
                    transform={`rotate(-90 ${circleWidth/2} ${circleWidth/2})`}
                    stroke="url(#gradient)"
                />
                <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className="circle-text">{text}</text>
            </svg>
        </div>
    );
}

export default CircularProgressBar;