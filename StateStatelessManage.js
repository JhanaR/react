import { useState } from "react";

function StateStatelessManage() {
    const [add,setAdd] = useState(0);
    const handleValue = () => setAdd(add+ 1);

    return(
        <>
       <h1> Value of state:{add}</h1>
        <button onClick ={handleValue}> New detect</button>
        </>
    )

}

export default StateStatelessManage;