import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
export default function Navbar() {
  return (
    <header className="bg-red-500">
      <div className="container mx-auto flex justify-around lg:justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact="true"
            // activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-1 text-red-200 hover:text-green-800 text-xl lg:text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            // activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            // activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            // activeClassName="text-red-100 bg-red-700"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 ">
          <SocialIcon
            url="https://www.linkedin.com/in/elis-porter-2b847122b"
            className="mr-1"
            target="_blank"
            fgColor="white"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
    </header>
  );
}
