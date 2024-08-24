//props drilling
// import { Component3 } from "./Component3";

// export const Component2 = (props) => {
//     return (
//         <div className = "box">
//             <h1> Its Component2 </h1>
//             <Component3 data={props.data}/>
//         </div>
//     );
// };

//useContext 
//First Try
// import { Component3 } from "./Component3";

// export const Component2 = (props) => {
//     const handleClick = () => {
//         console.log("Button Clicked");
//     }
//     return (
//         <div className = "box">
//             <h1> Its Component2 </h1>
//             <Component3 data={props.data} handleClick={handleClick}/>
//         </div>
//     );
// };

//second implementation 
import { Component3 } from "./Component3";
export const Component2 = () => {
    const handleClick = () => {
        console.log("Button Clicked");
    }
    return (
        <div className = "box">
            <h1> Its Component2 </h1>
            <Component3 handleClick={handleClick}/>
        </div>
    );
};