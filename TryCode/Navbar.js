import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "./context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  // Total number of items (sum of quantities)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const { pathname } = useLocation();

  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between">
      <div>
        <Link to="/products" className="text-xl font-bold text-blue-700">
          E-Shop
        </Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/products" className={pathname === "/products" ? "font-bold" : ""}>Products</Link>
        <Link to="/cart" className={pathname === "/cart" ? "font-bold" : ""}>
          Cart
          <span className="ml-1 px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">
            {cartCount}
          </span>
        </Link>
        <Link to="/checkout" className={pathname === "/checkout" ? "font-bold" : ""}>Checkout</Link>
      </div>
    </nav>
  );
}