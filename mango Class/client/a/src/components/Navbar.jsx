import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <img
            alt="MongoDB logo"
            src=""
            height="40"
          />
        </NavLink>

        {" | "}

        <NavLink to="/create">
          Create Employee
        </NavLink>
      </nav>
    </div>
  );
}
