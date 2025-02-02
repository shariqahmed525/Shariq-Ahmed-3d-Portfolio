import { useState, useRef, Suspense, useContext, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { DarkModeContext } from "../DarkModeProvider";

const Stars = (props: any) => {
  const ref = useRef();
  const { isDark } = useContext(DarkModeContext);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1002), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    if (ref.current) {
      // @ts-ignore
      ref.current.rotation.x -= delta / 10;
      // @ts-ignore
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          size={0.002}
          depthWrite={false}
          sizeAttenuation={true}
          color={isDark ? "#f272c8" : "#080005"}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const { isDark } = useContext(DarkModeContext);
  const [showStars, setSowStars] = useState(true);

  useEffect(() => {
    setSowStars(false);
    setTimeout(() => {
      setSowStars(true);
    }, 100);
  }, [isDark]);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      {showStars && (
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
