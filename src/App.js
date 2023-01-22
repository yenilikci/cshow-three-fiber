import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CarShow from "./components/CarShow/CarShow";
import Rings from "./components/Rings/Rings";
import "./styles.css";

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
        <Rings />
      </Canvas>
    </Suspense>
  );
}

export default App;
