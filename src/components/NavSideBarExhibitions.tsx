import { Link } from "react-scroll";

const NavSideBarExhibitions = () => {
  return (
    <nav className="sticky top-36 self-start left-0 w-2/12 m-0 h-[88vh] border border-red-500 nav-shadow">
      <ul className=" my-12 flex flex-col space-y-8">
        {/* 0 - Statement */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="statement"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap nav-item"
          >
            Statement
          </Link>
        </li>
        {/* 1 - HEEEE */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="heeee"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap nav-item"
          >
            HEEEE
          </Link>
        </li>
        {/*2 - Sin vuestro hierro caería la noche */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="sinvuestrohierrocaerialanoche"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap nav-item text-center"
          >
            Sin vuestro hierro
            <br />
            caería la noche
          </Link>
        </li>
        {/* 3 - Escombro y ruina */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="escombroyruina"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap nav-item"
          >
            Escombro y ruina
          </Link>
        </li>
        {/* 4 - Funda */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="funda"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap nav-item"
          >
            Funda
          </Link>
        </li>
        {/* 5 - Bilbaoarte residency */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="bilbaoarteresidency"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap nav-item"
          >
            Bilbaoarte residency
          </Link>
        </li>

        {/* 6 - Un todo ahora */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="untodoahora"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap nav-item"
          >
            Un todo ahora
          </Link>
        </li>

        {/* 7 - Un perfume sin soporte, un gasto puro */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="unperfumesinsoporteungastopuro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap nav-item text-center"
          >
            Un perfume sin soporte
            <br />
            un gasto puro
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavSideBarExhibitions;
