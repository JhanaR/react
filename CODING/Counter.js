import react,{useState} from 'react';

function Counter(){
  
  const[count, setCount] = useState(0);
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  return(
    <>
    .fetch(url);
    .then({res=>res.JSON()});
    .then(res);
     {/* <button onClick={()=>setCount(count+1)}>INC</button>
     <h1>{count}</h1> */}
     </>
    )
}

 export default Counter;