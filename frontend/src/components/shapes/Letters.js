import React from "react";

import { Text } from "react-konva";

const Letters = (props) => {
  const { properties } = props;
  return (
    <Text
      key={properties.key}
      id={properties.id}
      fontSize={properties.fontSize}
      rotation={properties.rotation}
      width={properties.width}
      height={properties.height}
      x={properties.x}
      y={properties.y}
      text={properties.text}
      fill={"#666262"}
      align={"center"}
      verticalAlign={"middle"}
    />
  );
};

export default Letters;
