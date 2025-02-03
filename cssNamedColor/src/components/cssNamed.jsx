import { useGetCSSColorsQuery } from '../service/redux/API/APIcsvCSSClr';
import * as d3 from 'd3';

const CssNamedColor = () => {
  const { data } = useGetCSSColorsQuery();

  if (data) {
    const parsedData = d3.csvParse(data);

    console.log(parsedData)
  }

  return (
    <>
    
    </>
  )
}

export default CssNamedColor;