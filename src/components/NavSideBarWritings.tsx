import { Link } from "react-scroll";

const NavSideBarWritings = () => {
  return (
    <nav className="sticky top-36 self-start left-0 w-2/12 m-0 h-[88vh] nav-shadow">
      <ul className=" my-12 flex flex-col space-y-8">
        {/* 1 - Given Time */}
        <li>
          <Link
            activeClass="active"
            to="giventime"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap nav-item text-[min(0.95vw,1rem)]"
          >
            Given Time
          </Link>
        </li>
        {/* 2 - Hacer Despues */}
        <li>
          <Link
            activeClass="active"
            to="hacerdespues"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap leading-relaxed nav-item text-[min(0.95vw,1rem)]"
          >
            Hacer Después
          </Link>
        </li>
        {/*3 - Un Puente Une */}
        <li>
          <Link
            activeClass="active"
            to="unpuenteune"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap leading-relaxed nav-item text-[min(0.95vw,1rem)]"
          >
            Un Puente Une
          </Link>
        </li>
        {/* 4 - Formas de Empezar un Cuento */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="formasdeempezaruncuento"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap nav-item text-[min(0.95vw,1rem)] leading-relaxed text-center"
          >
            Formas de Empezar
            <br />
            un Cuento
          </Link>
        </li>
        {/* 5 - Corazon Y Ornamento */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="corazayornamento"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap leading-relaxed nav-item text-[min(0.95vw,1rem)]"
          >
            Coraza y Ornamento
          </Link>
        </li>
        {/* 6 - Sobre la línea de la cabeza */}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="sobrelalineadelacabeza"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="whitespace-nowrap leading-relaxed nav-item text-[min(0.95vw,1rem)] text-center"
          >
            Sobre la línea
            <br />
            de la cabeza
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavSideBarWritings;
