const Face = (prop) => {
  return (
    <circle 
      r={prop.r}
      fill="yellow"
      stroke="black"
      strokeWidth={prop.strokeWidth}
    />
  )
}

export default Face;