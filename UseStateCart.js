import { useState } from "react";

// function UseStateCart () {
//     const [cart, setCart] = useState(0);// initial value should provide
//     return(
//         <>
//         <h1> Hi You have this count in your cart: {cart} </h1>
//         <button onClick ={() => setCart(cart + 1)}> ADD TO CART </button>
//         </>
//     )

// }

// function UseStateCart () {
//     const [cart, setCart] = useState(0);
//     const handleClick = () => setCart(cart + 1);
//     return(
//         <>
//         <h1> Hi You have this count in your cart: {cart} </h1>
//         <button onClick ={handleClick}> ADD TO CART </button>
//         </>
//     )

// }

function UseStateCart() {
  const [count, setCount] = useState(0);
  const handleAddition = () => setCount(count + 1);
  const handleMultiple = () => setCount(count * 2);
  return (
    <>
      <h1>Output:{count}</h1>
      <button onClick={handleAddition}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={handleMultiple}>Multiple</button>
      <button onClick={() => setCount(count % 2)}>Divide</button>
    </>
  );
}



export default UseStateCart;