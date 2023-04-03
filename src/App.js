import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [location, setLocation] = useState("mumbai");
  // let count = 0;
  const increaseCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setLocation("mumbai");
    console.log("useEffect called", count);
  }, [count]);

  return (
    <div className="App">
      <Navbar count={count} location={location} />
      {/* <h1>You have clicked count this many times{count}</h1> */}
      <button onClick={increaseCount}>Increase count</button>
    </div>
  );
}

export default App;
