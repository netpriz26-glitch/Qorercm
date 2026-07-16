"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";

type Panel = {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  speed: number;
};

const PANELS: Panel[] = [
  { position: [-1.6, 0.6, 0], size: [1.9, 1.2, 0.06], color: "#5eead4", speed: 1.1 },
  { position: [1.3, 1.1, -0.6], size: [1.5, 1.5, 0.06], color: "#67e8f9", speed: 0.9 },
  { position: [0.4, -0.8, 0.4], size: [2.1, 1.1, 0.06], color: "#2dd4bf", speed: 1.3 },
  { position: [-1.2, -1.3, -0.3], size: [1.3, 1.3, 0.06], color: "#22d3ee", speed: 0.8 },
  { position: [1.8, -0.3, 0.2], size: [1.1, 1.6, 0.06], color: "#5eead4", speed: 1.0 },
];

function Panels() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    // Gentle parallax toward the cursor.
    group.current.rotation.y = state.pointer.x * 0.25;
    group.current.rotation.x = -state.pointer.y * 0.15;
  });

  return (
    <group ref={group}>
      {PANELS.map((panel, i) => (
        <Float key={i} speed={panel.speed} rotationIntensity={0.4} floatIntensity={0.9}>
          <RoundedBox args={panel.size} radius={0.08} smoothness={4} position={panel.position}>
            <meshPhysicalMaterial
              color={panel.color}
              transparent
              opacity={0.35}
              roughness={0.15}
              metalness={0.1}
              transmission={0.4}
              thickness={0.5}
              clearcoat={1}
            />
          </RoundedBox>
        </Float>
      ))}
      <Sparkles count={60} scale={5} size={2} speed={0.3} color="#5eead4" opacity={0.6} />
    </group>
  );
}

export default function FloatingPanelsCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} color="#5eead4" />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#22d3ee" />
      <Suspense fallback={null}>
        <Panels />
      </Suspense>
    </Canvas>
  );
}
