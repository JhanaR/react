// passing props with chaining process is call props drilling

import React, {  useState } from 'react';

function Component1 (){
const [user] = useState('A')
    return(
    <>
    <h1> Child1 component</h1>
    <Child1 user = {user}/>
    </>
)
}

function Child1 ({user}){
    return(
    <>
    <h1> Child2 component</h1>
    <Child2 user= {user}/>
    </>
)
}

function Child2 ({user}){
    return(
    <>
    <h1> Child3 component</h1>
    <h2>{'Accessing the child props here from parent using components,user is ${user}'}</h2>
    <Child3 user= {user}/>
    </>
)
}
function Child3 ({user}){
    return(
    <>
    <h1>Child3</h1>
    <Child4 user = {user}/>
    </>
    )
}

function Child4 ({user}){
    return(
    <>
    <h1>Child4</h1>
    </>
    )
}

export default Component1

//In above example used 3 components, child2 doen't utilizing any thing just acting as mediator, passing props
// from 1st component to 3rd component, in order to access the properties of parent we must use chaining.
//To overcome this going for UseContext Hook.