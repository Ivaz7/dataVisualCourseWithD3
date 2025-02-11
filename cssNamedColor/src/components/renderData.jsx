import getContrastColor from "../../utils/getContrastColor";

const RenderData = (prop) => {
  const renderData = prop.data?.map((d, i) => {
    const bgColor = d["RGB Hex Value"];
    const textColor = getContrastColor(bgColor);

    return (
      <div 
        key={i} 
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {d.Keyword}, {d.Specification}
      </div>
    )
  })

  return (
    <>
      {renderData}
    </>
  )
}

export default RenderData