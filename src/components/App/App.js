import React, {Component} from 'react';
import DataInputs from '../DataInputs/DataInputs';
import DownPayment from '../DownPayment/DownPayment';
import MonthlySavings from '../MonthlySavings/MonthlySavings';

class App extends Component {

  render() {
    return (
      <>
        <DataInputs/>
        <DownPayment/>
        <MonthlySavings/>
      </>
  )}
}

export default App;
