function StatisticContainer({ data, index }) {
  const { max, mean, min, range } = data;
  return (
    <div key={index} className="statistic-container">
      <p>Mean :{mean}</p>
      <p>Min : {min}</p>
      <p>Max : {max}</p>
      <p>Range : {range}</p>
    </div>
  );
}

export default StatisticContainer;
