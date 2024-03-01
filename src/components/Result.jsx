//? Import CSS
import './Result.css';

//? Import Util Functions
import { formatter } from '../util/investment';

export default function Result({ dataResults, initialData }) {
  //   console.log('from Result function', dataResults);

  function getInvestedCapital(dataObjectArray) {
    const permutedArray = [
      ...dataObjectArray.map((element) => {
        return { ...element };
      }),
    ];

    // console.log('permutedArray', permutedArray);
    //? Derive the starting values for totalInterest and investedCapital
    let totalInterest = permutedArray[0].interest;
    let investedCapital =
      permutedArray[0].valueEndOfYear - permutedArray[0].interest;

    // console.log('dataResults[0].interest', dataResults[2].interest);
    // console.log(
    //   'permutedArray[0].valueEndOfYear',
    //   permutedArray[0].valueEndOfYear
    // );
    // console.log('permutedArray[0].interest', permutedArray[0].interest);
    // console.log('totalInterest', totalInterest);
    // console.log('investedCapital', investedCapital);

    const updatedDataArray = permutedArray.map((dataObject, index) => {
      if (index === 0) {
        const investedCapitalVar = investedCapital;
        return {
          ...dataObject,
          totalInterest: dataObject.valueEndOfYear - investedCapitalVar,
          investedCapital: investedCapitalVar,
        };
      }

      if (index >= 0) {
        investedCapital += initialData.annualInvestment;
        return {
          ...dataObject,
          totalInterest: dataObject.valueEndOfYear - investedCapital,
          investedCapital: investedCapital,
        };
      }
    });

    console.log('updated data array', updatedDataArray);
    return updatedDataArray;
  }

  let finalInvestmentResults;
  if (dataResults.length > 0) {
    finalInvestmentResults = getInvestedCapital(dataResults);
  }

  console.log(finalInvestmentResults);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {finalInvestmentResults &&
          finalInvestmentResults.map((dataObject) => {
            return (
              <tr>
                <td>{dataObject.year}</td>
                <td>
                  {formatter.format(Math.ceil(dataObject.valueEndOfYear))}
                </td>
                <td>{formatter.format(Math.ceil(dataObject.interest))}</td>
                <td>{formatter.format(Math.ceil(dataObject.totalInterest))}</td>
                <td>
                  {formatter.format(Math.ceil(dataObject.investedCapital))}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
