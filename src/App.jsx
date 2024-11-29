import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cylinder from "./components/Cylinder.jsx";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function App() {
  const { contextSafe } = useGSAP();
  const textRef = useRef()
  useGSAP(() => {
    gsap.from(textRef.current.children, { 
        y: 200,
        duration: 2,
        delay: 1.5,
        stagger: {
          each: 0.1,
          from: "random",
          amount: 0.5
        },
        ease: "elastic.out(1, 0.3)"
      },
    );
  }, [contextSafe]);
  return (
    <>
      <Canvas
        className="w-full h-full min-h-screen bg-black flex flex-col justify-center items-center"
        camera={{ fov: 35 }}
        flat
      >
        <OrbitControls />
        <ambientLight intensity={5}/>
        <Cylinder />
        <EffectComposer>
          <Bloom
            intensity={10} // The bloom intensity.
            luminanceThreshold={1} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={1} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur={true} // Enables or disables mipmap blur.
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
      <div className="w-full h-32 fixed bottom-20 text-white backdrop-brightness-50 bg-black/30 flex justify-center items-center">
          <h1 className="w-full text-center text-7xl" ref={textRef}>
            {"My Portfolio".split("").map((ch, i) => <span key={i} style={{ display: "inline-block", position: "relative" }} >{ch}</span>)}
          </h1>
      </div>
    </>
  );
}

export default App;
