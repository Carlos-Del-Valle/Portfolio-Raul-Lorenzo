const CV = () => {
  return (
    <div className="flex flex-row mx-16 space-x-4">
      {/* CV */}
      <main className="my-24 w-9/12 ml-28">
        <h2 className="text-4xl font-sans mb-6">Curriculum Vitae</h2>
        <section className="ml-2 mb-8">
          <ul className="ml-2">
            <li>&#8208; Master of Arts in Art Production, UPV, Valencia</li>
            <li>&#8208; Bachelor of Arts in Fine Arts, Salamanca</li>
            <li>&#8208; Co-founder and curator, Saceca, Sagunto</li>
          </ul>
        </section>

        <section className="ml-2 mb-8">
          <h4 className="ml-2 mb-2 font-semibold">Residencies</h4>
          <ul className="ml-4">
            <li>&#8208; Bilbaoarte, Bilbao 2017</li>
            <li>&#8208; Residencias A Quemarropa, Alicante 2016</li>
            <li>&#8208; Espacio Matrioska, Os Blancos (Ourense), 2015</li>
          </ul>
        </section>

        <section className="ml-2 mb-8">
          <h4 className="ml-2 mb-2 font-semibold">Awards and calls</h4>
          <ul className="ml-4">
            <li>
              &#8208; III Becas Fundación Villalar –Castilla y León de creación
              artística contemporánea. Valladolid 2019
            </li>
            <li>&#8208; PAMPAM! 2017. Valencia</li>
            <li>&#8208; Beca Fundación Carmen Izquierdo. Valencia, 2017.</li>
            <li>&#8208; Transportarte. Valencia, 2017</li>
            <li>&#8208; Jóvenes pintores. La Gaceta, Salamanca, 2015</li>
          </ul>
        </section>

        <section className="ml-2 mb-8">
          <h4 className="ml-2 mb-2 font-semibold">Texts</h4>
          <ul className="ml-4">
            <li>
              &#8208; Exhibition sheet for the exhibition Coraza y Ornamento.
              Saceca, Sagunto 2023
            </li>
            <li>
              &#8208; Text for the catalogue of the cycle Mi Fantástico
              Interior. La Casa Encendida, Madrid 2022{" "}
            </li>
            <li>
              &#8208; Exhibition sheet for the exhibition Hacer Después. Saceca,
              Sagunto 2022
            </li>
            <li>
              &#8208; Exhibition sheet for the exhibition Given Time.
              Intersticio, London 2021
            </li>
          </ul>
        </section>

        <section className="ml-2 mb-8">
          <h4 className="ml-2 mb-2 font-semibold">Duo</h4>
          <ul className="ml-4">
            <li>
              &#8208; Un todo ahora. Raúl Lorenzo and Carlos Peris. Saceca,
              Sagunto 2022
            </li>
            <li>
              &#8208; Un perfume sin soporte, un gasto puro. Raúl Lorenzo and
              Marina G. Guerreiro, Estrany de la Mota, Barcelona 2023
            </li>
          </ul>
        </section>

        <section className="ml-2 mb-8">
          <h4 className="ml-2 mb-2 font-semibold">Solos</h4>
          <ul className="ml-4">
            <li>
              &#8208; Sin vuestro hierro caería la noche. Museo de Zamora,
              Zamora 2020
            </li>
            <li>&#8208; HEEEE, Atarazanas. Valencia 2018</li>
            <li>&#8208; La fiebre. Espacio Joven, Salamanca 2014</li>
          </ul>
        </section>

        <section className="ml-2">
          <h4 className="ml-2 mb-2 font-semibold">Group exhibitions</h4>
          <ul className="ml-4">
            <li>
              &#8208; Becas de la Fundación Villalar. Palacio de las Cortes de
              CyL, Valladolid 2020
            </li>
            <li>&#8208; Exhibition. EMAC, Valencia 2019</li>
            <li>&#8208; Open studio. Bilbaoarte, Bilbao 2017</li>
            <li>
              &#8208; Open Studio. Residencias a Quemarropa, Las Cigarreras,
              Alicante 2016
            </li>
            <li>&#8208; Morralla, Russafart, Valencia 2016</li>
            <li>
              &#8208; Una Mirada Sustractiva. Campus de Vera de Valencia, 2016
            </li>
            <li>&#8208; Carambola. Zamora 2015</li>
            <li>&#8208; Non estamos. Vigo 2015</li>
            <li>&#8208; San Marcos. Salamanca 2014</li>
            <li>&#8208; Muestra Ciudad. Zamora 2014</li>
            <li>&#8208; Exit. La gota de leche, Logroño 2014</li>
            <li>&#8208; Visto por 25. La Alhóndiga, Zamora 2014</li>
          </ul>
        </section>
      </main>
      {/* Contact */}
      <aside className="flex flex-col sticky top-56 my-24 self-start w-3/12">
        <h2 className="text-4xl font-sans mb-6">Contact</h2>
        <section className="ml-2">
          <p className="mb-1 text-base font-normal">
            <span className="font-medium">Instagram</span> &nbsp;&nbsp;&nbsp;
            <a
              href="https://www.instagram.com/raul.lorenzo.p/"
              target="_blank"
              className="font-normal"
            >
              @raul.lorenzo.p
            </a>
          </p>
          <p className="mb-1 text-base font-normal">
            <span className="font-medium">Mail</span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raullorenzoperez@gmail.com
          </p>
        </section>
      </aside>
    </div>
  );
};

export default CV;
