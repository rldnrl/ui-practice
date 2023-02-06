import {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useState,
} from "react";
import "./RippleButton.style.css";

type Ripple = {
  width: `${number}px`;
  height: `${number}px`;
  top: `${number}px`;
  left: `${number}px`;
};

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function RippleButton(props: RippleButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    props.onClick?.(e);
  };

  return (
    <button {...props} onClick={handleClick} className="button">
      {props.children}
      <span className="ripple" />
    </button>
  );
}
