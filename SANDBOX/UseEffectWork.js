import { useState, useEffect } from "react";

function UseEffectWork() {
  const [count, setCount] = useState(2);
  useEffect(() => {
    console.log("Updating Component Did Mount");
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}> Cliked Me</button>
    </>
  );
}

export default UseEffectWork;
