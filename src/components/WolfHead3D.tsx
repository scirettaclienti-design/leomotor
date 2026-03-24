import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// An abstract 3D liquid metal/smoke sphere to simulate the "wolf head morphing" concept
function AbstractWolfHead() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.pointer.x * 0.5;
      meshRef.current.rotation.x = -state.pointer.y * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color="#000000"
          envMapIntensity={3}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={1}
          roughness={0.1}
          distort={0.4}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

const WolfHead3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#D4AF37" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        
        <AbstractWolfHead />
        
        {/* Environment for liquid metal reflection */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default WolfHead3D;
