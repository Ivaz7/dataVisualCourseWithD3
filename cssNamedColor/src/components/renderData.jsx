import { arc, pie } from "d3-shape";
import getContrastColor from "../../utils/getContrastColor";

const RenderData = (prop) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const centerX = width / 2;
  const centerY = height / 2; 

  const pieArc = arc()
    .innerRadius(0)
    .outerRadius(width)

  const pieData = pie().value(1)(prop.data);

  const renderData = pieData.map((d, i) => {
    const bgColor = d.data["RGB Hex Value"];
    const [x, y] = pieArc.centroid(d)

    const adjustedX = x * 0.4; 
    const adjustedY = y * 0.4;

    const angle = ((d.startAngle + d.endAngle) / 2) * (180 / Math.PI);
    const rotate = angle > 180 && angle < 360 ? angle + 90 : angle - 90;

    return (
      <g key={i}>
        <path 
          fill={bgColor}
          d={pieArc(d)}
        />
        <text 
          x={adjustedX}
          y={adjustedY} 
          textAnchor="middle" 
          fill={getContrastColor(bgColor)} 
          fontSize="14px" 
          fontWeight="bold"
          transform={`rotate(${rotate}, ${adjustedX}, ${adjustedY})`}
        >
          {d.data.Keyword}
        </text>
      </g>
    )
  })

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {renderData}
      </g>
    </svg>
  )
}

export default RenderData