import {useState} from "react";

function Event() {
  // const[type, setType] = useState('');

  // return(
  //   <>
  //   <h1>type:{type}</h1>
  //   <h1>setType:{setType}</h1>
  //   <input type ="text" value={type} placeholder="type here" onChange={(e)=>setType(e.target.value)}/>
  //   <input type ="text" value={type} placeholder="Mirror here" />
  //   </>
  // )
  const [name, setName] = useState('');                                                                                                                                                                                           ");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h2>Welcome, {name || "Guest"}!</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
    </div>
  )
}
export default Event;