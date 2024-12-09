import { Environment, OrbitControls } from "@react-three/drei";
import { MobileController } from "./MobileController";
import { isStreamScreen } from "playroomkit";
import { Gameboard } from "./Gameboard";
import { degToRad } from "three/src/math/MathUtils.js";

export const Experience = () => {
  return (
    <>
      {isStreamScreen() && <OrbitControls maxPolarAngle={degToRad(80)} />}
      {isStreamScreen() ? <Gameboard /> : <MobileController />}
      <Environment preset="dawn" background blur ={2} />
    </>
  );
};
