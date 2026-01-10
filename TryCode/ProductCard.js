import React from "react";
import { useCart } from "./context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div className="bg-white rounded shadow-md p-4 flex flex-col h-full">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-4 mx-auto" />
      <h3 className="text-md font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAdd}
        className="mt-auto bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}