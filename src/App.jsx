import { useState } from 'react';

//? Import Components
import Header from './components/Header';
import UserInputGroup from './components/UserInputGroup';
import Result from './components/Result';

//? Import Util Functions
import { calculateInvestmentResults } from './util/investment';

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  function handleInputData(value, inputField) {
    setInputData((previousData) => {
      return {
        ...previousData,
        [inputField]: Number(value),
      };
    });
  }

  const annualData = calculateInvestmentResults(inputData);

  return (
    <>
      <Header />
      <UserInputGroup onUserInput={handleInputData} value={inputData} />
      <Result dataResults={annualData} initialData={inputData} />
    </>
  );
}

export default App;
