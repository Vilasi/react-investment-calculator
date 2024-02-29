import { useState } from 'react';

//? Import Components
import Header from './components/Header';
import UserInputGroup from './components/UserInputGroup';

//? Import Util Functions
import { calculateInvestmentResults, formatter } from './util/investment';

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  // console.log(calculateInvestmentResults, formatter);

  function handleInputData(value, inputField) {
    console.log(value, inputField);
    setInputData((previousData) => {
      return {
        ...previousData,
        [inputField]: Number(value),
      };
    });
  }

  const annualData = calculateInvestmentResults(inputData);

  console.log(annualData);

  return (
    <>
      <Header />
      <UserInputGroup onUserInput={handleInputData} />
      {/* The data results table will go here */}
      <div id="result"></div>
    </>
  );
}

export default App;
