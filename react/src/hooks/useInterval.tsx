import { useEffect, useRef } from "react";

export default function useInterval(
  callback: () => void,
  delay?: number | null
) {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current?.();
    if (delay != null) {
      const interval = setInterval(tick, delay);
      return () => {
        clearInterval(interval);
        savedCallback.current = null;
      };
    }
  }, [delay]);
}
