import { useState, useEffect } from "react";

function UseEffectDateTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return <h1>{time}</h1>;
}

export default UseEffectDateTime;
