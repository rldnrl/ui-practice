import { useState } from "react";
import Stopwatch from "../../ui/Stopwatch";

export default function ExampleStopwatch() {
  const [isStart, setIsStart] = useState<boolean>(false);

  const handleStart = () => setIsStart(true);

  const handleStop = () => setIsStart(false);

  return (
    <Stopwatch
      isStart={isStart}
      initialTime={{ hour: 0, minute: 0, second: 0 }}
      onStart={handleStart}
      onStop={handleStop}
    />
  );
}
