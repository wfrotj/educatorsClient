import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import teacherService from "./services/teacherService";
//layout
import NavbarLayout from "./Layout/NavbarLayout";
import ProfileLayout from "./Layout/ProfileLayout";
import Rpms from "./Layout/Rpms";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
// import Profile from "./pages/Profile";
import Login from "./components/Login";
import Registration from "./components/Registration";
//Dashboard

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedTeacher");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      teacherService.setToken(user.token);
    }
  }, []);

  return (
    <>
      <NavbarLayout setUser={setUser} user={user} />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={<ProfileLayout setUser={setUser} user={user} />}
        />
        <Route path="/profile/register" element={<Registration />} />
        <Route path="/profile/login" element={<Login />} />

        <Route path="/rpms" element={<Rpms setUser={setUser} user={user} />} />
        {/* <Route path="/dashboard/overview" element={<Dashboard />} />
        <Route path="/dashboard/lessonplan" element={<LessonPlan />} /> */}
      </Routes>
    </>
  );
}

export default App;
