import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import CartDrawer from "./CartDrawer";
import { User } from "lucide-react";
import LogoutToggle from "./LogoutToggle";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b dark:bg-zinc-900">
      <div className="flex gap-5 justify-center items-center">
        {isAuthenticated ? (
          <LogoutToggle user={user} />
        ) : (
          <Link to="/login">
            <User
              size={28}
              strokeWidth={1.3}
              className="text-gray-800 dark:text-white hover:scale-105 transition-all ease-in-out cursor-pointer"
            />
          </Link>
        )}
        <CartDrawer />
        <ModeToggle />
      </div>
      <div className="flex gap-1 justify-center items-center text-xl">
        <Link to={"/"} className="text-2xl font-bold">
          <img src="logonav.png" alt="Logo" className="sm:flex h-auto w-auto" />
        </Link>
      </div>
      <div className="hidden  sm:flex gap-6 justify-center items-center py-4">
        <ul className="flex gap-6 font-semibold">
          <li className="transform transition-transform duration-300 hover:scale-110">
            <Link to="/bulkorders">Bulk Order</Link>
          </li>

          <li className="transform transition-transform duration-300 hover:scale-110">
            <Link to="/about">About Us</Link>
          </li>
          <li className="transform transition-transform duration-300 hover:scale-110">
            <Link to="/contact">Help</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
