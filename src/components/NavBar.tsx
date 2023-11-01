import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex border-2 border-red-500 w-screen h-16 items-center mt-0 justify-between px-8 sticky top-0 self-start z-10  bg-zinc-100">
      <div className="flex flex-row border-2 border-green-500">
        <NavLink end to="/">
          Raul Lorenzo
        </NavLink>
      </div>

      <ul className="flex flex-row border-2 border-blue-500 gap-8">
        <li>
          <NavLink to="/exhibitions">Exhibitions</NavLink>
        </li>
        <li>
          <NavLink to="/writings">Writings</NavLink>
        </li>
        <li>
          <NavLink to="/cv">CV + Contact</NavLink>
        </li>
        {/* Add Here IG link or whatever */}
      </ul>
    </nav>
  );
};

export default NavBar;
