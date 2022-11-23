import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer } from "react-konva";
import { createPath } from "react-router-dom";
import Shape from "../shapes/Shape";
import "./fixed.css";

function FixedArray({ props }) {
  const FRAMELENGTH = 360;
  const data = props;
  const width = window.innerWidth - 200;
  const height = 550;
  const len = props[0]?.length;
  const initial_array = props[0];
  const maxstep = props?.length;
  const initial_pointers = props[1];
  const step = width / len - 20;
  const side = width / len - 30;

  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([[...data]]);
  const [squareData, setSquareData] = useState();
  const [contentsData, setContentsData] = useState();
  const [pointerData, setPointerData] = useState([]);
  const curStep = useRef(1);
  const index1 = useRef(null);
  const index2 = useRef(null);

  //map the data for the boxes, their contents, and the pointers whenever we get new props
  useEffect(() => {
    const empty = [];
    setSteps((steps) => [...data]);
    setSquareData((squareData) => [...empty]);
    setContentsData((contentsData) => [...empty]);
    setPointerData((pointerData) => [...empty]);
    setCurrentStep(1);
    curStep.current = 1;
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
    if (initial_array) {
      let timer = setInterval(() => {
        handleInstructions();
        curStep.current = curStep.current + 1;
        if (curStep.current >= maxstep) {
          clearInterval(timer); //need to clear on refresh
        }
      }, FRAMELENGTH);
      //   clearInterval(timer);
    }
  }, [props]);

  const handleInstructions = () => {
    const instruction = data[curStep.current];
    let command = instruction[0];
    if (command === "pointer") {
      for (let i = 1; i < instruction.length; i++) {
        pointerData[i - 1] = {
          key: i,
          type: "pointer",
          x: step * instruction[i] + 100 + step / 2,
          y: 50 + side,
        };
        setPointerData([...pointerData]);
      }
    } else if (command === "swap") {
      index1.current = instruction[1];
      index2.current = instruction[2];
      setContentsData((contentsData) =>
        contentsData.map((element, i) => {
          if (element.key === index1.current) {
            element.x = step * index2.current + 100;
            element.key = index2.current;
            return element;
          }
          if (element.key === index2.current) {
            element.x = step * index1.current + 100;
            element.key = index1.current;
            return element;
          }
          return element;
        })
      );
    } else if (command === "compare") {
      index1.current = instruction[1];
      index2.current = instruction[2];
      setSquareData((squareData) =>
        squareData.map((element) => {
          if (element.key === index1.current || element.key === index2.current) {
            element.fill = instruction[3] < instruction[4] ? "lightgreen" : "orange";
            return element;
          }
          return element;
        })
      );
      setTimeout(() => {
        setSquareData((squareData) =>
          squareData.map((element) => {
            element.fill = "red";
            return element;
          })
        );
      }, FRAMELENGTH * 0.9);
    } else {
      console.error("unrecognized instruction");
    }
  };
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

  //   const renderStep = (steps) => {
  //     return (
  //       steps && (
  //         <div className="stepbox" key={currentStep}>
  //           {steps[curStep.current]}
  //         </div>
  //       )
  //     );
  //   };
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
      {/* <button
        className="seemore"
        // onClick={() => {
        //   setCurrentStep(currentStep + 1);
        // }}
      >
        See next step
      </button>
      <div>{renderStep(steps)}</div> */}
    </div>
  );
}

export default FixedArray;
