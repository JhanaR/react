import {Route, Routes, Link, useNavigate, useEffect} from 'react-router-dom'

function Home() {
    return(
        <h1>Home Component</h1>
    )    
}

function About() {
    return(
        <h1>About Component</h1>
    )    
}
function Blog() {
    return(
        <h1>Blog Component</h1>
    )    
}

function NotFound() {
    const navigate = useNavigate();
        return(
        <>
        <h1>Not Found</h1>
        {/* <Link to="/"> Go Back To HOME   |</Link> used for JSX and useNavigate used for javasript.*/} 
        <button onClick ={() => navigate('/')}> Go Back </button>
        </>
    )    
}

function NavBar() {
    return(
        <nav>
            <Link to="/"> HOME   |</Link>
            <Link to="/about"> ABOUT |</Link>
            <Link to="/blog"> BLOG </Link>
            {/* <Route path="/posts" element={<Posts/>}>
                  <Route path=":id" element = {<Post/>}/>
            </Route> */}
        </nav>
    )
}

// function Post(){
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then(response => response.json())
//             .then(json => setContent(json))
//     }, [id]);
//     return (
//         <>
         
//         </>
//     )
// }
export default function RouterForm() {
  return (
    <>
    <NavBar/>
    <Routes>
        < Route path ="/" element ={<Home/>}></Route>
        < Route path ="/about" element ={<About/>}></Route>
        < Route path ="/blog" element ={<Blog/>}></Route>
        {/* < Route path ="*" element ={<NotFound/>}></Route> */}
    </Routes>
    </>
  )
}
