import { useEffect } from 'react';
import { useGetWorldPopulationQuery } from '../service/API/APIworldPopulation';
import { useDispatch } from 'react-redux';
import { setData } from '../service/Slice/data';
import BarChart from '../components/barChart';
import * as d3 from 'd3';
import { formatData } from '../utils/formatData';


const MainEl = () => {
  const { data, isError, isLoading, reset } = useGetWorldPopulationQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const parsedData = d3.csvParse(data);
      const formattedData = formatData(parsedData);
      dispatch(setData(formattedData));
    }
  }, [data, dispatch])

  if (isError) {
    alert("error fecthing")
    reset();
  }

  if (isLoading) {
    return <div>Loading ... </div>
  }

  return (
    <>  
      <BarChart />
    </>
  )
}

export default MainEl;