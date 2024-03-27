import { useState, useEffect } from "react";

const CircularBar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = ((100 - 20) / 100) * 440; // 440 is the circumference of the circle
    setOffset(progressOffset);
  }, []);

  const circleWidth = "150";
  const percentage = 30;
  const radius = 60;

  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="circular-progress-bar flex flex-col justify-center items-center">
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          className="circle-background"
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="10px"
          r={radius}
        />

        <circle
          className="circle-progress"
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="10px"
          r={radius}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text"
        >
          {percentage}%
        </text>
      </svg>
      <p className="text-[12px]">{percentage}% plagiarism detected</p>
    </div>
  );
};

export default CircularBar;
