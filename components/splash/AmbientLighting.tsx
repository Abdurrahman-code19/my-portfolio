"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AmbientLighting() {
  const pointLightRef = useRef<THREE.PointLight>(null);
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const topLightRef = useRef<THREE.DirectionalLight>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const progress = useRef(0);

  useEffect(() => {
    progress.current = 0;
  }, []);

  useFrame((_, delta) => {
    progress.current = Math.min(progress.current + delta * 1.2, 1);
    const ease = 1 - Math.pow(1 - progress.current, 3);

    if (ambientRef.current) ambientRef.current.intensity = 0.4 * ease;
    if (pointLightRef.current) pointLightRef.current.intensity = 1.5 * ease;
    if (topLightRef.current) topLightRef.current.intensity = 0.8 * ease;

    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.06 * ease;
    }

    const t = progress.current * 2;
    if (pointLightRef.current) {
      pointLightRef.current.position.x = Math.sin(t * 0.3) * 0.3;
      pointLightRef.current.position.y = Math.sin(t * 0.4 + 1) * 0.2;
    }
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0} color="#3082C5" />
      <directionalLight
        ref={topLightRef}
        position={[0.5, 3, 4]}
        intensity={0}
        color="#3082C5"
      />
      <pointLight
        ref={pointLightRef}
        position={[0, 0, 2.5]}
        intensity={0}
        distance={6}
        decay={1.5}
        color="#3082C5"
      />

      <mesh ref={glowRef} position={[0, 0, 0.5]}>
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial
          color="#3082C5"
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}
