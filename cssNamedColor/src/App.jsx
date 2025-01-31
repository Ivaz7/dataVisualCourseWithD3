import { useGetCSSColorsQuery } from "./service/redux/API/APIcsvCSSClr"

function App() {
  const { data } = useGetCSSColorsQuery();

  if (data) {
    console.log(data[0])
  }

  return (
    <>
      
    </>
  )
}

export default App
