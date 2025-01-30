export const useDataFace = () => {
  const svgHeight = 500;
  const svgWidth = 500;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;  
  const strokeWidth = 20;
  const r = centerY - strokeWidth / 2;
  const eyeOffSetX = 90;
  const eyeOffSetY = 100;
  const eyeRadius = 50;
  const mouthWidth = 20;
  const mouthRadius = 100;

  return { svgHeight, svgWidth, centerX, centerY, strokeWidth, r, eyeOffSetX, eyeOffSetY, eyeRadius, mouthRadius, mouthWidth }
}