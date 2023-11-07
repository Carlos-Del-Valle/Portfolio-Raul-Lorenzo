import Hero3dCanvas from "./Hero3dcanvas";

const MainBody = () => {
  return (
    <main className="top-0 mt-10 w-10/12 border  border-red-500">
      {/* Statement */}
      <div
        className="flex flex-row h-[95vh] justify-center translate-y-[-5rem]"
        id="statement"
      >
        <div className="flex flex-col w-5/12 ml-10 h-3/6 translate-y-[20rem]">
          <h3 className="writingTitle text-4xl mb-10 font-semibold italic font-sans">
            Statement
          </h3>
          <article className="max-w-5xl ml-12">
            <p className="writingBody first-letter:text-4xl text-left text-2xl font-normal">
              In my artistic work, I feel a persistent attraction towards
              objects of cultural heritage, where history becomes an emotional
              connection between the individual and the cultural elements that
              shape their identity. Through my work, I explore concepts such as
              the legibility of objects in their process of becoming ruins and
              the application of techniques from disciplines such as
              archaeology, museum conservation, and digital transformations.
              <br />
              <br />
              My main focus is to work on projects that materialize into
              sculptures and installations. Allowing formal exploration and
              studio work to guide me towards unexpected paths, different from
              what I originally planned, is essential to me. In this sense,
              mystery acts as a stimulus to investigate and develop new
              perspectives, while maintaining a sensitivity that preserves blind
              spots against overly literal interpretations.
            </p>
          </article>
        </div>
        <div className="w-6/12">
          <Hero3dCanvas />
        </div>
      </div>
      {/* HEEEE */}
      <div className="border-2 border-yellow-500 mx-12" id="heeee">
        <div className="h-[85vh] flex flex-row mb-20 border border-red-800">
          {/* 1st section */}
          <div className="w-6/12 h-6/6 border-rose-700 border flex flex-row justify-end items-center">
            <h2 className="text-7xl -translate-y-5">HEEEE</h2>
          </div>
          <div className="w-6/12 h-6/6 border-blue-700 border"></div>
        </div>
        <div className="h-[85vh] flex flex-row mb-20">
          {/* Contenido HEEEE 1/2 */}
          <div className="w-6/12 h-6/6 border-rose-700 border"></div>
          <div className="w-6/12 h-6/6 border-blue-700 border"></div>
        </div>
        <div className="h-[85vh] flex flex-row mb-20">
          {/* Contenido HEEEE 2/2 */}
          <div className="w-6/12 h-6/6 border-rose-700 border"></div>
          <div className="w-6/12 h-6/6 border-blue-700 border"></div>
        </div>
      </div>

      {/* Sin vuestro hierro caer;ia la noche */}
      <div
        className="border-2 border-yellow-500 mx-12"
        id="sinvuestrohierrocaerialanoche"
      >
        <div className="h-[85vh] flex flex-row mb-20 border border-red-800">
          {/* 1st section */}
          <div className="w-6/12 h-6/6 border-rose-700 border flex justify-end items-center">
            <h2 className="text-6xl -translate-y-5 whitespace-nowrap">
              Sin vuestro hierro caería la noche
            </h2>
          </div>
          <div className="w-6/12 h-6/6 border-blue-700 border"></div>
        </div>
      </div>

      {/* Escombro y ruina */}
      <div className="border-2 border-yellow-500 mx-12" id="escombroyruina">
        <div className="h-[85vh] flex flex-row mb-20 border border-red-800">
          {/* 1st section */}
          <div className="w-6/12 h-6/6 border-rose-700 border flex justify-end items-center">
            <h2 className="text-6xl -translate-y-5 whitespace-nowrap">
              Escombro y Ruina
            </h2>
          </div>
          <div className="w-6/12 h-6/6 border-blue-700 border"></div>
        </div>
      </div>

      {/* Funda */}
      <div className="border-2 border-yellow-500 mx-12" id="funda">
        <div className="h-[85vh] flex flex-row mb-20 border border-red-800">
          {/* 1st section */}
          <div className="w-6/12 h-6/6 border-rose-700 border flex justify-end items-center">
            <h2 className="text-6xl -translate-y-5 whitespace-nowrap">Funda</h2>
          </div>
          <div className="w-6/12 h-6/6 border-blue-700 border"></div>
        </div>
      </div>

      {/* BilbaoArte Residency */}
      <div
        className="border-2 border-yellow-500 mx-12"
        id="bilbaoarteresidency"
      >
        <div className="h-[85vh] flex flex-row mb-20 border border-red-800">
          {/* 1st section */}
          <div className="w-6/12 h-6/6 border-rose-700 border flex justify-end items-center">
            <h2 className="text-6xl -translate-y-5 whitespace-nowrap">
              Bilbaoarte residency
            </h2>
          </div>
          <div className="w-6/12 h-6/6 border-blue-700 border"></div>
        </div>
      </div>

      {/* Un todo ahora */}
      <div className="border-2 border-yellow-500 mx-12" id="untodoahora">
        <div className="h-[85vh] flex flex-row mb-20 border border-red-800">
          {/* 1st section */}
          <div className="w-6/12 h-6/6 border-rose-700 border flex justify-end items-center">
            <h2 className="text-6xl -translate-y-5 whitespace-nowrap">
              Un todo ahora
            </h2>
          </div>
          <div className="w-6/12 h-6/6 border-blue-700 border"></div>
        </div>
      </div>

      {/* Un perfume sin soporte un gasto puro */}
      <div
        className="border-2 border-yellow-500 mx-12"
        id="unperfumesinsoporteungastopuro"
      >
        <div className="h-[85vh] flex flex-row mb-20 border border-red-800">
          {/* 1st section */}
          <div className="w-6/12 h-6/6 border-rose-700 border flex justify-end items-center">
            <h2 className="text-5xl -translate-y-5 whitespace-nowrap">
              Un perfume sin soporte un gasto puro
            </h2>
          </div>
          <div className="w-6/12 h-6/6 border-blue-700 border"></div>
        </div>
      </div>
      <section className="pseudoFooter border border-pink-700 h-28 w-full"></section>
    </main>
  );
};

export default MainBody;
