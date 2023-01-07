import { RefObject, useEffect } from "react";

export default function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
  mouseEvent: "mousedown" | "mouseup" = "mousedown"
) {
  useEffect(() => {
    const element = ref.current;

    const handleMouse = (e: MouseEvent) => {
      if (!element || element.contains(e.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener(mouseEvent, handleMouse);

    return () => {
      document.removeEventListener(mouseEvent, handleMouse);
    };
  }, []);
}
