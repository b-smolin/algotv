import React from "react";
import { Rect } from "react-konva";

const Square = (props) => {
  const { properties } = props;

  return (
    <Rect
      key={properties.key}
      x={properties.x}
      y={properties.y}
      width={properties.width}
      height={properties.height}
      fill={properties.fill}
      shadowBlur={5}
    />
  );
};

export default Square;
