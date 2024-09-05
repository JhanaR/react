//props drilling



// export const Component3 = (props) => {
//     return (
//         <div className ="box" >
//         <h1>hi data {props.data}</h1>
//         </div>
//     );
// };

// export const Component3 = ({data}) => {
//     return (
//         <div className ="box" >
//         <h1>hi data {data}</h1>
//         </div>
//     );
// };

//UseContext

//First implementation

// export const Component3 = ({data, handleClick}) => {
//     return (
//         <div className ="box" >
//         <h1>hi data {data}</h1>
//         <p>component3 </p>
//         <button onClick ={handleClick}> CLICK </button>
//         </div>
//     );
// };

//second implementation 
import { useContext } from "react";
import {Comp1} from "./Component1";

export const Component3 = ({ handleClick}) => {
    const value = useContext(Comp1);
    return (
        <div className ="box" >
        <h1>h1 details {value}</h1>
        <p>component3 </p>
        <button onClick ={handleClick}> CLICK </button>
        </div>
    );
};