import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/AppContext';

const ParticleField: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  
  // Generate particle positions
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;     // x
    positions[i + 1] = (Math.random() - 0.5) * 20; // y
    positions[i + 2] = (Math.random() - 0.5) * 20; // z
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={theme === 'dark' ? '#00D2FF' : '#171717'}
        size={0.02}
        sizeAttenuation
        opacity={0.6}
      />
    </Points>
  );
};

const NeuralNetwork: React.FC = () => {
  const ref = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const nodeCount = 50;
  const nodes = [];
  const connections = [];

  // Generate nodes
  for (let i = 0; i < nodeCount; i++) {
    const position: [number, number, number] = [
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15
    ];
    nodes.push(position);
  }

  // Generate connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const distance = new THREE.Vector3(...nodes[i]).distanceTo(new THREE.Vector3(...nodes[j]));
      if (distance < 5 && Math.random() > 0.7) {
        connections.push([nodes[i], nodes[j]]);
      }
    }
  }

  return (
    <group ref={ref}>
      {/* Nodes */}
      {nodes.map((position, index) => (
        <Float key={index} speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <mesh position={position}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial
              color={theme === 'dark' ? '#00D2FF' : '#171717'}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
      
      {/* Connections */}
      {connections.map((connection, index) => {
        const start = new THREE.Vector3(...connection[0]);
        const end = new THREE.Vector3(...connection[1]);
        const distance = start.distanceTo(end);
        const center = start.clone().add(end).multiplyScalar(0.5);
        const direction = end.clone().sub(start).normalize();
        
        return (
          <mesh key={index} position={center.toArray()}>
            <cylinderGeometry args={[0.005, 0.005, distance]} />
            <meshBasicMaterial
              color={theme === 'dark' ? '#00D2FF' : '#171717'}
              transparent
              opacity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const BackgroundScene: React.FC = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    // Smooth camera movement based on scroll
    const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    camera.position.z = 10 + scrollProgress * 5;
    camera.rotation.x = scrollProgress * 0.2;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <ParticleField />
      <NeuralNetwork />
    </>
  );
};

const Background3D: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        className="w-full h-full"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #171717 0%, #262626 100%)'
            : 'linear-gradient(135deg, #F5F5F5 0%, #E5E5E5 100%)'
        }}
      >
        <BackgroundScene />
      </Canvas>
    </div>
  );
};

export default Background3D;
