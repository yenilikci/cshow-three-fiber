import {
  OrbitControls,
  PerspectiveCamera,
  CubeCamera,
  Environment,
} from "@react-three/drei";
import Boxes from "../Boxes/Boxes";
import Car from "../Car/Car";
import Ground from "../Ground/Ground";
import Rings from "../Rings/Rings";

const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach="background" />
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadowBias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadowBias={-0.0001}
      />
      <Ground />
      <Rings />
      <Boxes />
    </>
  );
};

export default CarShow;
