import { useState, useEffect } from "react";

const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue() {
    setValue((prev) => !prev);
  }

  return [value, toggleValue];
};

export default useToggle;
