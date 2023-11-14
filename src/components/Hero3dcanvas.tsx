import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Computers = () => {
  const computer = useGLTF("/prueba4/prueba4.gltf");
  const myMesh = React.useRef(null);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });

  return (
    // <mesh ref={myMesh}>
    <mesh ref={myMesh}>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        // scale={isMobile ? 0.7 : 0.75}
        scale={0.025}
        // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        position={[0, 0, 0]}
        //rotation={[-0.01, -0.2, -0.1]}
        rotation={[0, -0.45, 0]}
      />
    </mesh>
  );
};

const Hero3dCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Screen Size listener
    const mediaQuery = window.matchMedia("(max-width:500px)");
    // Setting the initial valua of 'isMobile' state
    setIsMobile(mediaQuery.matches);
    // Callback function handling media query changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Callback function as a listnener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Removing listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      //frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Hero3dCanvas;
