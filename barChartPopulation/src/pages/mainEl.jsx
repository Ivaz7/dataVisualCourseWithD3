import { useEffect } from 'react';
import { useGetWorldPopulationQuery } from '../service/API/APIworldPopulation';
import { useDispatch } from 'react-redux';
import { setData } from '../service/Slice/data';
import BarChart from '../components/barChart';

const MainEl = () => {
  const { data, isError, isLoading, reset } = useGetWorldPopulationQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
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