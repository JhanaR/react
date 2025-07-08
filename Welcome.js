import React from "react";
import { Fragment } from "react";

function Welcome() {
  return (
    //  <Fragment>
    //     <h1>Hi add 1+2 </h1>
    //     <h2>Hi add {1+2} </h2>
    //     <h3>Welcome Back</h3>
    //   </Fragment>
    // <React.Fragment>
    //   <h1>Hi add 1+2 </h1>
    //   <h2>Hi add {1+2} </h2>
    //   <h3>Welcome Back</h3>
    // </React.Fragment>

    <div>
      <h1>Hi add 1+2 </h1>
      <h2>Hi add {1 + 2} </h2>
      <h3>Welcome Back</h3>
    </div>
  );
}
export default Welcome;
