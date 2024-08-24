import { useEffect, useState } from "react";

function UseEffectData() {
  const [content, setContent] = useState([]);
  const [valueType, setvalueType] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${valueType}`)
      .then((data) => data.json())
      .then((json) => setContent(json));
  }, [valueType]);

  return (
    <>
      {valueType === "posts" && (
        <ul>
          {content.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      {valueType === "todos" && (
        <ul>
          {content.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      {valueType === "users" && (
        <ul>
          {content.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}

      <button onClick={() => setvalueType("posts")}>POSTS</button>
      <br />
      <button onClick={() => setvalueType("users")}>USER</button>
      <br />
      <button onClick={() => setvalueType("todos")}>TODOS</button>
    </>
  );
}
export default UseEffectData;
