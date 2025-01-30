import { arc } from "d3-shape";

function App() {
  const svgHeight = 500;
  const svgWidth = 960;
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
        <circle 
          r={r}
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle 
          r={eyeRadius}
          cx={-eyeOffSetX} 
          cy={-eyeOffSetY} 
          fill="black"
        />
        <circle 
          r={eyeRadius}
          cx={eyeOffSetX} 
          cy={-eyeOffSetY} 
          fill="black"
        />

        <path d={mouthArc()}/>
      </g>
    </svg>
  )
}

export default App
