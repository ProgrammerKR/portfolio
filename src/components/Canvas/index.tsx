import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import SpaceSphere from './SpaceSphere';

type SceneProps = {
  cameraPosition?: [number, number, number];
};

const Scene = ({ cameraPosition = [0, 0, 4] }: SceneProps) => {
  return (
    <Canvas
      shadows
      camera={{ position: cameraPosition, fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={1} />
        <SpaceSphere />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Scene;
