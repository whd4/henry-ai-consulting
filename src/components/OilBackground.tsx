"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vUv = uv;

    vec3 pos = position;

    // Smooth flowing water-like waves
    float wave1 = sin(pos.x * 1.2 + uTime * 0.3) * 0.12;
    float wave2 = sin(pos.y * 1.8 + uTime * 0.25) * 0.08;
    float wave3 = sin(pos.x * 2.5 + pos.y * 2.0 + uTime * 0.4) * 0.05;
    float wave4 = sin(pos.x * 0.6 - pos.y * 0.9 + uTime * 0.18) * 0.15;
    float wave5 = cos(pos.x * 3.5 + pos.y * 2.8 + uTime * 0.5) * 0.03;

    float elevation = wave1 + wave2 + wave3 + wave4 + wave5;
    pos.z += elevation;

    vElevation = elevation;
    vPosition = pos;

    // Compute normal for moonlight reflection
    float dx = cos(pos.x * 1.2 + uTime * 0.3) * 1.2 * 0.12
             + cos(pos.x * 2.5 + pos.y * 2.0 + uTime * 0.4) * 2.5 * 0.05;
    float dy = cos(pos.y * 1.8 + uTime * 0.25) * 1.8 * 0.08
             + cos(pos.x * 2.5 + pos.y * 2.0 + uTime * 0.4) * 2.0 * 0.05;
    vNormal = normalize(vec3(-dx, -dy, 1.0));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    // Pure BLACK base — this is crude oil, not coffee
    vec3 oilBlack = vec3(0.005, 0.005, 0.008);
    vec3 oilDeep = vec3(0.01, 0.01, 0.015);

    // Moonlight reflection — cool silver/white shimmer
    vec3 moonlight = vec3(0.7, 0.75, 0.85);
    vec3 moonWarm = vec3(0.5, 0.5, 0.55);

    // Simulate moonlight from above-right
    vec3 lightDir = normalize(vec3(0.3, 0.5, 1.0));
    float specular = pow(max(dot(vNormal, lightDir), 0.0), 60.0);
    float softSpec = pow(max(dot(vNormal, lightDir), 0.0), 8.0);

    // Moving caustic/shimmer pattern
    float shimmer1 = sin(vUv.x * 15.0 + vUv.y * 10.0 + uTime * 0.6) * 0.5 + 0.5;
    float shimmer2 = cos(vUv.x * 8.0 - vUv.y * 12.0 + uTime * 0.4) * 0.5 + 0.5;
    float shimmerMask = shimmer1 * shimmer2;

    // Base color — nearly pure black
    vec3 color = mix(oilBlack, oilDeep, smoothstep(-0.2, 0.2, vElevation));

    // Add moonlight specular highlights on wave peaks
    color += moonlight * specular * 0.35;
    color += moonWarm * softSpec * 0.06;

    // Add shimmering caustic on the surface
    color += moonlight * shimmerMask * specular * 0.2;

    // Subtle oil-slick iridescence on the brightest highlights only
    float iridescentR = sin(vUv.x * 20.0 + uTime * 0.3) * 0.5 + 0.5;
    float iridescentB = cos(vUv.y * 18.0 + uTime * 0.25) * 0.5 + 0.5;
    vec3 iridescent = vec3(iridescentR * 0.03, 0.01, iridescentB * 0.04);
    color += iridescent * specular * 0.5;

    // Vignette — darker at edges
    float vignette = 1.0 - length(vUv - 0.5) * 0.6;
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function OilSurface() {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[14, 14, 160, 160]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function OilBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 3, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        style={{ background: "#010102" }}
      >
        <ambientLight intensity={0.05} />
        <directionalLight position={[3, 8, 5]} intensity={0.15} color="#c0c8e0" />
        <pointLight position={[-4, 6, 3]} intensity={0.08} color="#a0a8c0" />
        <OilSurface />
      </Canvas>

      {/* Dinosaur skeleton that drifts across occasionally */}
      <DinoSkeleton />
    </div>
  );
}

function DinoSkeleton() {
  return (
    <div
      className="fixed pointer-events-none z-[1]"
      style={{
        bottom: "15%",
        animation: "dinoFloat 45s linear infinite",
        opacity: 0.04,
      }}
    >
      <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Simplified T-Rex skeleton silhouette */}
        <g stroke="#c0c8e0" strokeWidth="1" fill="none" opacity="0.6">
          {/* Spine */}
          <path d="M20 40 L60 35 L100 33 L140 35 L170 40" />
          {/* Skull */}
          <path d="M170 40 L185 32 L195 35 L190 40 L180 42 L170 40" />
          <circle cx="188" cy="36" r="2" />
          {/* Jaw */}
          <path d="M180 42 L192 44 L185 45 L178 44" />
          <line x1="182" y1="42" x2="183" y2="44" />
          <line x1="186" y1="42" x2="187" y2="44" />
          {/* Ribs */}
          <path d="M80 33 L75 50" />
          <path d="M90 33 L86 52" />
          <path d="M100 33 L97 53" />
          <path d="M110 34 L108 52" />
          <path d="M120 34 L119 50" />
          <path d="M130 35 L129 48" />
          {/* Front legs */}
          <path d="M140 35 L145 55 L148 60" />
          <path d="M145 55 L142 60" />
          {/* Back legs */}
          <path d="M50 36 L45 55 L40 70 L35 72" />
          <path d="M60 35 L58 55 L55 68 L52 70" />
          <path d="M40 70 L48 72" />
          <path d="M55 68 L60 70" />
          {/* Tail */}
          <path d="M20 40 L10 42 L5 38" />
          {/* Pelvis */}
          <path d="M45 36 L50 50 L60 50 L65 36" />
        </g>
      </svg>

      <style>{`
        @keyframes dinoFloat {
          0% { left: -250px; transform: translateY(0px); }
          25% { transform: translateY(-8px); }
          50% { transform: translateY(5px); }
          75% { transform: translateY(-3px); }
          100% { left: 110vw; transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
