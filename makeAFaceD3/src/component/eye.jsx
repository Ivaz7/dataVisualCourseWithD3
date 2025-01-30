import { useDataFace } from "../hooks/useDataFace";

const Eye = (prop) => {
  const {eyeRadius, eyeOffSetX, eyeOffSetY} = useDataFace();

  let position = null;
  
  if (prop.position === "left") {
    position = -eyeOffSetX;
  } else {
    position = eyeOffSetX;
  }

  return (
    <circle 
      r={eyeRadius}
      cx={position} 
      cy={-eyeOffSetY} 
      fill="black"
    />
  )
}

export default Eye;