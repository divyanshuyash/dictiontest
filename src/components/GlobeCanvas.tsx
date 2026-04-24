"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function RotatingGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Fandom globe logic (rotating sphere with dots or wireframe + interactive mouse tracking)
  useFrame((state, delta) => {
    // Subtle pointer interaction mapping
    const targetX = state.pointer.y * 0.4;
    const targetY = state.pointer.x * 0.4;

    if (meshRef.current) {
      const baseRotY = state.clock.elapsedTime * 0.1;
      const baseRotX = state.clock.elapsedTime * 0.05;
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY + baseRotY, 0.05);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX + baseRotX, 0.05);
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05;
      pointsRef.current.rotation.z += delta * 0.02;
    }
  });

  const particlesCount = 2000;
  const positions = useMemo(() => {
    const arr = new Float32Array(particlesCount * 3);
    const radius = 2.6;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < particlesCount; i++) {
      // Deterministic Fibonacci-sphere distribution avoids random generation in render.
      const y = 1 - (i / (particlesCount - 1)) * 2;
      const ringRadius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;

      arr[i * 3] = radius * ringRadius * Math.cos(theta);
      arr[i * 3 + 1] = radius * y;
      arr[i * 3 + 2] = radius * ringRadius * Math.sin(theta);
    }

    return arr;
  }, []);

  return (
    <group position={[0, -0.5, 0]}> {/* Shift slightly down like FandomAlbum */}
      {/* Core Spectral Sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial 
          color="#3b076b" 
          emissive="#591399"
          emissiveIntensity={1.5}
          wireframe={true} 
          wireframeLinewidth={1}
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Surrounding Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
            />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#d8a1ff" transparent opacity={0.8} sizeAttenuation={true} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>

      {/* Inner Black Hole Core */}
      <mesh>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </group>
  );
}

export default function GlobeCanvas() {
  return (
    <div className="w-full h-full cursor-crosshair">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#a855f7" />
        <directionalLight position={[-5, -5, -5]} intensity={1} color="#ffffff" />
        <RotatingGlobe />
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={2.5} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
