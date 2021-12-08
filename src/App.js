import './App.css';
import { React, useState, useEffect } from 'react'
import speedNumbers from './image.png';

function App() {
  const [count, setCount] = useState(0); // Initialising Count value
  // let countArc = count + 50;
  var arclength = Math.PI * 50 * (360 - count) / 180.0; //Calculating Arc Length
  useEffect(() => {
    const interval = setInterval(() => {
      let num = count + 1;
      if (num > 220) {
        setCount(0);
      } else {
        setCount(num);
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <div className="App">
        <div className="mainCircle">
          <svg className="arcCurve" width="455" height="455" viewBox="0 0 120 120">
            {/* (Rotated 90° CCW to put start point is at base.) */}
            <circle cx="60" cy="60"
              r="42" fill="none" stroke="#EE9737"
              stroke-width="2.5"
              stroke-dashoffset={arclength}
              stroke-dasharray="314.16"
              transform="rotate(-224 60 60)"
              stroke-linecap="round"
            />
          </svg>
          <svg style={{position:'absolute'}}width="300" height="261" viewBox="0 0 300 261" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="260.677" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              </pattern>
              <image id="image0_6_9" width="600" height="522" />
            </defs>
          </svg>

          {/* <img src={speedNumbers} /> */}
          <div className="innerCircle">
            <div className="innerText">
              {count}
            </div>
            <div className="kmhText">
              kmh
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
