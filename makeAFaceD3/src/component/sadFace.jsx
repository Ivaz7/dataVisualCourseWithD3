import { arc } from "d3-shape";
import Face from "./face";
import Eye from "./eye";
import { useDataFace } from "../hooks/useDataFace";

const SadFace = () => {
  const { svgHeight, svgWidth, centerX, centerY, mouthRadius, mouthWidth } = useDataFace();

  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI * 3 / 2)  
    .endAngle(Math.PI / 2); 
    
  return (
    <svg id="svg" width={svgWidth} height={svgHeight}>
      <g transform={`translate(${centerX},${centerY})`}>
        <Face />        

        <Eye 
          position={"left"}
        />

        <Eye 
          position={"right"}
        />

        {/* Mouth */}
        <g transform={`scale(1, -1) translate(0, ${(centerY - svgHeight) + 100})`}>
          <path d={mouthArc()} fill="black"/>
        </g>
      </g>
    </svg>
  )
}

export default SadFace;
