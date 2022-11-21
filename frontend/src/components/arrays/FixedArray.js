import React, { useState } from "react";
import { Stage, Layer } from "react-konva";
import Shape from "../shapes/Shape";
import "./fixed.css";

function FixedArray({ props }) {
  const [currentStep, setCurrentStep] = useState(1);
  const initial = props[0];
  const steps = props;
  const width = window.innerWidth - 200;
  const height = 550;
  const len = initial?.length;
  const step = width / len - 20;
  const side = width / len - 30;

  //return squares?.map((num, i) => <Rect key={i} x={/*step * i + */ 100} y={100} height={40} width={40} fill="red" />);

  const renderStep = (steps) => {
    return (
      steps && (
        <div className="stepbox" key={currentStep}>
          {steps[currentStep]}
        </div>
      )
    );
  };
  return (
    <div className="FixedArray">
      <div>
        {initial && (
          <Stage width={width} height={height}>
            <Layer>
              {initial.map((num, i) => {
                const cur = {
                  key: i,
                  type: "square",
                  width: side,
                  height: side,
                  x: step * i + 100,
                  y: 50,
                  fill: "red",
                };
                return <Shape key={i} shape={cur} />;
              })}
              {initial.map((num, i) => {
                const cur = {
                  key: i,
                  type: "letters",
                  x: step * i + 100,
                  y: 50,
                  width: side,
                  height: side,
                  text: num,
                  fontSize: side - 50,
                };
                return <Shape key={i} shape={cur} />;
              })}
            </Layer>
          </Stage>
        )}
      </div>
      <button
        className="seemore"
        onClick={() => {
          setCurrentStep(currentStep + 1);
        }}
      >
        See next step
      </button>
      <div>{renderStep(steps)}</div>
    </div>
  );
}

export default FixedArray;
