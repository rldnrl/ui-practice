import { InputHTMLAttributes, useState } from "react";
import "./MaterialInput.style.css";

interface MaterialInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hasHiddenButton?: boolean;
}

export default function MaterialInput({
  label,
  type,
  value,
  hasHiddenButton = false,
  ...props
}: MaterialInputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const typeByShowPassword =
    showPassword && type === "password" ? "text" : "password";

  const renderShowPasswordIcon = (): JSX.Element => {
    if (!hasHiddenButton) {
      return <></>;
    }

    return showPassword ? (
      <i className="bx bx-show" onClick={() => setShowPassword(false)} />
    ) : (
      <i className="bx bx-hide" onClick={() => setShowPassword(true)} />
    );
  };

  return (
    <div className="input-box">
      <input
        {...props}
        className="material-input"
        type={typeByShowPassword}
        value={value}
      />
      <span>{label}</span>
      {renderShowPasswordIcon()}
    </div>
  );
}
