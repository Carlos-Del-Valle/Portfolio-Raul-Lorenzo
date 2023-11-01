import Hero3dCanvas from "./Hero3dcanvas";

const MainBody = () => {
  return (
    <div>
      <div className="h-50 w-24 border border-red-500 ">
        <Hero3dCanvas/>
      </div>
      <main className="top-0 left-32 mt-10 mx-10 border-2 border-red-500 w-110">
        <div className="h-screen border-2 border-blue-500" id="statement">
          <h1>LANDING IMAGE or MOSAIC or 3D EYE CATCHER</h1>
        </div>
        <div className="h-screen border-2 border-blue-500" id="heeee">
          <h1>HEEEE</h1>
        </div>
        <div className="h-screen border-2 border-blue-500">
          <h1>Contenido HEEEE 1/2</h1>
        </div>
        <div className="h-screen border-2 border-blue-500">
          <h1>Contenido HEEEE 2/2</h1>
        </div>
        <div
          className="h-screen border-2 border-blue-500"
          id="sinvuestrohierrocaerialanoche"
        >
          <h1>SIN VUESTRO HIERRO CAERÍA LA NOCHE</h1>
        </div>
        <div className="h-screen border-2 border-blue-500" id="escombroyruina">
          <h1>ESCOMBRO Y RUINA</h1>
        </div>
        <div className="h-screen border-2 border-blue-500" id="funda">
          <h1>FUNDA</h1>
        </div>
        <div
          className="h-screen border-2 border-blue-500"
          id="bilbaoarteresidency"
        >
          <h1>BILBAOARTE RESIDENCY</h1>
        </div>
        <div className="h-screen border-2 border-blue-500" id="untodoahora">
          <h1>UN TODO AHORA</h1>
        </div>
        <div
          className="h-screen border-2 border-blue-500"
          id="unperfumesinsoporteungastopuro"
        >
          <h1>UN PERFUME SIN SOPORTE, UN GASTO PURO</h1>
        </div>
      </main>
    </div>
  );
};

export default MainBody;
