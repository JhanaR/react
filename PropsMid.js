// function PropsMid ({name, email, hobbies}){
//     //const {name, email, hobbies} = user.props;
//     console.log(name);
//     return (
//         <>
//         <p>{name} is playing!!</p>
//         <p>Her maidID is {email }</p>
//         <p>Her hobbies is {hobbies}</p>
//         </>
//     )
// }

 //export default PropsMid

//ABOVE is best way

// function PropsMid (props){    
//     return (
//         <>
//         <p>{props.name} is playing!!</p>
//         <p>Her maidID is {props.email }</p>
//         <p>Her hobbies is {props.hobbies}</p>
//         </>
//     )
// }

// export default PropsMid

function PropsMid (props){ 
    //<PropsMid user = {user}/>   
    return (
        <>
        <p>{props.user.name} is playing!!</p>
        <p>Her maidID is {props.user.email }</p>
        <p>Her hobbies is {props.user.hobbies}</p>
        </>
    )
}

export default PropsMid