import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import "./fixed.css";

function FixedArray({ props }) {
  const [currentStep, setCurrentStep] = useState(1);
  const initial = props[0];
  const steps = props;
  console.log(initial);

  const renderSquares = (squares) => {
    return squares?.map((num, i) => (
      <div className="box" key={i}>
        {num}
      </div>
    ));
  };

  const renderStep = (steps) => {
    console.log("here");
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
      <div>{renderSquares(initial)}</div>
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
