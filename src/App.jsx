import { useState } from 'react';

//? Import Components
import Header from './components/Header';
import UserInputGroup from './components/UserInputGroup';

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 0,
    expectedReturn: 0,
    annualInvestment: 0,
    duration: 0,
  });

  function handleInputData(value, inputField) {
    console.log(value, inputField);
    setInputData((previousData) => {
      return {
        ...previousData,
        [inputField]: value,
      };
    });
  }

  console.log(inputData);

  return (
    <>
      <Header />
      <UserInputGroup onUserInput={handleInputData} />
    </>
  );
}

export default App;
