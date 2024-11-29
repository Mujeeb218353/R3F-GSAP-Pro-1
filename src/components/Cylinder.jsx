import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Cylinder = () => {
  const cylinder = useRef();
  const texture = useTexture("./cyl.png");

  useFrame((state, delta) => {
    cylinder.current.rotation.y += delta* 0.5;
  });
  return (
    <group rotation={[0, 2, 0.5]}>
      <mesh ref={cylinder}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial
          side={THREE.DoubleSide}
          transparent
          map={texture}
          metalness={0.5}
          roughness={0.5}
          lightMapIntensity={5}
        />
      </mesh>
    </group>
  );
};

export default Cylinder;
