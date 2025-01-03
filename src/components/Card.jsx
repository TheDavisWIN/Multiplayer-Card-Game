import { Text, useFont, useGLTF, useTexture } from "@react-three/drei";
import React from "react";

const basePath = import.meta.env.BASE_URL;

const CARD_DESCRIPTIONS = {
  punch: "Punch another pirate and make it drop a gem",
  shield: "Protect yourself from an attack",
  grab: "Grab a gem from the treasure. If no gem is left, you get nothing",
};

export function Card({ type= "shield", ...props }) {
  const { nodes, materials } = useGLTF(`${basePath}models/card.glb`);
  const texture = useTexture(`${basePath}cards/${type}.jpg`);
  return (
    <group {...props} dispose={null}>
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Plane.geometry} 
      >
        <meshStandardMaterial {...materials.Front} map={texture} color="white"/>
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_1.geometry}
        material={materials.Borders}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_2.geometry}
        material={materials.Back}
      />
      <Text
        font={`${basePath}fonts/RobotoSlab-Bold.ttf`}
        fontSize={0.1}
        anchorY={"top"}
        anchorX={"left"}
        position-x={-0.46}
        position-y={-0.3}
        position-z={0.01}
      >
        {type.toUpperCase()}
        <meshStandardMaterial
          color="white"
          roughness={materials.Front.roughness}
        />
      </Text>
      <Text
        font={`${basePath}fonts/RobotoSlab-Regular.ttf`}
        fontSize={0.06}
        maxWidth={0.9}
        anchorY={"top"}
        anchorX={"left"}
        position-x={-0.46}
        position-y={-0.44}
        position-z={0.01}
        lineHeight={1}
      >
        {CARD_DESCRIPTIONS[type] || ""}
        <meshStandardMaterial
          color="white"
          roughness={materials.Front.roughness}
        />
      </Text>
    </group>
  );
}

useGLTF.preload(`${basePath}models/card.glb`);
useTexture.preload(`${basePath}cards/punch.jpg`);
useTexture.preload(`${basePath}cards/shield.jpg`);
useTexture.preload(`${basePath}cards/grab.jpg`);
useFont.preload(`${basePath}fonts/RobotoSlab-Bold.ttf`);
useFont.preload(`${basePath}fonts/RobotoSlab-Regular.ttf`);
