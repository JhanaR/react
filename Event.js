import {useState} from "react";

function Event() {
  const [text, setText] = useState('');

return (
    <>
    <h1>{text}</h1>
    <h2>{setText}</h2>
    <input type="text" placeholder="Type here..." value={text} onChange={(e) => setText(e.target.value)}/>
    <input type="text" placeholder="Mirrored text" value={text} readOnly />
</>
)
}
export default Event;