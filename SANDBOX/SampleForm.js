import { useState } from "react";

function SampleForm() {
  const [formState, setFormState] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    search: "",
    date: "",
    file: "",
    submit: "",
    reset: "",
    button: "",
    radio: "",
    checkbox: "",
    url: ""
  });
  const handleInputs = (event) => {
    setFormState({
      ...formState, // persist the previous value
      [event?.target?.name]: event?.target?.value // add the new value
    });
    console.log("form state ---", formState);
    // /sendData/ = {formState}
  };
  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>Name :</td>
            <td>
              <input name="name" type="name" onChange={handleInputs}></input>
            </td>
          </tr>
          <tr>
            <td>Number</td>
            <td>
              <input
                name="number"
                type="number"
                onChange={handleInputs}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>
              <input name="email" type="email" onChange={handleInputs}></input>
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                name="password"
                type="password"
                onChange={handleInputs}
              ></input>
            </td>
          </tr>
          <tr>
            <td> Search </td>
            <td>
              <input
                name="search"
                type="search"
                onChange={handleInputs}
                placeholder="search"
              ></input>
            </td>
          </tr>
          <tr>
            <td> Date </td>
            <td>
              <input name="date" type="date" onChange={handleInputs}></input>
            </td>
          </tr>
          <tr>
            <td> File </td>
            <td>
              <input name="text" type="text" onChange={handleInputs}></input>
            </td>
          </tr>
          <tr>
            <td> Submit </td>
            <td>
              <input name="submit" type="submit"></input>
            </td>
          </tr>
          <tr>
            <td> Reset</td>
            <td>
              <input name="reset" type="reset"></input>
            </td>
          </tr>
          <tr>
            <td> Button</td>
            <td>
              <input name="button" type="button"></input>
            </td>
          </tr>
          <tr>
            <td> Radio</td>
            <td>
              <input name="radio" type="radio" onChange={handleInputs}></input>
            </td>
          </tr>
          <tr>
            <td> Checkbox</td>
            <td>
              <input
                name="checkbox"
                type="checkbox"
                onChange={handleInputs}
              ></input>
            </td>
          </tr>
          <tr>
            <td> URL</td>
            <td>
              <input name="url" type="url" onChange={handleInputs}></input>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default SampleForm;
