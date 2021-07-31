import React from "react";
import { formatTime } from "../helpers";
import "./styles.css";

const TimeDisplay = ({ time, status, progress }) => {
  document.title = `(${formatTime(time)}) Pomodoro`;

  const radius = 200;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="TimeDisplay">
      <svg width="100%" viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
        <circle
          stroke="#e8a87c"
          fill="#fff"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#85dcb"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div>
        <h1 fontWeight={500}>{formatTime(time)}</h1>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default TimeDisplay;
