import React from "react";
import { Arrow } from "react-konva";

const Pointer = (props) => {
  const { properties } = props;
  return (
    <Arrow
      key={properties.key}
      //   x={properties.x}
      //   y={properties.y}
      points={[properties.x, properties.y + 180, properties.x, properties.y + 25]}
      pointerLength={100}
      pointerWidth={100}
      fill={"blue"}
      stroke={"green"}
      strokeWidth={15}
      //   offsetX={properties.x}
      //   offsetY={properties.y}
    />
  );
};

export default Pointer;
