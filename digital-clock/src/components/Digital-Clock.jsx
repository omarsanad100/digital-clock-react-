import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  const intervalId = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => () => clearInterval(intervalId), []);

  const formatTime = () => {
    let hours = time.getHours().toString().padStart(2, 0);
    const minutes = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);

    let meridiem;
    hours >= 12 ? (meridiem = "PM") : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.clock}>
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
};

export default DigitalClock;
