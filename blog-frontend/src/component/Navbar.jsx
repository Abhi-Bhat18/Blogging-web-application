import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex bg-blue-100 w-screen h-10 justify-between items-center px-5 sticky top-0 shadow-md">
      <nav className="flex justify-between w-full">
        <div>Logo</div>

        {/* ------------Mobile Nav------------ */}
        <div className="hidden flex-col bg-blue-500 w-64 fixed right-0 top-0 p-5 h-screen items-center justify-start space-y-10 pt-16 ">
          <Link>Home</Link>
          <Link>Blog</Link>
          <Link>Write</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <button>Close</button>
        </div>
        {/* -------Desk Nav---------- */}
        <div className="space-x-10">
          <Link>Home</Link>
          <Link>Blog</Link>
          <Link>Write</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
