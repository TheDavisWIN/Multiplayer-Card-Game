import { Billboard, Text } from "@react-three/drei";

export const PlayerName = ({ name = "", fontSize = 0.2, ...props }) => (
  <Billboard {...props}>
    <Text
      anchorY={"bottom"}
      fontSize={fontSize}
      font={`${import.meta.env.BASE_URL}fonts/RobotoSlab-Bold.ttf`}
    >
      {name}
    </Text>
  </Billboard>
);