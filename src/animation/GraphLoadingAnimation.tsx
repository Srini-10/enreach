import React, { useState, useEffect } from "react";

const GraphLoadingAnimation: React.FC = () => {
  const [percentage, setPercentage] = useState(32);

  // Simulate the loading percentage increase over time, looping from 0 to 100
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black bg-opacity-90 fixed top-0 left-0 z-50">
      {/* Main SVG with grid and graph */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 180 100"
        preserveAspectRatio="none"
        className="bg-neutral-950"
      >
        {/* Grid lines */}
        {[...Array(20)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={(i + 1) * 10}
            y1="0"
            x2={(i + 1) * 10}
            y2="100" /* Align with viewBox height */
            stroke="#404040"
            strokeWidth="0.25"
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={(i + 1) * 10}
            x2="200" /* Align with viewBox width */
            y2={(i + 1) * 10}
            stroke="#404040"
            strokeWidth="0.25"
          />
        ))}

        {/* Graph line */}
        <path
          d="M0,90 L20,80 L40,60 L80,30 L120,50 L160,20 L200,10"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1"
        />

        {/* Step animation */}
        <circle
          cx="0"
          cy="90"
          r="2.5"
          fill="#f59e0b"
          className="animate-step"
          style={{ width: "14px", height: "14px" }}
        />

        {/* Gradient for fill area */}
        <path
          d="M0,90 L20,80 L40,60 L80,30 L120,50 L160,20 L200,10 L200,100 L0,100 Z"
          fill="url(#fill-gradient)"
        />
        <defs>
          <linearGradient id="fill-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Loading Indicator */}
      <div className="absolute w-full h-full flex justify-center items-end">
        <p className="chakra-medium text-gray-300 text-md mb-7 flex flex-col justify-end gap-2 z-10">
          Rendering Enreach strategies...
          <span className="loader"></span>
        </p>
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Animated Circle */}
      <div className="absolute top-8 left-8">
        <svg width="70" height="70" viewBox="0 0 32 32" className="rotate-90">
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3.5"
            strokeDasharray="87.92"
            strokeDashoffset={87.92 - (percentage / 100) * 87.92} // Sync pie chart with percentage
            className="animate-pie"
          />
          {/* Percentage Text in the center */}
          <text
            x="16" // X coordinate is the center
            y="16" // Y coordinate is the center
            textAnchor="middle"
            stroke="#f59e0b"
            strokeWidth="0.5px"
            dy=".3em"
            fontSize="8"
            fontWeight="bold"
            fill="white"
            transform="rotate(-90 16 16)"
          >
            {percentage}%
          </text>
        </svg>
      </div>

      <style>
        {`
          /* Animation for the circle loading effect */
          @keyframes fillAnimation {
            0% {
              stroke: #f59e0b;
              stroke-dashoffset: 87.92;
            }
            25% {
              stroke: #ffffff;
              stroke-dashoffset: 65;
            }
            50% {
              stroke: #525252; 
              stroke-dashoffset: 43.5;
            }
            75% {
              stroke: #f59e0b; 
              stroke-dashoffset: 21;
            }
            100% {
              stroke: #ffffff;
              stroke-dashoffset: 0;
            }
          }

          .animate-pie {
            animation: fillAnimation 4s ease-in-out infinite;
          }

          /* Animation for the arrow step */
          @keyframes step {
            0% { transform: translate(0px, 0px); }
            16% { transform: translate(20px, -10px); }
            32% { transform: translate(40px, -30px); }
            48% { transform: translate(80px, -60px); }
            64% { transform: translate(120px, -40px); }
            80% { transform: translate(160px, -70px); }
            100% { transform: translate(200px, -80px); }
          }

          .animate-step {
            animation: step 2s ease-in-out infinite;
            transform-origin: center;
          }
        `}
      </style>
    </div>
  );
};

export default GraphLoadingAnimation;
