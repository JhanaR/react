import { useState } from "react";
import "./UseStateData.css";

function UseStateAuto() {
  const [data, setData] = useState({
    name: "Karthik",
    age: 36,
    gender: "Male",
    isMarried: true,
  });
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setData({
      ...data,[name]: value,
    });
  }
  return (
    <>
      <input type="text" name="name" value={data.name} />
      <input type="age" name="age" value={data.age} />

      <input type="gender" name="gender" value={data.gender} />

      <form>
        <input type="text" name="name" placeholder="Enter name" value={data.name} onChange={changeHandler}
        />
        <input type="age" name="age" placeholder="Enter age" value={data.age} onChange={changeHandler}
        />
        <div>
          <label htmlFor="male">
            <input type="radio" name="gender" id="male" checked={data.gender == "Male"} value="Male" onChange={changeHandler}
            />
            MALE
          </label>
          <label htmlFor="female">
            <input type="radio" name="gender" id="female" checked={data.gender == "Male"} value="Female" onChange={changeHandler}
            />
            FEMALE
          </label>
        </div>
        <input
          type="checkbox"
          name="isMarried"
          value={data.isMarried}
          isMarried
          onChange={changeHandler}
        />
        <button> Submit</button>
      </form>
    </>
  );
}
[]
export default UseStateAuto;
