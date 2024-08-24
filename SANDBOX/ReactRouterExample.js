import { Route, Routes, Link ,useNavigate, useParams, Outlet} from 'react-router-dom';
import {useEffect,useState} from "react";
function Home() {
    return <h1> Home Component</h1>
}
function About() {
    return <h2> About Component </h2>
}
function Blog() {
    return <h2> Blog </h2>
}
function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <h2> Not Found Component  </h2>
            {/* <Link to="/" >Go Back to Home </Link> */}
             <button onClick={()=> navigate('/') } > Go Back to Home</button> 
        </>
    )
}
function NavBar() {
    return (
        <nav>
            <Link to="/" >Home |</Link>
            <Link to="/about" >About |</Link>
            <Link to="/blog" >Blog |</Link>
            <Link to="/posts" >Posts</Link>
        </nav>
    )
}
function Posts(){
    const [content,setContent]=useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(resp => resp.json())
            .then(json => setContent(json))
    }, []);
    return (
        <>  
         <Outlet/>   
        <ul>
            {
                content.map((post) => {
                    return (
                        <> 
                        <li><Link to={`/posts/${post.id}`}>{post.id}</Link></li>
                        <li><Link to={`${post.id}`}>{post.id}</Link></li>
                        </>
                    )
                }
                  
                )
            }
        </ul>
       
        </>
    )
}
function Post(){
    const [content,setContent] = useState({});
    // console.log("use params----------",useParams());
    const {id} = useParams();
    console.log(`id--------- ${id}`)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setContent(json))
    }, [id]);
    return (
        <>
          <p>{content.id}</p>
          <p>{content.body}</p>
        </>
    )
}
function ReactRouterExample() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/posts" element={<Posts/>}>
                  <Route path=":id" element = {<Post/>}/>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </>
    )
}
export default ReactRouterExample;