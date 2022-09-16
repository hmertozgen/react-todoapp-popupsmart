import React, { useEffect } from "react";

import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useTodoServices } from "../context/TodoServicesContext";
const Navbar = () => {
  const { removeUser, userName } = useAuth();
  const { theme, changeTheme } = useTheme();
  const { getTodos } = useTodoServices();
  useEffect(() => {
    getTodos();
    if (theme) {
      document.body.style.backgroundColor = "rgb(240, 231, 219)";
    } else {
      document.body.style.backgroundColor = "rgb(0 0 0 / 0.7)";
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <nav className="flex justify-between mt-12">
      {localStorage.getItem("user") ? (
        <h1
          className={`${
            theme ? "text-dark text-2xl" : "font-bold text-2xl text-white"
          }`}
        >
          {userName.toUpperCase()} Hoşgeldin...
        </h1>
      ) : (
        ""
      )}
      <div className="flex items-center gap-x-4">
        {localStorage.getItem("user") ? (
          <button
            onClick={removeUser}
            className="px-4 py-2 bg-blue-900/90 hover:bg-blue-200 hover:text-blue-900 transition-all text-blue-400 rounded-md shadow-md"
          >
            Çıkış yap!
          </button>
        ) : null}
        {theme ? (
          <button onClick={changeTheme}>
            <MdOutlineDarkMode fontSize={32} />
          </button>
        ) : (
          <button onClick={changeTheme}>
            <MdOutlineWbSunny className="text-gray-200" fontSize={32} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
