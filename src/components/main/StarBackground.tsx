"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { camera, size } = useThree();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Convert mouse position to normalized device coordinates (-1 to +1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    // Update star positions based on mouse
    const positions = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      // Calculate distance from mouse position
      const dx = x - mousePosition.x;
      const dy = y - mousePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // If star is close to mouse, make it invisible
      if (distance < 0.1) {
        positions[i + 2] = 2; // Move star behind camera
      } else {
        positions[i + 2] = z; // Restore original position
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// StarsCanvas.tsx
const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);


export default StarsCanvas;
