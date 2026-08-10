"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function HelixStrand() {
  const groupRef = useRef<THREE.Group>(null);
  const points = 120;
  const radius = 1.8;
  const height = 8;
  const turns = 3;

  const { positions1, positions2, connections } = useMemo(() => {
    const p1: THREE.Vector3[] = [];
    const p2: THREE.Vector3[] = [];
    const conn: { a: THREE.Vector3; b: THREE.Vector3 }[] = [];

    for (let i = 0; i < points; i++) {
      const t = i / points;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      p1.push(new THREE.Vector3(x1, y, z1));
      p2.push(new THREE.Vector3(x2, y, z2));

      if (i % 8 === 0) {
        conn.push({
          a: new THREE.Vector3(x1, y, z1),
          b: new THREE.Vector3(x2, y, z2),
        });
      }
    }
    return { positions1: p1, positions2: p2, connections: conn };
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Strand 1 — blue */}
      {positions1.map((pos, i) => (
        <mesh key={`s1-${i}`} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color="#2563eb"
            emissive="#2563eb"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Strand 2 — cyan */}
      {positions2.map((pos, i) => (
        <mesh key={`s2-${i}`} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Connection bars — the 6 methodology rungs */}
      {connections.map((conn, i) => {
        const mid = new THREE.Vector3().lerpVectors(conn.a, conn.b, 0.5);
        const dir = new THREE.Vector3().subVectors(conn.b, conn.a);
        const len = dir.length();
        const quat = new THREE.Quaternion();
        quat.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir.clone().normalize()
        );

        return (
          <mesh key={`c-${i}`} position={mid} quaternion={quat}>
            <cylinderGeometry args={[0.015, 0.015, len, 6]} />
            <meshStandardMaterial
              color="#ffffff"
              transparent
              opacity={0.15}
            />
          </mesh>
        );
      })}

      {/* Center glow sphere */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color="#2563eb"
            emissive="#2563eb"
            emissiveIntensity={1}
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HelixScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#2563eb" />
        <pointLight position={[-10, -5, 5]} intensity={0.4} color="#06b6d4" />
        <HelixStrand />
      </Canvas>
    </div>
  );
}
