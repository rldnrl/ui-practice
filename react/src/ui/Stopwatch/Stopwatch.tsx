import { useState } from "react";
import { stopwatchStyle } from "./Stopwatch.style";
import useInterval from "../../hooks/useInterval";

interface StopwatchProps {
  initialTime: {
    hour: number;
    minute: number;
    second: number;
  };
  isStart: boolean;
  onStart?: () => void;
  onStop?: () => void;
}

export default function Stopwatch({
  initialTime,
  isStart,
  onStart,
  onStop,
}: StopwatchProps) {
  const [hour, setHour] = useState(initialTime.hour);
  const [minute, setMinute] = useState(initialTime.minute);
  const [second, setSecond] = useState(initialTime.second);

  useInterval(
    () => {
      if (second === 59) {
        setSecond(0);
        setMinute(minute + 1);
      } else if (minute === 59) {
        setMinute(0);
        setHour(hour + 1);
      } else {
        setSecond(second + 1);
      }
    },
    isStart ? 1000 : null
  );

  const handleReset = () => {
    setHour(initialTime.hour);
    setMinute(initialTime.minute);
    setSecond(initialTime.second);
  };

  const hourText = hour < 10 ? `0${hour}` : hour;
  const minuteText = minute < 10 ? `0${minute}` : minute;
  const secondText = second < 10 ? `0${second}` : second;

  return (
    <div className={stopwatchStyle.stopwatchContainer}>
      <div className={stopwatchStyle.time}>
        <span>{hourText}</span>
        <span className="colon">:</span>
        <span>{minuteText}</span>
        <span className="colon">:</span>
        <span>{secondText}</span>
      </div>
      <div className={stopwatchStyle.buttonGroup}>
        <button className={stopwatchStyle.button} onClick={onStart}>
          Start
        </button>
        <button className={stopwatchStyle.button} onClick={onStop}>
          Stop
        </button>
        <button className={stopwatchStyle.button} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
