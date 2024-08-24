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

function UseStateCart () {
    const [cart, setCart] = useState(0);
    const handleClick = () => setCart(cart + 1);
    return(
        <>
        <h1> Hi You have this count in your cart: {cart} </h1>
        <button onClick ={handleClick}> ADD TO CART </button>
        </>
    )

}



export default UseStateCart;