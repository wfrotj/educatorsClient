import { Link } from "react-router-dom";
import { useEffect } from "react";
import teacherService from "../services/teacherService";

function NavbarLayout({ user }) {
  return (
    <nav>
      <header className="navbar-layout">
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="profile">Profile</Link>
          {user ? <Link to="rpms">Rpms</Link> : null}
        </nav>
      </header>
    </nav>
  );
}

export default NavbarLayout;
