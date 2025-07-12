import { useState, useEffect } from "react";

function UseEffectExample1() {
  const [count, setCount] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);  // Increase count every second
    }, 1000);

    // ✅ Cleanup function: clear the interval
    return () => {
      clearInterval(interval);
    };
  }, []); //

  return <h1>Timer: {count}</h1>;
}

export default UseEffectExample1;
