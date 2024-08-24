//hook state makes your component as dynamic.
//use parameter is initial value of the state or (props--normal function props).
// if you are suspect which part is going to change that should place in state with the use state hook we can achieve it.!!
//useState will always an arrayReference

import {useState} from "react"

function ReactUseStateHook (){
// const arrayRef = useState(0); // [ 0,f() ] [INITIAL VALUE (variable),FUNCTION (setVariable)], completely destructuring concept.
//rerender will occur only with that value of state variable is changes but we cannot directly chnage the state variable.
//function purpose which is use to modify your state variable.
// const variable = arrayRef[0];  // 0 
// const setVariable = arrayRef[1]; // f()
//const birthYear = 1991;
let [count, setCount] = useState(0); // 0 , if no initial value is provided it wilkl be undefined.
const handleButtonEvent = () => {
    console.log("button clicked ");
    //count = count + 1;  
        setCount(count + 1); //0+1
    // setCount(count + 1); //1+1

    //  setCount((prevCount) => prevCount+1);   
    //  setCount((prevCount) => prevCount+1);
}
return (
    <>
        <p>{count}</p>
        <button onClick={handleButtonEvent}>Click Me!</button>
    </>
)
}

export default ReactUseStateHook;