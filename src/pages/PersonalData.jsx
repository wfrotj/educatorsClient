import React from "react";
import { Link } from "react-router-dom";

function PersonalData({ user, setUser }) {
  const { username, firstName, lastName, age, employeeNumber, depEdEmail } =
    user;

  const handleLogout = () => {
    window.localStorage.removeItem("loggedTeacher");
    setUser(null);
  };
  return (
    <div>
      <div>
        <h1>Welcome {username}</h1>
      </div>
      <div>
        <p>
          Name: {firstName.toUpperCase()},{lastName.toUpperCase()}
        </p>
        <div>
          <p>Age : {age}</p>
          <p>Employee Number: {employeeNumber}</p>
          <p>DepEd Email: {depEdEmail}</p>
        </div>
      </div>
      <div>
        <Link to="/dashboard">Click here to daashboard</Link>
      </div>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default PersonalData;
