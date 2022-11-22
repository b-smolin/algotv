import React from "react";
import Square from "./Rectangle";
import Letters from "./Letters";
import Pointer from "./Pointer";

const Shape = (props) => {
  const { shape } = props;
  if (shape.type === "square") {
    return <Square properties={shape} />;
  }
  if (shape.type === "letters") {
    return <Letters properties={shape} />;
  }
  if (shape.type === "pointer") {
    return <Pointer properties={shape} />;
  }
};

export default Shape;
