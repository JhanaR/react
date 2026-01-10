import React from "react";
import { useCart } from "./context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    dispatch({ type: "CLEAR_CART" });
    navigate("/products");
  };

  if (cart.length === 0) {
    return <div className="text-center my-16">Cart is empty. Go to <span className="text-blue-500 underline cursor-pointer" onClick={() => navigate("/products")}>Shop</span></div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout Summary</h2>
      <ul className="mb-4">
        {cart.map(item => (
          <li key={item.id} className="flex mb-2 items-center">
            <img src={item.image} alt={item.title} className="w-10 h-10 mr-2 object-contain" />
            <span>{item.title} × {item.quantity} = ${(item.price*item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mb-4">Total: ${totalPrice.toFixed(2)}</h3>
      <button
        onClick={handlePlaceOrder}
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-800"
      >
        Place Order
      </button>
    </div>
  );
}
