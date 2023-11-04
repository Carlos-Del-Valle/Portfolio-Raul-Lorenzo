import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex w-screen h-[10vh] items-center mt-0 justify-between px-8 sticky top-0 self-start z-10  bg-zinc-100">
      <div
        className="flex flex-row text-4xl ml-8"
        id="raullorenzo"
      >
        <NavLink end to="/">
          Raul Lorenzo
        </NavLink>
      </div>

      <ul className="flex flex-row gap-8 text-xl mr-16">
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
