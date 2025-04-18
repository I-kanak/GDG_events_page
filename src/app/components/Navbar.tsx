
"use client"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-black text-white p-4">
        <nav className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="#home">
            <img src="/gdg_logo.png" alt="GDG Logo" className="h-14 w-auto" />
          </a>

          <div className="block sm:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <ul className={`${
            isOpen ? "block" : "hidden"
          } w-full sm:flex sm:items-center sm:w-auto sm:space-x-8 mt-4 sm:mt-0 text-center`}>
            <li><a href="#home" className="block py-2 sm:inline-block hover:text-gray-400">Home</a></li>
            <li><a href="#events" className="block py-2 sm:inline-block hover:text-gray-400">Events</a></li>
            <li><a href="#projects" className="block py-2 sm:inline-block hover:text-gray-400">Projects</a></li>
            <li><a href="#members" className="block py-2 sm:inline-block hover:text-gray-400">Members</a></li>
            <li><a href="#aboutUs" className="block py-2 sm:inline-block hover:text-gray-400">About Us</a></li>
          </ul>
        </nav>
      </header>
      <div className="border-t border-white -mt-2"></div>
    </>
  );
};

export default Navbar;
