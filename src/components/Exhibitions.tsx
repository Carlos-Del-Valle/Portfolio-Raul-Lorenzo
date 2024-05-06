import { useRef, useEffect } from "react";

const Exhibitions = () => {
  const sectionRefs = useRef({});

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      // Remove event listeners when component unmounts
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []); // Empty dependency array to run this effect only once on mount

  const handleAnchorClick = (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = sectionRefs.current[targetId];

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="exhibitionsview" className="flex flex-row h-[90vh]">
      {/* Side Nav */}
      <nav className="sticky top-36 self-start left-0 w-2/12 m-0 h-[88vh] nav-shadow">
        <ul className=" my-12 flex flex-col space-y-8">
          {/* 1 - HEEEE */}
          <li>
            <a
              className="whitespace-nowrap nav-item text-[min(0.95vw,1rem)] leading-relaxed"
              href="#heeee"
            >
              HEEEE
            </a>
          </li>
          {/*2 - Sin vuestro hierro caería la noche */}
          <li>
            <a
              className="whitespace-nowrap nav-item text-center text-[min(0.95vw,1rem)] leading-relaxed"
              href="#sinvuestrohierrocaerialanoche"
            >
              Sin vuestro hierro
              <br />
              caería la noche
            </a>
          </li>
          {/* 3 - Escombro y ruina */}
          <li>
            <a
              className="whitespace-nowrap nav-item text-[min(0.95vw,1rem)] leading-relaxed"
              href="#escombroyruina"
            >
              Escombro y ruina
            </a>
          </li>
          {/* 4 - Funda */}
          <li>
            <a
              className="whitespace-nowrap nav-item text-[min(0.95vw,1rem)] leading-relaxed"
              href="#funda"
            >
              Funda
            </a>
          </li>
          {/* 5 - Bilbaoarte residency */}
          <li>
            <a
              className="whitespace-nowrap nav-item text-[min(0.95vw,1rem)] leading-relaxed"
              href="#bilbaoarteresidency"
            >
              Bilbao Arte Residency
            </a>
          </li>
          {/* 6 - Un todo ahora */}
          <li>
            <a
              className="whitespace-nowrap nav-item text-[min(0.95vw,1rem)] leading-relaxed"
              href="#untodoahora"
            >
              Un Todo Ahora
            </a>
          </li>
          {/* 7 - Un perfume sin soporte, un gasto puro */}
          <li>
            <a
              className="whitespace-nowrap nav-item text-center text-[min(0.95vw,1rem)] leading-relaxed"
              href="#unperfumesinsoporteungastopuro"
            >
              Un Perfume sin soporte <br />
              un gasto puro
            </a>
          </li>
        </ul>
      </nav>
      {/* Main Section */}
      <main className="top-0 mt-10 w-10/12 h-5/6">
        <div
          id="snap-wrapper"
          className="h-[80vh] w-[100wh] overflow-y-auto snap-y snap-mandatory"
        >
          {/* Land Image */}
          <section className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\untodoahora\_GH_4804 (1).webp"
              alt="foto de la obra Un todo ahora"
              title="Raul Lorenzo landing image"
              className="w-full h-5/6 object-contain"
              loading="lazy"
            />
          </section>
          {/* HEEEE */}
          <section
            ref={(ref) => {
              sectionRefs.current["heeee"] = ref;
            }}
            id="heeee"
            className="h-[80vh] mx-12 flex flex-row mb-40 snap-center"
          >
            {/* Título HEEEE */}
            <div className="w-6/12 h-6/6 flex justify-end items-center"></div>
            <div className="w-6/12 h-6/6 flex justify-center items-center">
              <h2 className="text-[min(2.50vw,3.50rem)] leading-relaxed -translate-y-5">
                HEEEE
              </h2>
            </div>
          </section>
          {/* Contenido HEEEE 1/4 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6">
              <img
                src="imgs\HEEEE\HEEEE-9compressed.webp"
                alt="foto de la obra HEEEE"
                title="HEEEE 1 de 4 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido HEEEE 2/4 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 snap-center justify-center items-center">
            <div className="w-12/12 h-6/6 flex flex-row justify-center gap-5">
              <img
                src="imgs\HEEEE\HEEEE-16compressed.webp"
                alt="foto de la obra HEEEE"
                title="HEEEE 2 de  4"
                className="w-9/12 h-5/6 object-contain"
                loading="lazy"
              />
              <p className="w-3/12 h-auto text-start text-[min(0.80vw,1rem)] leading-relaxed mt-2">
                In "HEEEE", I explore various denaturalized heritage elements
                from the city of Valencia by equating written language with
                visual language and bringing them closer to the concept of
                illegibility present in ruins.
                <br />
                <br />
                This artwork is part of the exhibition “PAMPAM!”, an award
                organized by the Master’s in Artistic Production at the
                Polytechnic University of Valencia.
              </p>
            </div>
          </div>
          {/* Contenido HEEEE 3/4 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6">
              <img
                src="imgs\HEEEE\HEEEE-6compressed.webp"
                alt="foto de la obra HEEEE"
                title="HEEEE 3 de 4 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido HEEEE 4/4 */}
          <div className="h-[80vh] flex flex-col justify-center items-center mx-12 mb-40 snap-center">
            <div className="h-full">
              <img
                src="imgs\HEEEE\HEEEE-1compressed.webp"
                alt="foto de la obra HEEEE"
                title="HEEEE 4 de 4"
                className="w-full object-contain mb-4 h-5/6"
                loading="lazy"
              />
              <div className=" text-start w-9/12 h-auto items-start ml-[5rem]">
                <h4 className="text-[min(0.80vw,1rem)] leading-relaxed font-bold mb-2">
                  HEEEE, 2018
                </h4>
                <p className="text-[min(0.80vw,1rem)] leading-relaxed">
                  Polystyrene, steel mesh, aluminum, plaster, glass <br />
                  600x300x430 cm. <br />
                  Reales Atarazanas de Valencia
                </p>
              </div>
            </div>
            {/* Sin vuestro hierro caería la noche */}
          </div>
          {/* Sin vuestro hierro caería la noche */}
          <section
            ref={(ref) => {
              sectionRefs.current["sinvuestrohierrocaerialanoche"] = ref;
            }}
            id="sinvuestrohierrocaerialanoche"
            className="mx-12 h-[80vh] flex flex-row mb-40 snap-center"
          >
            {/* Título Sin vuestro hierro caería la noche */}
            <div className="w-6/12 h-6/6"></div>
            <div className="w-6/12 h-6/6 flex justify-center items-center">
              <h2 className="text-[min(2.50vw,3.50rem)] leading-snug -translate-y-5">
                Sin vuestro hierro
                <br />
                caería la noche
              </h2>
            </div>
          </section>
          {/* Contenido Sin vuestro hierro caería la noche 1/9 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 snap-center">
            <div className="w-12/12 h-6/6 flex flex-row justify-center">
              <img
                src="imgs\sinvuestrohierrocaerialanoche\sin vuestro hierro-15.webp"
                alt="foto de la obra Sin vuestro hierro caería la noche"
                title="Sin vuestro hierro caería la noche 1 de 9 "
                className=" w-auto h-full object-contain"
                loading="lazy"
              />
              <p className="text-[min(0.80vw,1rem)] leading-relaxed w-2/6 text-start ml-5 self-end -translate-y-8">
                In collaboration with the Zamora Museum, I sought to establish a
                dialogue with the preserved heritage objects there to reflect on
                aspects as museological assembly and the archaeological site. My
                research and search for guidance focused on reproducing ceramic
                production techniques from the Paleolithic era. <br />
                <br />
                Additionally, I created drawings using a drawbot and combined
                them with steel plates, thus merging elements of technical
                blueprint drawings with oil stains.
              </p>
            </div>
          </div>
          {/* Contenido Sin vuestro hierro caería la noche 2/9 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6">
              <img
                src="imgs\sinvuestrohierrocaerialanoche\sin-vuestro-hierro-23.webp"
                alt="foto de la obra Sin vuestro hierro caería la noche"
                title="Sin vuestro hierro caería la noche 2 de 9 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Sin vuestro hierro caería la noche 3/9 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-6/12 h-6/6">
              <img
                src="imgs\sinvuestrohierrocaerialanoche\sin-vuestro-hierro-20.webp"
                alt="foto de la obra Sin vuestro hierro caería la noche"
                title="Sin vuestro hierro caería la noche 3 de 9 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Sin vuestro hierro caería la noche 4/9 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\sinvuestrohierrocaerialanoche\sin vuestro hierro-14.webp"
              alt="foto de la obra Sin vuestro hierro caería la noche"
              title="Sin vuestro hierro caería la noche 4 de 9 "
              className="w-full h-5/6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Contenido Sin vuestro hierro caería la noche 5/9 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <div className="w-12/12 h-5/6">
              <img
                src="imgs\sinvuestrohierrocaerialanoche\sin vuestro hierro-3.webp"
                alt="foto de la obra Sin vuestro hierro caería la noche"
                title="Sin vuestro hierro caería la noche 5 de 9 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Sin vuestro hierro caería la noche 6/9 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <div className="w-12/12 h-5/6">
              <img
                src="imgs\sinvuestrohierrocaerialanoche\sin vuestro hierro-5.webp"
                alt="foto de la obra Sin vuestro hierro caería la noche"
                title="Sin vuestro hierro caería la noche 6 de 9"
                className=" w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Sin vuestro hierro caería la noche 7/9 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6 flex flex-col justify-between">
              <img
                src="imgs\sinvuestrohierrocaerialanoche\sin vuestro hierro-9.webp"
                alt="foto de la obra Sin vuestro hierro caería la noche"
                title="Sin vuestro hierro caería la noche 7 de 9 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Sin vuestro hierro caería la noche 8/9 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6">
              <img
                src="imgs\sinvuestrohierrocaerialanoche\sin-vuestro-hierro-34.webp"
                alt="foto de la obra Sin vuestro hierro caería la noche"
                title="Sin vuestro hierro caería la noche 8 de 9 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido sinvuestrohierrocaerialanoche 9/9 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6 flex flex-col justify-center">
              <img
                src="imgs\sinvuestrohierrocaerialanoche\sin-vuestro-hierro-32.webp"
                alt="foto de la obra HEEEE"
                title="HEEEE 9 de 9 "
                className="w-full h-5/6 object-contain mb-4"
                loading="lazy"
              />
              <div className="w-5/12 h-auto ml-20 text-start">
                <h4 className="font-bold mb-2 text-[min(0.80vw,1rem)] leading-relaxed">
                  Sin vuestro hierro caería la noche, 2019
                </h4>
                <p className="text-[min(0.80vw,1rem)] leading-relaxed">
                  Ceramics, steel, tracing paper, vegetable oil
                  <br />
                  600x300x430 cm.
                  <br />
                  Museo de Zamora
                </p>
              </div>
            </div>
          </div>
          {/* Escombro y ruina */}
          <section
            ref={(ref) => {
              sectionRefs.current["escombroyruina"] = ref;
            }}
            id="escombroyruina"
            className="h-[80vh] flex flex-row mb-40 mx-12 snap-center"
          >
            {/* 1st section */}
            <div className="w-6/12 h-6/6 "></div>
            <div className="w-6/12 h-6/6  flex justify-center items-center">
              <h2 className="text-[min(2.50vw,3.50rem)] leading-relaxed -translate-y-5">
                Escombro y Ruina
              </h2>
            </div>
          </section>
          {/* Contenido Escombro y ruina 1/2 */}
          <div className="h-[80vh] flex mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\escombroyruina\IMG_7182 (1).webp"
              alt="foto de la obra Escombro y ruina"
              title="Escombro y ruina 1 de 2 "
              className="w-full h-5/6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Contenido Escombro y ruina 2/2 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6 flex flex-col">
              <img
                src="imgs\escombroyruina\IMG_7289 2 (1).webp"
                alt="foto de la obra Escombro y ruina"
                title="Escombro y ruina 2 de 2"
                className="w-full h-5/6 object-contain  mb-4"
                loading="lazy"
              />
              <div className="w-5/12 h-auto ml-20 text-start">
                <h4 className="font-bold mb-2 text-[min(0.80vw,1rem)] leading-relaxed">
                  Escombro y ruina, 2017
                </h4>
                <p className="text-[min(0.80vw,1rem)] leading-relaxed">
                  ABS plastic, plaster, lightbox, backlit canvas <br />
                  230x327x172 cm. <br />
                  Facultad de Bellas Artes de Valencia
                </p>
              </div>
            </div>
          </div>
          {/* Funda */}
          <section
            ref={(ref) => {
              sectionRefs.current["funda"] = ref;
            }}
            id="funda"
            className="h-[80vh] flex flex-row mb-40 mx-12 snap-center"
          >
            {/* Título Funda */}
            <div className="w-6/12 h-6/6 "></div>
            <div className="w-6/12 h-6/6 flex justify-center items-center">
              <h2 className="text-[min(2.50vw,3.50rem)] leading-relaxed -translate-y-5 ">
                Funda
              </h2>
            </div>
          </section>
          {/* Contenido Funda 1/3 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6 flex flex-col">
              <img
                src="imgs\funda\funda-2.webp"
                alt="foto de la obra Funda"
                title="Funda 1 de 3 "
                className="w-full h-5/6 object-contain mb-4"
                loading="lazy"
              />
              <div className="w-5/12 h-1/6 ml-20 text-start">
                <h4 className="text-[min(0.80vw,1rem)] leading-relaxed font-bold mb-2">
                  Funda, 2018
                </h4>
                <p className="text-[min(0.80vw,1rem)] leading-relaxed">
                  A5 publication
                  <br />
                  <a
                    href="https://www.dropbox.com/
s/2rb7cyevli6gsaa/funda.pdf?dl=0)"
                    className="font-semibold"
                    target="_blank"
                  >
                    Download
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Contenido Funda 2/3 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\funda\funda-4.webp"
              alt="foto de la obra Funda"
              title="Funda 2 de 3"
              className=" w-full h-5/6 object-contain "
              loading="lazy"
            />
          </div>
          {/* Contenido Funda 3/3 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\funda\funda-3.webp"
              alt="foto de la obra Funda"
              title="Funda 3 de 3 "
              className=" w-full h-5/6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Residencia Bilbao Arte*/}
          <section
            ref={(ref) => {
              sectionRefs.current["bilbaoarteresidency"] = ref;
            }}
            id="bilbaoarteresidency"
            className="h-[80vh] flex flex-row mb-40 mx-12 snap-center"
          >
            {/* Título Residencia Bilbao Arte */}
            <div className="w-6/12 h-6/6  "></div>
            <div className="w-6/12 h-6/6 flex justify-center items-center">
              <h2 className="text-[min(2.50vw,3.50rem)] leading-relaxed -translate-y-5">
                Bilbaoarte residency
              </h2>
            </div>
          </section>
          {/* Contenido Residencia Bilbao Arte 1/3 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\bilbaoarteresidency\bilbaoarte-2.webp"
              alt="foto de la obra Residencia Bilbao Arte"
              title="Residencia Bilbao Arte 1 de 3 "
              className=" object-contain w-full h-5/6"
              loading="lazy"
            />
          </div>
          {/* Contenido Residencia Bilbao Arte 2/3 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-5/6 flex flex-col">
              <img
                src="imgs\bilbaoarteresidency\bilbaoarte-5.webp"
                alt="foto de la obra Residencia Bilbao Arte"
                title="Residencia Bilbao Arte 2 de 3 "
                className="object-contain w-full h-full mb-3"
                loading="lazy"
              />
              <div className="w-5/12 h-1/6 ml-20 text-start">
                <h4 className="text-[min(0.80vw,1rem)] leading-relaxed font-bold mb-1 whitespace-nowrap">
                  Open doors, residence at Bilbaoarte, 2018
                </h4>
                <p className="whitespace-nowrap text-[min(0.80vw,1rem)] leading-relaxed">
                  Glazed ceramics, printed photography, <br />
                  concrete, soil, pine wood, polyester resin <br />
                  450x325x195 cm. <br />
                  Bilbaoarte
                </p>
              </div>
            </div>
          </div>
          {/* Contenido Residencia Bilbao Arte 3/3 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\bilbaoarteresidency\bilbaoarte-16.webp"
              alt="foto de la obra Residencia Bilbao Arte"
              title="Residencia Bilbao Arte 3 de 3 "
              className="w-full h-5/6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Un todo ahora */}
          <section
            id="untodoahora"
            ref={(ref) => {
              sectionRefs.current["untodoahora"] = ref;
            }}
            className="h-[80vh] flex flex-row mb-40 mx-12 snap-center"
          >
            {/* Título Un todo ahora */}
            <div className="w-6/12 h-6/6 "></div>
            <div className="w-6/12 h-6/6  flex justify-center items-center">
              <h2 className="text-[min(2.50vw,3.50rem)] leading-relaxed -translate-y-5">
                Un todo ahora
              </h2>
            </div>
          </section>
          {/* Contenido Un todo ahora 1/7 */}
          <div className="h-[80vh] flex flex-row justify-center items-center mx-12 snap-center mb-40">
            <div className="w-12/12 h-6/6 flex flex-row justify-center">
              <p className="w-3/12 h-auto mr-5 mt-2 text-start text-[min(0.80vw,1rem)] leading-relaxed">
                “Un Todo Ahora” was the exhibition that marked the inauguration
                of the Saceca space in Valencia. This artistic proposal was a
                collaboration between the artist Carlos Peris and myself, in
                which we explored an extensive archive of sculptural
                digitizations from various eras and cultures. <br />
                <br />
                Through the use of 3D printing, we carried out reproductions and
                copies on molds, aiming to investigate how the digital footprint
                endures in these processes of translation to different languages
                and materials. <br />
                <br />
                “Un Todo Ahora” opens a field of research that brings together
                themes such as museum display and conservation, material
                substitution, copying, and deception.
              </p>
              <img
                src="imgs\untodoahora\_GH_4838 (1).webp"
                alt="foto de la obra Un todo ahora"
                title="Un todo ahora 1 de 7 "
                className="w-9/12 h-5/6 object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Un todo ahora 2/7 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\untodoahora\_GH_4913 (1).webp"
              alt="foto de la obra Un todo ahora"
              title="Un todo ahora 2 de 7 "
              className="w-full h-5/6
              object-contain"
              loading="lazy"
            />
          </div>
          {/* Contenido Un todo ahora 3/7 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\untodoahora\_GH_4804 (1).webp"
              alt="foto de la obra Un todo ahora"
              title="Un todo ahora 3 de 7 "
              className="w-full h-5/6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Contenido Un todo ahora 4/7 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\untodoahora\_GH_4730 (1).webp"
              alt="foto de la obra Un todo ahora"
              title="Un todo ahora 4 de 7 "
              className="w-full h-5/6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Contenido Un todo ahora 5/7 */}
          <div className="h-[80vh] flex flex-row justify-center items-center mb-40 mx-12 snap-center">
            <img
              src="imgs\untodoahora\_GH_4936 (1).webp"
              alt="foto de la obra Un todo ahora"
              title="Un todo ahora 5 de 7 "
              className=" w-full h-5/6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Contenido Un todo ahora 6/7 */}
          <div className="h-[80vh] mb-40 mx-12 flex flex-col items-center snap-center">
            <div className="h-5/6 flex flex-col">
              <img
                src="imgs\untodoahora\_GH_4795 (1).webp"
                alt="foto de la obra Un todo ahora"
                title="Un todo ahora 6/7"
                className="w-full h-full object-contain mb-4"
                loading="lazy"
              />
              <div className="w-5/12 h-1/6 ml-14 text-start">
                <h4 className="font-bold mb-2 whitespace-nowrap text-[min(0.80vw,1rem)] leading-relaxed">
                  Un todo ahora, 2021
                </h4>
                <p className="whitespace-nowrap text-[min(0.80vw,1rem)] leading-relaxed">
                  Polystyrene, printed PLA, plaster, steel <br />
                  1730x932x356 cm. <br />
                  Saceca, Sagunto (Valencia)
                </p>
              </div>
            </div>
          </div>
          {/* Contenido Un todo ahora 7/7 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 items-center justify-center snap-center">
            <img
              src="imgs\untodoahora\_GH_4821 (1).webp"
              alt="foto de la obra Un todo ahora"
              title="Un todo ahora 7 de 7 "
              className="w-full h-5/6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Un perfume sin soporte un gasto puro */}
          <section
            id="unperfumesinsoporteungastopuro"
            ref={(ref) => {
              sectionRefs.current["unperfumesinsoporteungastopuro"] = ref;
            }}
            className="h-[80vh] flex flex-row mb-40 mx-12 snap-center"
          >
            {/* Título Un perfume sin soporte un gasto puro */}
            <div className="w-6/12 h-6/6"></div>
            <div className="w-6/12 h-6/6 flex justify-center items-center">
              <h2 className="text-[min(2.50vw,3.50rem)] leading-snug -translate-y-5">
                Un perfume sin soporte <br />
                un gasto puro
              </h2>
            </div>
          </section>
          {/* Contenido Un perfume sin soporte un gasto puro 1/8 */}
          <div className="h-[80vh] flex flex-row mx-12 justify-center snap-center mb-40">
            <div className="w-12/12 h-6/6">
              <img
                src="imgs\unperfumesinsoporteungastopuro\Un perfume sin soporte, un gasto puro-26.webp"
                alt="foto de la obra Un perfume sin soporte un gasto puro"
                title="Un perfume sin soporte un gasto puro 1 de 8 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Un perfume sin soporte un gasto puro 2/8 */}
          <div className="h-[80vh] mx-12 snap-center flex items-center justify-center mb-40">
            <div className="flex flex-row">
              <img
                src="imgs\unperfumesinsoporteungastopuro\Un perfume sin soporte, un gasto puro-2.webp"
                alt="foto de la obra Un perfume sin soporte un gasto puro"
                title="Un perfume sin soporte un gasto puro 2 de 8 "
                className="w-9/12 h-6/6 object-contain mb-8 "
                loading="lazy"
              />
              <p className="w-3/12 h-6/6 ml-8 translate-y-1 text-start text-[min(0.80vw,1rem)] leading-relaxed">
                “Un perfume sin soporte, un gasto puro” was a duo collaboration
                I conducted with the artist Marina González Guerreiro at the
                Estrany de la Mota gallery for the Blueproject Foundation. The
                exhibition became a meeting point of our shared personal journey
                as artists.
                <br />
                <br />
                For this show, I dedicated myself to creating a series of steel
                sculptures and a series of works called “Derrame.” These
                sculptures, resembling steel canvases, incorporated material
                from other melted metals onto their surface, subjecting the
                objects to the violence of metallurgical processes that leave a
                trace and receive these incidents in a pictorial way.
              </p>
            </div>
          </div>
          {/* Contenido Un perfume sin soporte un gasto puro 3/8 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6">
              <img
                src="imgs\unperfumesinsoporteungastopuro\Un perfume sin soporte, un gasto puro-24.webp"
                alt="foto de la obra Un perfume sin soporte un gasto puro"
                title="Un perfume sin soporte un gasto puro 3 de 8 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Un perfume sin soporte un gasto puro 4/8 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6">
              <img
                src="imgs\unperfumesinsoporteungastopuro\Un perfume sin soporte, un gasto puro-13.webp"
                alt="foto de la obra Un perfume sin soporte un gasto puro"
                title="Un perfume sin soporte un gasto puro 4 de 8 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Un perfume sin soporte un gasto puro 5/8 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center items-center snap-center">
            <img
              src="imgs\unperfumesinsoporteungastopuro\Un perfume sin soporte, un gasto puro-30.webp"
              alt="foto de la obra Un perfume sin soporte un gasto puro"
              title="Un perfume sin soporte un gasto puro 5 de 8 "
              className="w-full h-5/6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Contenido Un perfume sin soporte un gasto puro 6/8 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6">
              <img
                src="imgs\unperfumesinsoporteungastopuro\Un perfume sin soporte, un gasto puro-9.webp"
                alt="foto de la obra Un perfume sin soporte un gasto puro"
                title="Un perfume sin soporte un gasto puro 6 de 8 "
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Un perfume sin soporte un gasto puro 7/8 */}
          <div className="h-[80vh] flex flex-row mb-40 mx-12 justify-center snap-center">
            <div className="w-12/12 h-6/6">
              <img
                src="imgs\unperfumesinsoporteungastopuro\Un perfume sin soporte, un gasto puro-25.webp"
                alt="Un perfume sin soporte un gasto puro"
                title="Un perfume sin soporte un gasto puro 7/8"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          {/* Contenido Un perfume sin soporte un gasto puro 8/8 */}
          <div className="h-[80vh] flex flex-col mb-40 mx-12 items-center snap-center ">
            <div className="h-5/6">
              <img
                src="imgs\unperfumesinsoporteungastopuro\Un perfume sin soporte, un gasto puro-3.webp"
                alt="foto de la obra Un perfume sin soporte un gasto puro"
                title="Un perfume sin soporte un gasto puro 8 de 8"
                className="w-full h-full object-contain mb-4"
                loading="lazy"
              />
              <div className="w-full h-1/6 flex">
                <div className="w-12/12 h-2/6 ml-20 text-start mb-3">
                  <h4 className="font-bold mb-2 text-[min(0.80vw,1rem)] leading-relaxed">
                    Un perfume sin soporte, un gasto puro, 2023
                  </h4>
                  <p className="text-[min(0.80vw,1rem)] leading-relaxed">
                    Steel, copper, brass, nickel, cotton, printed PLA
                  </p>
                </div>
                <div className="w-12/12 h-3/6 ml-20 text-start mb-3">
                  <h4 className="text-[min(0.80vw,1rem)] leading-relaxed font-bold mb-2">
                    Derrame series, 2023
                  </h4>
                  <p className="text-[min(0.80vw,1rem)] leading-relaxed mb-1.5">
                    Metal canvases <br />
                    various sizes, ranging from 100x66 cm to 30x20 cm.
                  </p>
                  <p className="text-[min(0.80vw,1rem)] leading-relaxed">
                    Estrany de la Mota Gallery, Barcelona
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Exhibitions;
