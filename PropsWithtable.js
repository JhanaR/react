//function PropsWithtable({name, age, isWorking}) {
function PropsWithtable(props) {
  console.log(props);
  return (
    <div className="profile">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            {/* <td>{name}</td> */}
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            {/* <td>{age}</td> */}
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>isWorking</th>
            {/* <td>{isWorking}</td> */}
            <td>{props.isWorking ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PropsWithtable;

PropsWithtable.defaultProps = {
  name: "Not provided",
  age: 0,
  isWorking: "No"
}
