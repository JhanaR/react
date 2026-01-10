import React from "react";
import { useCart } from "./context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const handleRemove = (id) => dispatch({ type: "REMOVE_FROM_CART", id });
  const handleIncrease = (id) => dispatch({ type: "INCREASE_QTY", id });
  const handleDecrease = (id) => dispatch({ type: "DECREASE_QTY", id });
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0)
    return (
      <div className="text-center my-20">
        <h2 className="text-xl mb-6 font-semibold text-gray-700">
          Your cart is empty.
        </h2>
        <Link
          to="/products"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
        >
          Go Shopping
        </Link>
      </div>
    );

  return (
    <div className="bg-gray-50 py-8 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left: Product List */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-lg px-8 py-10">
            <h2 className="text-3xl font-extrabold mb-8 border-b border-gray-200 pb-4 text-gray-900">
              Shopping Cart
            </h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-8 border-b border-gray-200 py-8 last:border-b-0 hover:bg-gray-50 rounded-lg transition-colors duration-300"
              >
                {/* Product image */}
                <div className="flex-shrink-0 flex justify-center items-center w-full sm:w-40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full w-32 md:w-40 h-auto object-contain bg-white p-3 border border-gray-300 rounded-lg shadow-sm"
                    style={{ maxHeight: "180px" }}
                  />
                </div>
                {/* Product details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-xl mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="inline-block font-semibold text-red-700 text-sm px-3 py-1 bg-red-100 border border-red-300 rounded-full">
                        28% off
                      </span>
                      <span className="inline-block font-medium text-green-700 text-sm">
                        Eligible for FREE shipping
                      </span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-pink-600">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                  {/* Quantity controls */}
                  <div className="flex items-center gap-5 mt-6 flex-wrap">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      disabled={item.quantity <= 1}
                      className={`px-4 py-2 font-bold rounded-full border transition-colors duration-300 ${
                        item.quantity <= 1
                          ? "opacity-40 cursor-not-allowed border-gray-300 text-gray-500"
                          : "border-pink-500 text-pink-600 hover:bg-pink-100"
                      }`}
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="px-4 py-2 font-bold rounded-full border border-pink-500 text-pink-600 hover:bg-pink-100 transition-colors duration-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="ml-6 px-4 py-2 text-red-700 hover:text-red-900 font-semibold transition-colors duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/* Subtotal */}
            <div className="mt-12 flex justify-end">
              <div className="text-2xl font-extrabold tracking-wider text-gray-900">
                Subtotal ({cart.reduce((a, b) => a + b.quantity, 0)} item
                {cart.length > 1 ? "s" : ""}):{" "}
                <span className="text-pink-600">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Summary */}
        <div className="md:w-1/3 min-w-[320px]">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between h-full sticky top-20">
            <div className="mb-6 text-2xl font-extrabold tracking-wider text-gray-900">
              Subtotal ({cart.reduce((a, b) => a + b.quantity, 0)} item
              {cart.length > 1 ? "s" : ""}):{" "}
              <span className="text-pink-600">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="mb-6 flex items-center gap-3">
              <input
                type="checkbox"
                id="gift"
                className="align-middle w-4 h-4"
              />
              <label htmlFor="gift" className="text-base font-medium">
                This order contains a gift
              </label>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-4 rounded-xl shadow-lg transition-colors duration-300"
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
