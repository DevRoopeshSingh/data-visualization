import StatisticContainer from "./component/StatisticContainer";
import useWineData from "./utils/useWineData";
import "./App.css";

function App() {
  const statisticList = useWineData();

  return (
    <div className="app">
      <div className="center-align">
        <h2>Wine Data</h2>
      </div>
      <div className="app-container">
        {statisticList &&
          statisticList.map((statistic) => {
            return <StatisticContainer data={statistic} />;
          })}
      </div>
    </div>
  );
}

export default App;
