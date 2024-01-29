import React from "react";
import { useEffect } from "react";

import { NavLink, Outlet } from "react-router-dom";
import PersonalData from "../pages/PersonalData";
import teacherService from "../services/teacherService";
import Dashboard from "../pages/Dashboard";
function ProfileLayout({ user, setUser }) {
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedTeacher");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      teacherService.setToken(user.token);
    }
  }, []);
  return (
    <div>
      {!user ? (
        <div>
          <div>
            <h1>Welcome !</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              magni facere voluptates tempore quae ea sint magnam minus quasi
              repellat. Aspernatur doloribus mollitia error! Iste dolore
              explicabo a velit harum! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Commodi ipsum illo unde ipsa nostrum aspernatur
              atque voluptatibus libero delectus ex. Vel nihil provident nobis
              corporis, earum cum quod quisquam delectus!
            </p>
          </div>
          <div className="profile-buttons">
            <button>
              <NavLink to="/profile/register">Register</NavLink>
            </button>
            <button>
              <NavLink to="/profile/login">Login</NavLink>
            </button>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      ) : (
        <>
          <PersonalData setUser={setUser} user={user} />
        </>
      )}
    </div>
  );
}

export default ProfileLayout;
