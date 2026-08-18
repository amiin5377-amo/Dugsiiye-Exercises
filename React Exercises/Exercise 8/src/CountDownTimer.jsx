import {useState, useEffect} from 'react';

function CountDownTimer() {
  const [initialTime, setInitialTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev -1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);
const handleStart = () => {
  if (timeLeft > 0) {
     setIsRunning(true);
  }
 
  
};
const handleStop = () => {
  setIsRunning(false);
};
const handleReset = () => {
  setIsRunning(false);
  setTimeLeft(initialTime);
};
  return ( 
     <div>
      <h1>Countdown Timer</h1>
      <input type="number" value={initialTime} onChange={(e) => {
        const value = Number(e.target.value);
        setInitialTime(value);
        setTimeLeft(value);
        setIsRunning(false);
      }}>
     
      </input>
      
  
      <p>Time Left: {timeLeft} seconds</p>
      <button disabled={ isRunning || timeLeft === 0} onClick={handleStart}>start</button>
      <button disabled={!isRunning} onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  ) 
}

export default CountDownTimer;