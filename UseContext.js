// UseContext: Instead of going with props drilling (example 1 to 2 to 3 ...n) usecontext is a react hook for accessing
//shared values accross components without manually passing props through each level

//In order to useContext we have to follow three steps 1.Create useContext 2.provider 3.Hook concept

import { createContext, useContext, useState } from "react";// step1 with this named import we able to proceed.

const newContext =  createContext (); //creating the context here!!

export default function UseContext(){
     const [name] = useState("Hevanika");
     return (

<newContext.Provider value = {name}>
{/* <h1> Child1 component: {name}</h1> */}
{/* <h1> Child2 component: {name}</h1> */}
< Child1 />
</newContext.Provider>
);
//consume the context
}
function Child1 (){
     return(
     <>
     < Child2 />
     </>
 )
 }
 
 function Child2 (){
     const name = useContext(newContext)
     return(
     <>
     <h1> Child3 component</h1>
     <h2>{`Accessing the child props here from parent using components,user is ${name}`}</h2>
     </>
 )
 }