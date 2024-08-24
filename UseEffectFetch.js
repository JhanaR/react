import {useEffect,useState} from "react"
import './UseEffectFetch.css';

export default function useEffectFetch() {
  const [data, setData] = useState(0);
  const [loading, setloading] = useState(true);
  const [ seterror] = useState(null);
  const url ='https://jsonplaceholder.typicode.com/posts';

  useEffect (()=> {
    //actual logic to be here
    fetchData();
  },[])//[dependency Array]

  const fetchData = async() => {
    const getApi = await fetch (url);
    setData(await getApi.json());
    if(getApi.ok) {
      setloading(false);
    }else {
      seterror("data not found");
      setloading(false)
    }

  }

  return (
    <div className="coloring">
    {loading === true? <h1>Data laoding</h1> : data.map((val,index)=>
    <li key = {index} > {val.title}</li>)}
    </div>
  )
}
