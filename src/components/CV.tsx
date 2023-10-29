import React from "react";
import NavSideBarWritings from "./NavSideBarWritings";

const CV = () => {
  return (
    <div className="flex flex-row mx-16 border border-pink-700">
      {/* CV */}
      <main className="my-12 border border-blue-900">
        <h2 className="text-4xl font-semibold italic font-sans">CV</h2>
        <section className="">
          <ul>
            <li>-Master of Arts in Art Production, UPV, Valencia</li>
            <li>-Bachelor of Arts in Fine Arts, Salamanca</li>
            <li>-Founder and curator, Saceca, Sagunto</li>
          </ul>
        </section>

        <section className="">
          <h4>Residencies</h4>
          <ul>
            <li>-Bilbaoarte, Bilbao 2017</li>
            <li>-Residencias A Quemarropa, Alicante 2016</li>
            <li>-Espacio Matrioska, Os Blancos (Ourense), 2015</li>
          </ul>
        </section>

        <section className="">
          <h4>Awards and calls</h4>
          <ul>
            <li>
              -III Becas Fundación Villalar –Castilla y León de creación
              artística contemporánea. Valladolid 2019
            </li>
            <li>-PAMPAM! 2017. Valencia</li>
            <li>-Beca Fundación Carmen Izquierdo. Valencia, 2017.</li>
            <li>-Transportarte. Valencia, 2017</li>
            <li>-Jóvenes pintores. La Gaceta, Salamanca, 2015</li>
          </ul>
        </section>

        <section className="">
          <h4>Texts</h4>
          <ul>
            <li>
              -Exhibition sheet for the exhibition Coraza y Ornamento. Saceca,
              Sagunto 2023
            </li>
            <li>
              -Text for the catalogue of the cycle Mi Fantástico Interior. La
              Casa Encendida, Madrid 2022{" "}
            </li>
            <li>
              -Exhibition sheet for the exhibition Hacer Después. Saceca,
              Sagunto 2022
            </li>
            <li>
              -Exhibition sheet for the exhibition Given Time. Intersticio,
              London 2021
            </li>
          </ul>
        </section>

        <section className="">
          <h4>Duo</h4>
          <ul>
            <li>
              -Un todo ahora. Raúl Lorenzo and Carlos Peris. Saceca, Sagunto
              2022
            </li>
            <li>
              -Un perfume sin soporte, un gasto puro. Raúl Lorenzo and Marina G.
              Guerreiro, Estrany de la Mota, Barcelona 2023
            </li>
          </ul>
        </section>

        <section className="">
          <h4>Solos</h4>
          <ul>
            <li>
              -Sin vuestro hierro caería la noche. Museo de Zamora, Zamora 2020
            </li>
            <li>-HEEEE, Atarazanas. Valencia 2018</li>
            <li>-La fiebre. Espacio Joven, Salamanca 2014</li>
          </ul>
        </section>

        <section className="">
          <h4>Group exhibitions</h4>
          <ul>
            <li>
              -Becas de la Fundación Villalar. Palacio de las Cortes de CyL,
              Valladolid 2020
            </li>
            <li>-Exhibition. EMAC, Valencia 2019</li>
            <li>-Open studio. Bilbaoarte, Bilbao 2017</li>
            <li>
              -Open Studio. Residencias a Quemarropa, Las Cigarreras, Alicante
              2016
            </li>
            <li>-Morralla, Russafart, Valencia 2016</li>
            <li>-Una Mirada Sustractiva. Campus de Vera de Valencia, 2016</li>
            <li>-Carambola. Zamora 2015</li>
            <li>-Non estamos. Vigo 2015</li>
            <li>-San Marcos. Salamanca 2014</li>
            <li>-Muestra Ciudad. Zamora 2014</li>
            <li>-Exit. La gota de leche, Logroño 2014</li>
            <li>-Visto por 25. La Alhóndiga, Zamora 2014</li>
          </ul>
        </section>
      </main>
      <aside className="my-12 flex flex-col border border-red-500">
        <h2 className="">Contact</h2>
        <section>
          <p>
            <span>Instagram</span> @raul.lorenzo.p
          </p>
          <p>
            <span>Mail</span> raullorenzoperez@gmail.com
          </p>
          <p>
            <span>Phone</span> (+34) 675651605
          </p>
        </section>
      </aside>
    </div>
  );
};

export default CV;
