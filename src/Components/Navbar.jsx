import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Chef.svg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <header className="w-full h-fit flex justify-between items-center px-[2em] md:px-[3em] py-6 ">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Chef-logo" className="w-[4em]" />
          <h1 className="text-white font-Inter text-2xl">
            <span className="text-blue-600">M.</span>Recipes
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-14 text-[1em] text-white font-Inter">
          <Link to="/home" className="relative nav-animation">
            Home
          </Link>
          <Link to="/Favorites" className="relative nav-animation">
            Favorites
          </Link>
        </nav>
        <div className="md:hidden flex flex-col items-end ">
          <button>
            {!nav ? (
              <IoMenu
                className="text-white text-3xl hover:text-blue-600 ease-in-out duration-300"
                onClick={handleNav}
              />
            ) : (
              <IoMdClose
                className="text-white text-3xl hover:text-black ease-in-out duration-300 absolute z-50 right-5 top-12"
                onClick={handleNav}
              />
            )}
          </button>
          {nav ? (
            <div className="duration-300 ease-in-out z-40 bg-[#18181b] border-l text-white absolute w-[60%] top-0 right-0 h-[100vh] flex justify-center items-center">
              <nav className="flex flex-col gap-16 text-2xl font-Inter">
              <Link to="/home" className="relative nav" onClick={handleNav}>
                Home
              </Link>
              <Link to="/Favorites" className="relative nav" onClick={handleNav}>
                Favorites
              </Link>
              
              </nav>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
