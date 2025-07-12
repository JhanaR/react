import { useState } from "react";

function Counter() {
  const [count, SetCount] = useState(0);
  return (
    <>
       <h1> Performing calculations:: {count}</h1>
       <button onClick = {() =>SetCount(count+1)}> Adding</button>
       <button onClick = {() =>SetCount(count-1)}> Subtracting</button>
       <button onClick = {() =>SetCount(0)}>Reset</button>
    </>
  );
}

export default Counter;