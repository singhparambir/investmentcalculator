import Header from "./Components/Header"
import Result from "./Components/Results";
import UserInput from "./Components/UserInput"
import Results from "./Components/Results";
import { Fragment } from "react"
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 10

  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue  // we add + operator infront pf new value so that the value get added .
      };
    });


  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>

  );
}

export default App
