import React, { useState } from 'react';
import DataInputs from '../DataInputs/DataInputs';
import DownPayment from '../DownPayment/DownPayment';
import MonthlySavings from '../MonthlySavings/MonthlySavings';
import HomeCost from '../HomeCost/HomeCost';

function App() {
    const [value, setValue] = useState({
      downPayment: 0.20,
      monthlySavings: 2000,
      startingAmount: 10000,
      homeCost: 35000
    });

    return (
      <>
        <DownPayment setValue={setValue} value={value}/>
        Down Payment: {parseInt(value.downPayment * 100)}%
        <MonthlySavings setValue={setValue} value={value}/>
        Monthly Savings: ${value.monthlySavings}
        <HomeCost setValue={setValue} value={value}/>
        Home Cost: ${value.homeCost}

      </>
    );
}

export default App;
