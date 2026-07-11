"use client";

import { useEffect, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Scene from "@/components/splash/Scene";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-navy-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        style={{ background: "#0A192F" }}
      >
        <Scene />
      </Canvas>
    </motion.div>
  );
}
