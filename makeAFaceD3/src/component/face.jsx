import { useDataFace } from "../hooks/useDataFace";

const Face = () => {
  const { r, strokeWidth } = useDataFace();

  return (
    <circle 
      r={r}
      fill="yellow"
      stroke="black"
      strokeWidth={strokeWidth}
    />
  )
}

export default Face;