import { useState, useEffect } from "react";

function UseEffectExample1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  }, []);
   

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
}

export default UseEffectExample1;
