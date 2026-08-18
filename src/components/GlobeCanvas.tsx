"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function RotatingGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const shouldReduceMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (shouldReduceMotion) return;

    if (globeRef.current) {
      const targetX = state.pointer.y * 0.22 + state.clock.elapsedTime * 0.035;
      const targetY = state.pointer.x * 0.22 + state.clock.elapsedTime * 0.075;
      globeRef.current.rotation.x = THREE.MathUtils.damp(
        globeRef.current.rotation.x,
        targetX,
        4,
        delta,
      );
      globeRef.current.rotation.y = THREE.MathUtils.damp(
        globeRef.current.rotation.y,
        targetY,
        4,
        delta,
      );
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.035;
    }
  });

  const positions = useMemo(() => {
    const count = 1100;
    const radius = 2.58;
    const values = new Float32Array(count * 3);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let index = 0; index < count; index += 1) {
      const y = 1 - (index / (count - 1)) * 2;
      const ringRadius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * index;

      values[index * 3] = radius * ringRadius * Math.cos(theta);
      values[index * 3 + 1] = radius * y;
      values[index * 3 + 2] = radius * ringRadius * Math.sin(theta);
    }

    return values;
  }, []);

  return (
    <group>
      <mesh ref={globeRef}>
        <sphereGeometry args={[2.5, 44, 44]} />
        <meshBasicMaterial
          color="#6f2ba8"
          wireframe
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.026}
          color="#c58bff"
          transparent
          opacity={0.76}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <mesh>
        <sphereGeometry args={[2.4, 24, 24]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </group>
  );
}

export default function GlobeCanvas({ active }: { active: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`h-full w-full [contain:strict] ${active ? "" : "pointer-events-none"}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.4]}
        frameloop={active && !shouldReduceMotion ? "always" : "demand"}
      >
        <RotatingGlobe />
      </Canvas>
    </div>
  );
}
