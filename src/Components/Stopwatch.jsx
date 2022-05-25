import React, { useState } from 'react'

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

const Stopwatch = () => {
    const [watch, setwatch] = useState(0);
    const [timerID, settimerID] = useState(false);

    const start = () => {
        //Basically saying execute this only if the timer id doesnt exist, this will avoid starting the stopwatch once its already started
      if(!timerID){
        let id = setInterval(() => {
            setwatch((prev) => prev+1000)
        }, 100);
        settimerID(id);
      }
    };
    const pause = () => {
        clearInterval(timerID);
        settimerID(false);
    };
    const reset = () => {
        clearInterval(timerID);
        settimerID(false);
        setwatch(0);
    };

  return (
    <div>
    <h2>Stopwatch</h2>
    <h1>{msToTime(watch)}</h1>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch