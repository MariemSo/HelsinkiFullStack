import "./App.css";
import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

function App() {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const reset = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <>
      <Display counter={counter} />
      <Button onClick={decreaseByOne} text="minus" />
      <Button onClick={reset} text="reset" />
      <Button onClick={increaseByOne} text="plus" />
    </>
  );
}

export default App;
