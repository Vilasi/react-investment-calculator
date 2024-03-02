// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function getInvestedCapital(calculatedInvestmentResults, initialData) {
  const investmentResultsArray = [
    ...calculatedInvestmentResults.map((element) => {
      return { ...element };
    }),
  ];

  //? Derive the starting values for totalInterest and investedCapital
  let investedCapital =
    investmentResultsArray[0].valueEndOfYear -
    investmentResultsArray[0].interest;

  //? Formats the final data array to include totalInterest and investedCapital - derived from the original dataSet and calculatedInvestmentResults
  const finalInvestmentResults = investmentResultsArray.map(
    (dataObject, index) => {
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
    }
  );

  return finalInvestmentResults;
}
