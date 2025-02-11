const RenderData = (prop) => {
  const getContrastColor = (hex) => {
    hex = hex.replace("#", "");
  
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  };

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