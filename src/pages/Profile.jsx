import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Welcome user!</h1>
      <div>
        <div>
          <h2>This is for profile Picture</h2>
          <img src="" />
        </div>
        <div>
          <p> firstName, lastName, middleInitial</p>
          <p>Age</p>
          <p>employeeNumber</p>
          <p>depEdEmail</p>
        </div>
      </div>
      <button>
        <NavLink to="/profile/register">Register</NavLink>
      </button>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Profile;
