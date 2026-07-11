"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import AmbientLighting from "./AmbientLighting";

export default function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.08;
      groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.02;
    }
  });

  return (
    <>
      <AmbientLighting />

      <group ref={groupRef}>
        {/* Portrait placeholder — will be replaced with 3D layered portrait */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[2.4, 2.4]} />
          <meshBasicMaterial
            color="#172A45"
            transparent
            opacity={0.5}
            side={2}
          />
        </mesh>

        {/* Glass frame placeholder */}
        <mesh position={[0, 0, -0.05]}>
          <planeGeometry args={[2.8, 2.8]} />
          <meshPhysicalMaterial
            color="#3082C5"
            transparent
            opacity={0.06}
            roughness={0.1}
            metalness={0.3}
            side={2}
          />
        </mesh>

        {/* Glass frame border */}
        <mesh position={[0, 0, -0.06]}>
          <ringGeometry args={[1.2, 1.4, 64]} />
          <meshBasicMaterial
            color="#3082C5"
            transparent
            opacity={0.3}
            side={2}
          />
        </mesh>
      </group>
    </>
  );
}
