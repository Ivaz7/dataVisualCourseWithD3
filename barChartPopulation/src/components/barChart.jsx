import { useSelector } from "react-redux";

const BarChart = () => {
  const data = useSelector((state) => state.dataSlice.data);
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  // const centerX = width / 2;
  // const centerY = height / 2; 

  console.log(data)
  
  return (
    <>
    
    </>
  )
}

export default BarChart;