import { memo, Suspense, useContext } from "react";
import {
  Decal,
  Float,
  Preload,
  useTexture,
  OrbitControls,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Canvas } from "@react-three/fiber";
import { DarkModeContext } from "../DarkModeProvider";

const Ball = memo(({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl]);
  const { isDark } = useContext(DarkModeContext);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          polygonOffset
          polygonOffsetFactor={-5}
          color={isDark ? "#fff8eb" : "#c2c8d1"}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // @ts-ignore
          flatShading
        />
      </mesh>
    </Float>
  );
});

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      performance={{ min: 0.5, max: 1 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
