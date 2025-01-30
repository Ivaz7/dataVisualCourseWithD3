const Eye = (prop) => {
  let position = null;
  
  if (prop.position === "left") {
    position = -prop.eyeOffSetX;
  } else {
    position = prop.eyeOffSetX;
  }

  return (
    <circle 
      r={prop.eyeRadius}
      cx={position} 
      cy={-prop.eyeOffSetY} 
      fill="black"
    />
  )
}

export default Eye;