import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-sky-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-100 bg-blue-700 inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-200 text-4xl font-bold cursive tracking-widest"
                : " inflex-flex items-center py-6 px-3 mr-4 text-white-100 hover:text-green-200 text-4xl font-bold cursive tracking-widest"
            }
          >
            Nemanja
          </NavLink>
          <NavLink
            to="/post"
            className={({ isActive }) =>
              isActive
                ? "text-red-100 bg-blue-700 inflex-flex items-center py-3 px-3 my-6 rounded text-red-200  hover:text-green-200"
                : "inflex-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-green-200"
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-red-100 bg-blue-700 inflex-flex items-center py-3 px-3 my-6 rounded text-red-200  hover:text-green-200"
                : "inflex-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-green-200"
            }
            // className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-200"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            // className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-200"
            className={({ isActive }) =>
              isActive
                ? "text-red-100 bg-blue-700 inflex-flex items-center py-3 px-3 my-6 rounded text-red-200  hover:text-green-200"
                : "inflex-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-green-200"
            }
          >
            About me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/NemanjaMijucic?tab=repositories"
            className="mr-4"
            target="_blank"
            fgColor="fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/nemanja-mijucic-228876225/"
            className="mr-4"
            target="_blank"
            fgColor="fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/nemanja.mijucic/"
            className="mr-4"
            target="_blank"
            fgColor="fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
