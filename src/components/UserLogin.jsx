import React from "react";
import { useAuth } from "../context/AuthContext";

const UserLogin = () => {
  const { userName, setUserName, handleClick } = useAuth();

  return (
    <div className="container h-screen mx-auto flex justify-center items-center ">
      {localStorage.getItem("user") ? (
        ""
      ) : (
        <div className=" d-flex    justify-content-center">
          <label className=" " htmlFor="name">
            Kullanıcı adı giriniz!
          </label>
          <input
            className="px-4 py-2 w-50 "
            type="text"
            id="name"
            placeholder="Lütfen bir isim giriniz..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleClick} className="btn btn-primary px-5 py-2  ">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserLogin;
