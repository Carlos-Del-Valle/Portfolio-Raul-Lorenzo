import Hero3dCanvas from "./Hero3dcanvas";

const MainBody = () => {
  return (
    <main className="top-0 mt-10 w-10/12 border  border-red-500">
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
      <div className="border-2 border-blue-500 w-50" id="heeee">
        <div className="h-[95vh]">
          <h1>HEEEE</h1>
        </div>
        <div className="h-[95vh] border-2 border-blue-500">
          <h1>Contenido HEEEE 1/2</h1>
        </div>
        <div className="h-[95vh] border-2 border-blue-500">
          <h1>Contenido HEEEE 2/2</h1>
        </div>
      </div>

      <div
        className="h-[95vh] border-2 border-blue-500"
        id="sinvuestrohierrocaerialanoche"
      >
        <h1>SIN VUESTRO HIERRO CAERÍA LA NOCHE</h1>
      </div>
      <div className="h-[95vh] border-2 border-blue-500" id="escombroyruina">
        <h1>ESCOMBRO Y RUINA</h1>
      </div>
      <div className="h-[95vh] border-2 border-blue-500" id="funda">
        <h1>FUNDA</h1>
      </div>
      <div
        className="h-[95vh] border-2 border-blue-500"
        id="bilbaoarteresidency"
      >
        <h1>BILBAOARTE RESIDENCY</h1>
      </div>
      <div className="h-[95vh] border-2 border-blue-500" id="untodoahora">
        <h1>UN TODO AHORA</h1>
      </div>
      <div
        className="h-[95vh] border-2 border-blue-500"
        id="unperfumesinsoporteungastopuro"
      >
        <h1>UN PERFUME SIN SOPORTE, UN GASTO PURO</h1>
      </div>
    </main>
  );
};

export default MainBody;
