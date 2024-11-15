import React from "react";

const DotGroup = ({ count }) => {
  const dots = Array.from({ length: count });
  return (
    <span className="inline-flex space-x-1 ml-2">
      {dots.map((_, index) => (
        <span
          key={index}
          className={`dot w-1.5 h-1.5 bg-amber-500 rounded-full animate-dot`}
          style={{ animationDelay: `${index * 0.2}s` }}
        ></span>
      ))}
    </span>
  );
};

export default DotGroup;
