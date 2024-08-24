import { useState } from "react";

// function UseStateFormDiffFxn (){

//     const [userName, setUserName] = useState("Karthik");
//     const [userAge, setUserAge] = useState(36);

//     const changeUserName = () => {userName =="karthik"?setUserName("Hevan"):setUserName("karthik") }
//     const changeUserAge = () => {userAge == 36 ? setUserAge(3): setUserAge(36)}
//     //const [userHobbies, setuserHobbies] = useState("Mobile");
//     return (
//         <>
//         <p>Hi user Name: {userName}</p>
//         <p>Hi user Age : {userAge}</p>
//         {/* <button onClick = {() => setuserAge(userAge +1)}> Change in Age</button>
//         <button onClick = {()=> setUserName(userName +1)}> Name of user name</button> */}

//         <button onClick = {changeUserName}>  Name of user name </button>
//         <button onClick = {changeUserAge}> Change in Age</button>
//         </>
//     )

// }

// function UseStateFormDiffFxn (){
//     const [userDetail, setuserDetail] = useState({name:"Karthik", age:36});
//     const changeUserName = () =>setuserDetail({...userDetail, name: "Heva"})
//     const changeUserAge = () =>setuserDetail({...userDetail, age: 3})
//     return (
//         <>
//         <p>Hi user Name: {userDetail.name}</p>
//         <p>Hi user Age : {userDetail.age}</p>
//         {/* <button onClick = {() => setuserAge(userAge +1)}> Change in Age</button>
//         <button onClick = {()=> setUserName(userName +1)}> Name of user name</button> */}

//         <button onClick = {changeUserName}>  Name of user name </button>
//         <button onClick = {changeUserAge}> Change in Age</button>
//         </>
//     )

// }

function UseStateFormDiffFxn() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
  });

  function changeName(event) {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      name: event.target.value,
    }));
  }

  function changeAge(event) {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      age: event.target.value,
    }));
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter User name"
          value={userDetails.name}
          onChange={changeName}
        />
        <input
          type="text"
          placeholder="Enter User Age"
          value={userDetails.age}
          onChange={changeAge}
        />
      </form>
      <div>
        <h2>User Details:</h2>
        <p>Name: {userDetails.name}</p>
        <p>Age: {userDetails.age}</p>
      </div>
    </>
  );
}

export default UseStateFormDiffFxn;
