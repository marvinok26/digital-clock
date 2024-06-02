import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    ampm: '',
  });

  useEffect(() => {
    const clock = () => {
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();
      let am = 'AM';

      if (h > 12) {
        h = h - 12;
        am = 'PM';
      }

      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;

      setTime({ hours: h, minutes: m, seconds: s, ampm: am });
    };

    const interval = setInterval(clock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="clock">
      <h2>The time is now</h2>
      <div id="time">
        <div><span id="hour">{time.hours}</span><span>Hours</span></div>
        <div><span id="minutes">{time.minutes}</span><span>Minutes</span></div>
        <div><span id="seconds">{time.seconds}</span><span>Seconds</span></div>
        <div><span id="ampm">{time.ampm}</span></div>
      </div>
    </div>
  );
}

export default App;
