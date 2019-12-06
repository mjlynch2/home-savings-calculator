const calculate = (homeCost, downPercent, monthlySavings, startingAmount) => {

    let downPayment = (homeCost * downPercent);
    
    let amountToSave = (downPayment - startingAmount);

    let timeNeeded = amountToSave/monthlySavings;

    return timeNeeded;
}

module.exports = { calculate };