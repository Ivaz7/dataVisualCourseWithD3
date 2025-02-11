import { useDispatch, useSelector } from 'react-redux';
import { useGetCSSColorsQuery } from '../service/redux/API/APIcsvCSSClr';
import * as d3 from 'd3';
import { setData } from '../service/redux/slice/dataSlice';
import { useEffect } from 'react';
import RenderData from './renderData';

const CssNamedColor = () => {
  const { data, isError, isLoading, error, reset } = useGetCSSColorsQuery();
  const dataStored = useSelector((state) => state.dataSlice.dataStored);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const parsedData = d3.csvParse(data);
      dispatch(setData(parsedData));
    }
  }, [dispatch, data])

  if (isError) {
    alert(error)
    reset();
  }

  if (isLoading || !Array.isArray(dataStored)) {
    return <div>Loading ...</div>
  }

  return (
    <>
      <RenderData data={dataStored}/>
    </>
  )
}

export default CssNamedColor;