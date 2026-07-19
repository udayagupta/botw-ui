import React from 'react';

const BaseHeart = ({ size = 20, amount = 1, color = "#F1362F", ...props }) => {
  // The full heart shape (used for the empty background and the 100% fill)
  const fullPath = "M24.6638 15.0483L15 24L4.95507 13.8493C2.21011 11.0755 2.21011 6.60873 4.95507 3.83488C7.0445 1.72346 10.4555 1.72347 12.545 3.83489L15 6.31579L16.964 4.33112C19.2758 1.99498 23.0872 2.12179 25.2386 4.60642C27.8937 7.67271 27.6394 12.2919 24.6638 15.0483Z";
  
  // The 75% fill shape
  const path75 = "M15.0001 6.31573L12.5451 3.83485C10.4557 1.72343 7.04464 1.72342 4.95521 3.83485C2.21025 6.6087 2.21024 11.0754 4.9552 13.8493L15.0001 24L24.664 15.0482C25.4231 14.345 26.0051 13.5205 26.4069 12.6315H15.0001V6.31573Z";
  
  // The 25% fill shape
  const path25 = "M15.0001 6.31573V12.6315H3.9872C2.26106 9.89126 2.58373 6.23128 4.95521 3.83485C7.04464 1.72342 10.4557 1.72343 12.5451 3.83485L15.0001 6.31573Z";

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 25.7 22.3" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g transform="translate(-2.21, -1.72)">
        {/* Always render the dark empty container */}
        <path d={fullPath} fill="#363930" />
        
        {/* Conditionally render the colored overlay based on the amount */}
        {amount === 1 && <path d={fullPath} fill={color} />}
        {amount === 0.75 && <path fillRule="evenodd" clipRule="evenodd" d={path75} fill={color} />}
        {amount === 0.25 && <path fillRule="evenodd" clipRule="evenodd" d={path25} fill={color} />}
      </g>
    </svg>
  );
};

export const HeartIcon = ({ size, amount, ...props }) => {
  return <BaseHeart size={size} amount={amount} color="#F1362F" {...props} />;
};

export const YellowHeartIcon = ({ size, amount, ...props }) => {
  return <BaseHeart size={size} amount={amount} color="#FCE83A" {...props} />;
};