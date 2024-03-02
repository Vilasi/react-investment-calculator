//? Import CSS
import './Result.css';

//? Import Util Functions
import { formatter, getInvestedCapital } from '../util/investment';

export default function Result({ dataResults, initialData }) {
  //? This will only run after the calculateInvestmentResults function has processed the data
  let formattedInvestmentResults;
  if (dataResults.length > 0) {
    formattedInvestmentResults = getInvestedCapital(dataResults, initialData);
  }

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
        {formattedInvestmentResults &&
          formattedInvestmentResults.map((dataObject) => {
            return (
              <tr key={dataObject.year}>
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
