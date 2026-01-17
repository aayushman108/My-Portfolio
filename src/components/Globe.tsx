"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import createGlobe from "cobe";
import { useTheme } from "next-themes";

interface GlobeProps {
  className?: string;
}

interface LocationMarker {
  location: [number, number];
  size: number;
  name: string;
  isMain?: boolean;
}

const MARKERS: LocationMarker[] = [
  { location: [27.7172, 85.324], size: 0.12, name: "Nepal 🇳🇵", isMain: true },
];

const Globe = ({ className = "" }: GlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  // Interaction state
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const thetaRef = useRef(0.25); // Vertical rotation reference
  const velocityRef = useRef(0);
  const velocityYRef = useRef(0); // Vertical velocity for momentum
  const lastTimeRef = useRef(Date.now());
  const lastXRef = useRef(0);
  const lastYRef = useRef(0); // Track Y position for vertical drag
  const animationTimeRef = useRef(0); // Animation time for complex rotation pattern

  // Interaction intensity for visual feedback
  const [isInteracting, setIsInteracting] = useState(false);

  // Spring physics for smooth deceleration
  const applyMomentum = useCallback(() => {
    if (pointerInteracting.current === null) {
      // Apply friction to both axes
      velocityRef.current *= 0.95;
      velocityYRef.current *= 0.95;

      // Apply velocity to phi (horizontal)
      phiRef.current += velocityRef.current;

      // Apply velocity to theta (vertical) with bounds
      thetaRef.current += velocityYRef.current;
      // Clamp theta to prevent flipping
      thetaRef.current = Math.max(-0.8, Math.min(0.8, thetaRef.current));

      // Stop when velocity is negligible
      if (Math.abs(velocityRef.current) < 0.0001) {
        velocityRef.current = 0;
      }
      if (Math.abs(velocityYRef.current) < 0.0001) {
        velocityYRef.current = 0;
      }
    }
  }, []);

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const isDark = resolvedTheme === "dark";

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: isDark ? 1 : 0,
      diffuse: isDark ? 1.4 : 3,
      mapSamples: 20000,
      mapBrightness: isDark ? 8 : 12,
      baseColor: isDark ? [0.12, 0.12, 0.15] : [1, 1, 1],
      markerColor: isDark ? [0.6, 0.4, 1] : [0.1, 0.5, 0.9], // Blue for visibility
      glowColor: isDark ? [0.2, 0.15, 0.35] : [0.9, 0.9, 1],
      markers: MARKERS.map((m) => ({
        location: m.location,
        size: m.size,
      })),
      onRender: (state) => {
        // Apply momentum physics
        applyMomentum();

        // Auto-rotate when not interacting and no momentum
        if (
          pointerInteracting.current === null &&
          Math.abs(velocityRef.current) < 0.001 &&
          Math.abs(velocityYRef.current) < 0.001
        ) {
          // Increment animation time for smooth movement
          animationTimeRef.current += 0.008;

          // Multi-directional rotation using sine waves
          // Horizontal rotation: smooth continuous drift
          phiRef.current += 0.003;

          // Vertical rotation: smoothly ease toward oscillating target
          const targetTheta =
            0.25 + Math.sin(animationTimeRef.current * 0.3) * 0.3;
          // Lerp (linear interpolation) for smooth transition - 2% per frame
          thetaRef.current += (targetTheta - thetaRef.current) * 0.02;
        }

        // Pulse the marker size
        const currentPulse = 1 + Math.sin(animationTimeRef.current * 4) * 0.2;
        state.markers = MARKERS.map((m) => ({
          location: m.location,
          size: m.size * currentPulse,
        }));

        state.phi = phiRef.current + pointerInteractionMovement.current;
        state.theta = thetaRef.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    // Smooth fade in
    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [resolvedTheme, applyMomentum]);

  // Handle pointer down
  const handlePointerDown = (e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX;
    lastXRef.current = e.clientX;
    lastYRef.current = e.clientY;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
    velocityYRef.current = 0;
    setIsInteracting(true);

    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grabbing";
    }
  };

  // Handle pointer up with momentum
  const handlePointerUp = () => {
    // Bake the drag offset into phiRef so rotation continues from current position
    phiRef.current += pointerInteractionMovement.current;
    pointerInteractionMovement.current = 0;

    pointerInteracting.current = null;
    setIsInteracting(false);

    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab";
    }
  };

  // Handle mouse move with velocity tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    if (pointerInteracting.current !== null) {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTimeRef.current;
      const deltaX = e.clientX - lastXRef.current;
      const deltaY = e.clientY - lastYRef.current;

      // Calculate velocity for both axes
      if (deltaTime > 0) {
        velocityRef.current = (deltaX / deltaTime) * 0.02;
        velocityYRef.current = (deltaY / deltaTime) * 0.015;
      }

      // Update horizontal position
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta / 80;

      // Update vertical position (theta) with bounds
      thetaRef.current += deltaY * 0.003;
      thetaRef.current = Math.max(-0.8, Math.min(0.8, thetaRef.current));

      lastXRef.current = e.clientX;
      lastYRef.current = e.clientY;
      lastTimeRef.current = currentTime;
    }
  };

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    if (pointerInteracting.current !== null && e.touches[0]) {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTimeRef.current;
      const deltaX = e.touches[0].clientX - lastXRef.current;
      const deltaY = e.touches[0].clientY - lastYRef.current;

      if (deltaTime > 0) {
        velocityRef.current = (deltaX / deltaTime) * 0.02;
        velocityYRef.current = (deltaY / deltaTime) * 0.015;
      }

      const delta = e.touches[0].clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta / 80;

      // Update vertical position (theta) with bounds
      thetaRef.current += deltaY * 0.003;
      thetaRef.current = Math.max(-0.8, Math.min(0.8, thetaRef.current));

      lastXRef.current = e.touches[0].clientX;
      lastYRef.current = e.touches[0].clientY;
      lastTimeRef.current = currentTime;
    }
  };

  return (
    <div ref={containerRef} className={`relative aspect-square ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className={`w-full h-full cursor-grab transition-all duration-300 opacity-0 ${
          isInteracting ? "scale-[1.02]" : "scale-100"
        }`}
        style={{
          contain: "layout paint size",
        }}
      />
    </div>
  );
};

export default Globe;
