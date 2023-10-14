import { useState, useEffect } from "react";
import wineMockData from "./wineMockData";

const useWineData = () => {
  const [statistic, setStatistics] = useState(null);

  useEffect(() => {
    const wineDataList = wineMockData.map((wine) => {
      const values = Object.values(wine);
      const mean = values.reduce((acc, val) => (acc + val, 0) / values.length);
      const min = Math.min(...values);
      const max = Math.max(...values);
      const range = max - min;
      return { mean, min, max, range };
    });

    setStatistics(wineDataList);
  }, []);

  return statistic;
};

export default useWineData;
