import { useState } from "react";

const CircleMouse = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const circleX = width / 2;
  const circleY = height / 2;
  const circleRadius = 30; 
  
  const [position, setPosition] = useState({
    x: circleX,
    y: circleY,
  })

  const { x, y } = position;

  const snake1X = x / 2 - 2 ;
  const snake1y = y / 2 - 2 ;

  const snake2X = snake1X / 2 - 2;
  const snake2y = snake1y / 2 - 2;

  const snake3X = snake2X / 2 - 2;
  const snake3y = snake2y / 2 - 2;

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition(() => (
      {
        x: clientX,
        y: clientY,
      }
    ))
  };

  return (
    <svg width="100%" height="100%" onMouseMove={handleMouseMove}>
      <circle cx={x} cy={y} r={circleRadius} />
      <circle cx={snake1X} cy={snake1y} r={circleRadius - 10} />
      <circle cx={snake2X} cy={snake2y} r={circleRadius - 20} />
      <circle cx={snake3X} cy={snake3y} r={circleRadius - 30} />
    </svg>
  );
};

export default CircleMouse;
