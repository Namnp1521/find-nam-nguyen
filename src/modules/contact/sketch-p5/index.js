import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { draw, setup } from "./res/sketch";

export default function Sketch(props) {
  let refSketch = useRef();

  useEffect(() => {
    new p5(sketch, refSketch);
  }, []);

  const sketch = (p5) => {
    p5.setup = () => {
      setup(p5);
    };

    p5.draw = () => {
      draw(p5);
    };
  };

  return (
    <div
      ref={(ref) => (refSketch = ref)}
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // zIndex: -1,
      }}
    ></div>
  );
}
