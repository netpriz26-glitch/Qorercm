"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";

const NODE_COUNT = 14;

function useOrbitNodes() {
  return useMemo(() => {
    const nodes: [number, number, number][] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NODE_COUNT; i++) {
      const t = i / NODE_COUNT;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = goldenAngle * i;
      const radius = 2.1;
      nodes.push([
        radius * Math.sin(inclination) * Math.cos(azimuth),
        radius * Math.sin(inclination) * Math.sin(azimuth),
        radius * Math.cos(inclination),
      ]);
    }
    return nodes;
  }, []);
}

function Network() {
  const group = useRef<Group>(null);
  const nodes = useOrbitNodes();

  const edges = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      const a = new THREE.Vector3(...nodes[i]);
      let nearest: { index: number; dist: number }[] = [];
      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        const b = new THREE.Vector3(...nodes[j]);
        nearest.push({ index: j, dist: a.distanceTo(b) });
      }
      nearest = nearest.sort((x, y) => x.dist - y.dist).slice(0, 2);
      for (const n of nearest) {
        lines.push([a, new THREE.Vector3(...nodes[n.index])]);
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = state.pointer.y * 0.15;
  });

  return (
    <group ref={group}>
      <Sphere args={[0.55, 32, 32]}>
        <meshPhysicalMaterial
          color="#2dd4bf"
          transparent
          opacity={0.5}
          roughness={0.1}
          transmission={0.6}
          thickness={0.8}
          clearcoat={1}
        />
      </Sphere>
      {edges.map(([a, b], i) => (
        <Line key={i} points={[a, b]} color="#5eead4" transparent opacity={0.25} lineWidth={1} />
      ))}
      {nodes.map((position, i) => (
        <Float key={i} speed={1.2 + (i % 3) * 0.2} floatIntensity={0.6} rotationIntensity={0}>
          <Sphere args={[0.09, 16, 16]} position={position}>
            <meshStandardMaterial
              color={i % 2 === 0 ? "#5eead4" : "#67e8f9"}
              emissive={i % 2 === 0 ? "#2dd4bf" : "#22d3ee"}
              emissiveIntensity={0.8}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export default function OrbitNodesCanvas() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 42 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1} color="#5eead4" />
      <Suspense fallback={null}>
        <Network />
      </Suspense>
    </Canvas>
  );
}
