//props drilling
// import { Component2 } from "./Component2";

//  export const Component1 = () => {
//     const data = "Hello from component1";
//   return (
//     <div className="box">
//         <h1> Its Component1 </h1>
//         < Component2 data={data}/>
//     </div>
//   );
// };

//Direct Communication can achieve using useContext
//First try

// import { Component2 } from "./Component2";
  
//  export const Component1 = () => {
//     const data = "Hello from component1";
//   return (
//     <div className="box">
//         <h1> Its Component1 </h1>
//         < Component2 data={data}/>
//     </div>
//   );
// };

//second implementation 
import { createContext } from "react";

import { Component2 } from "./Component2";
export const Comp1 = createContext();
export const Component1 = () => {
  const data = "Hello from component1 here!!!";
  return (
    <div className="box">
      <h1> Its Component1 </h1>
      <Comp1.Provider value ={data}>
      <Component2 />
      </Comp1.Provider>
    </div>
  );
};
