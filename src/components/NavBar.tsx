import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex w-screen h-[10vh] items-center mt-0 justify-between px-8 sticky top-0 self-start z-10 bg-white">
      <div className="flex flex-row text-4xl ml-11" id="raullorenzo">
        <NavLink end to="/" className=" mt-4 text-[min(2.20vw,2.25rem)]">
          Raul Lorenzo
        </NavLink>
      </div>

      <ul className="flex flex-row gap-8 text-[min(1.2vw,1.25rem)] leading-relaxed mr-16 mt-4">
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
