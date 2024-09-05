import { useState } from "react";

function Counter() {
  const [Count, SetCount] = useState(0);
  return (
    <>
       <h1> Performing calculations:: {Count}</h1>
       <button onClick = {() =>SetCount(Count+1) }> Adding
      
       </button>

       <button onClick = {() =>SetCount(Count-1)}> Subtracting
  
        </button>

        <button onClick = {() =>SetCount(Count*2)}>Multiplication
  
        </button>
    </>
  );
}

export default Counter;
