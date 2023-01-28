import { useState } from "react";

export const useCounter = (initVal: number, val: number) => {
  const [count, setCount] = useState<number>(initVal);

  const increment = () => {
    setCount((prev) => prev + val);
  };
  const decrement = () => {
    setCount((prev) => prev - val);
  };
  return {
    count,
    increment,
    decrement,
  };
};
