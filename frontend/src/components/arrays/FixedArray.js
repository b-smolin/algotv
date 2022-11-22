import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer } from "react-konva";
import Shape from "../shapes/Shape";
import "./fixed.css";

function FixedArray({ props }) {
  const data = props;
  const width = window.innerWidth - 200;
  const height = 550;
  const len = props[0]?.length;
  const initial_array = props[0];
  const initial_pointers = props[1];
  const step = width / len - 20;
  const side = width / len - 30;

  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([[...data]]);
  const [squareData, setSquareData] = useState();
  const [contentsData, setContentsData] = useState();
  const [pointerData, setPointerData] = useState([]);
  const curStep = useRef(1);

  //map the data for the boxes, their contents, and the pointers whenever we get new props
  useEffect(() => {
    const empty = [];
    setSteps((steps) => [...data]);
    setSquareData((squareData) => [...empty]);
    setContentsData((contentsData) => [...empty]);
    setPointerData((pointerData) => [...empty]);
    initial_array?.forEach((num, i) => {
      const square = {
        key: i,
        type: "square",
        width: side,
        height: side,
        x: step * i + 100,
        y: 50,
        fill: "red",
      };
      setSquareData((squareData) => [...squareData, square]);
    });
    initial_array?.forEach((num, i) => {
      const txt = {
        key: i,
        type: "letters",
        x: step * i + 100,
        y: 50,
        width: side,
        height: side,
        text: num,
        fontSize: side - 50,
      };
      setContentsData((contentsData) => [...contentsData, txt]);
    });
    initial_pointers?.forEach((num, i) => {
      if (i === initial_pointers.length - 1) {
        return;
      }
      const ptr = {
        key: i,
        type: "pointer",
        x: step * i + 100 + step / 2,
        y: 50 + side,
      };
      setPointerData((pointerData) => [...pointerData, ptr]);
    });
  }, [props]);

  //   useEffect(() => {
  //     if (steps.length === 0 || curStep.current >= steps.length) {
  //       return;
  //     }
  //   });

  //rendering functions to make the return a little more usable.
  const renderSquare = (squareData) => {
    return squareData?.map((element, i) => {
      return <Shape key={i} shape={element} />;
    });
  };

  const renderContents = (contentsData) => {
    return contentsData?.map((element, i) => {
      return <Shape key={i} shape={element} />;
    });
  };

  const renderPointers = (pointerData) => {
    return pointerData?.map((element, i) => {
      return <Shape key={i} shape={element} />;
    });
  };

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
        {initial_array && (
          <Stage width={width} height={height}>
            <Layer>
              {renderSquare(squareData)}
              {renderContents(contentsData)}
              {renderPointers(pointerData)}
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
