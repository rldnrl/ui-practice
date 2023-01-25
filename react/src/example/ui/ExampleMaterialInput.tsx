import { useState } from "react";
import MaterialInput from "../../ui/MaterialInput";

export default function ExampleMaterialInput() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <MaterialInput
        type="password"
        label="Password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MaterialInput
        type="password"
        label="Password"
        hasHiddenButton
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
