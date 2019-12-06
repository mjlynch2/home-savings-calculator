import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";

class DataInputs extends Component {
  state = {
    homeCost: 0,
    downPercent: 0,
    monthlySavings: 0,
    startingAmount: 0,
  };

  handleChange = (e, keyname) => {
      this.setState({...this.state, [keyname]: e.target.value})
  }

  handleSubmit = () => {
      this.props.dispatch({ type: 'SET_VALUES', payload: this.state })
      console.log(this.state);
      
  }

  render() {
    return (
      <>
        <TextField
          type="number"
          variant="outlined"
          label="Home Cost"
          onChange={(event) => this.handleChange(event, "homeCost")}
          placeholder="280000"
        />
        <TextField
          type="number"
          variant="outlined"
          label="Down Payment"
          onChange={(event) => this.handleChange(event, "downPercent")}
          placeholder="EG 0.20"
        />
        <TextField
          type="number"
          variant="outlined"
          label="Monthly Savings"
          onChange={(event) => this.handleChange(event, "monthlySavings")}
          placeholder="EG 2000"
        />
        <TextField
          type="number"
          variant="outlined"
          label="Starting Amount"
          onChange={(event) => this.handleChange(event, "startingAmount")}
          placeholder="EG 10000"
        />
        <Button onClick={this.handleSubmit}>Calculate!</Button>
      </>
    );
  }
}

export default connect()(DataInputs);
