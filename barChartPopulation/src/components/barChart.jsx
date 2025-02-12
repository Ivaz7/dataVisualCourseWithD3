import { useSelector } from "react-redux";

const BarChart = () => {
  const data = useSelector((state) => state.dataSlice.data);

  console.log(data)

  return (
    <>
    
    </>
  )
}

export default BarChart;