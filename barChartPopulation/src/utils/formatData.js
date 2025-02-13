export const formatData = (data) => {
  const result = [];
  const countryMap = {};

  for (const item of data) {
    const countryCode = item["Country Code"];
    const countryName = item["Country Name"];
    const year = item.Year;
    const population = Number(item.Value);

    if (!countryMap[countryCode]) {
      countryMap[countryCode] = {
        "Country Code": countryCode,
        "Country Name": countryName,
      };
      result.push(countryMap[countryCode]); 
    }

    if (!countryMap[countryCode][year]) {
      countryMap[countryCode][year] = population;
    }
  }

  // Since objects in JavaScript are passed by reference, 
  // modifying `countryMap[countryCode]` also updates the object inside `result`.
  // This means all changes made to `listYearPopulation` inside `countryMap`
  // are reflected in the corresponding object in `result`.
  return result;
};
