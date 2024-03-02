import { useState } from 'react';

//? Import Components
import Header from './components/Header';
import UserInputGroup from './components/UserInputGroup';
import Result from './components/Result';

//? Import Util Functions
import { calculateInvestmentResults } from './util/investment';

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
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
      <UserInputGroup onUserInput={handleInputData} />
      <Result dataResults={annualData} initialData={inputData} />
    </>
  );
}

export default App;
