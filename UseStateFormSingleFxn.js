import {useState} from "react"

function UseStateFormSingleFxn() {
    const [setFormState] = useState({
        email : "",
        password : "",
    }); // this need to handle all the fields in form instead of doing separate state.
    const handleInput = (event)  =>{
        console.log(event?.target.name);
        console.log(event?.target.value);//when you get values with event you will not get any issues.
        setFormState({
            [event?.target.name] : event?.target.value 
        })  

}
  return (
    // <form>
    //need to write 3 different functions so inorder to avoid making it handle as single.
    //     Email: <input name ="email" type="email" onChange={handleEmail}/>
    //     Password: <input name ="password"  type="password" onChange={handlePassword}/>
    //     <button onClick={handleSubmit}> Submit</button>
    // </form>

    <form>
      Email: <input name="email" type="email" onChange={handleInput} />
      Password:<input name="password" type="password" onChange={handleInput} />
      <button onClick={handleInput}> Submit</button>
    </form>
  );
}

export default UseStateFormSingleFxn;

