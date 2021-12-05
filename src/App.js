import './App.css';
import {React, useState, useEffect} from 'react'
import img from './image.png';

function App() {
  const [count, setCount] = useState(0);
  // setInterval(() => {
  //   if(counter == 100 ){
  //     clearInterval();
  //   }else{
  //     setCount(count + 1);
  //     // numb.textContent = counter + "%";
  //   }
  // }, 200);
  useEffect(() => {
    const interval = setInterval(() => {
      let num = count + 1;
      if(num > 220) {
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
          <img src={img} className="img"/>
        <div className="circle">
          <div className="text">
            {count}
          </div>
          <div className="kmph">
            kmh
          </div>
        </div>
        </div>
        
        {/* <div class="circular">
          <div class="inner"></div>
          <div class="number">{count}</div>
          <div class="circle">
            <div class="bar left">
              <div class="progress"></div>
            </div>
            <div class="bar right">
              <div class="progress"></div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
