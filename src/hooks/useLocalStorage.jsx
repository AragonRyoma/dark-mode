import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialValue
  );
  const updateValue = (newValue) => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, updateValue];
};

export default useLocalStorage;
