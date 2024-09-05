import {useEffect,useState} from 'react'    ;

function UseEffectBasic() {
    const [type, setType] = useState('posts');

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
        .then(response => response.json())
        .then(json => console.log(json))
    },[type])

    return (
      <>
        <h1>Output:</h1>
        <button onClick={() => setType('post')}>POST</button>
        <button onClick={() => setType('users')}>USERS</button>
        <button onClick={() => setType('comments')}>COMMENTS</button>
      </>
    );
  }

export default UseEffectBasic;