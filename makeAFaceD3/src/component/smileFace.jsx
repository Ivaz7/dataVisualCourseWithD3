import { arc } from "d3-shape";
import Face from "./face";
import Eye from "./eye";

const SmileFace = () => {
  const svgHeight = 500;
  const svgWidth = 500;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;  
  const strokeWidth = 20;
  const r = centerY - strokeWidth / 2
  const eyeOffSetX = 90;
  const eyeOffSetY = 100;
  const eyeRadius = 50;
  const mouthWidth = 20;
  const mouthRadius = 130;

  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2);

  return (
    <svg id="svg" width={svgWidth} height={svgHeight}>
      <g transform={`translate(${centerX},${centerY})`}>
        <Face
          r={r}
          strokeWidth={strokeWidth}
        />

        <Eye 
          position={"left"}
          eyeRadius={eyeRadius}
          eyeOffSetX={eyeOffSetX}
          eyeOffSetY={eyeOffSetY}
        />

        <Eye 
          position={"right"}
          eyeRadius={eyeRadius}
          eyeOffSetX={eyeOffSetX}
          eyeOffSetY={eyeOffSetY}
        />

        {/* Mouth */}
        <path d={mouthArc()}/>
      </g>
    </svg>
  )
}

export default SmileFace;