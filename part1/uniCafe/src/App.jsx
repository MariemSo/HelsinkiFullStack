import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  let goodValue = 1;
  let neutralValue = 0;
  let badValue = -1;
  let all = props.good + props.neutral + props.bad;

  const statisticValue =
    (goodValue * props.good +
      badValue * props.bad +
      neutralValue * props.neutral) /
    all;
  const positive = ((goodValue * props.good) / all) * 100;

  if (all === 0) {
    return (
      <tbody>
        <tr>
          <td>No given Feedback</td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      <tr>
        <td>all </td>
        <td>{all}</td>
      </tr>
      <tr>
        <td>average </td>
        <td>{statisticValue.toFixed(1)}</td>
      </tr>
      <tr>
        <td>positive </td>
        <td>{positive.toFixed(1)} %</td>
      </tr>
    </tbody>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const valueToSet = (rating, setRating) => {
    const newRating = rating + 1;
    console.log(newRating);
    setRating(newRating);
  };
  return (
    <>
      <h1>Give feedback</h1>
      <Button
        handleClick={() => {
          valueToSet(good, setGood);
        }}
        text="good"
      />
      <Button
        handleClick={() => {
          valueToSet(neutral, setNeutral);
        }}
        text="neutral"
      />
      <Button
        handleClick={() => {
          valueToSet(bad, setBad);
        }}
        text="bad"
      />

      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
        </tbody>
      </table>
      <table>
        <Statistics good={good} bad={bad} neutral={neutral} />
      </table>
    </>
  );
}

export default App;
