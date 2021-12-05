import './App.css';
import { React, useState, useEffect } from 'react'
import img from './image.png';

function App() {
  const [count, setCount] = useState(0);
  // let countArc = count + 50;
  var arclen = Math.PI * 50 * (360 - count) / 180.0;
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
          <svg className="svg" width="455" height="455" viewBox="0 0 120 120">
          {/* <!-- Circle element of radius 50 units. --> */}
          {/* <!-- (Rotated 90° CCW to put start point is at top.) --> */}
          <circle id="c" cx="60" cy="60"
            r="50" fill="none" stroke="#EE9737"
            stroke-width="2.5"
            stroke-dashoffset={arclen}
            stroke-dasharray="314.16"
            transform="rotate(-224 60 60)"
            stroke-linecap="round"
          />
        </svg>
          <img src={img} className="img" />
          <div className="circle">
            <div className="text">
              {count}
            </div>
            <div className="kmph">
              kmh
            </div>
          </div>
        </div>
        {/* <svg className="svg" height="100%" width={dynamicWidth}>
          <path d={d} stroke="white" stroke-width="10px" />
        </svg> */}

        {/* <svg width="200" height="200">
          <circle class="path" cx="100" cy="100" r="96" stroke="blue" stroke-width="4" fill="none" />
        </svg> */}

        
      </div>
    </>
  );
}

export default App;
