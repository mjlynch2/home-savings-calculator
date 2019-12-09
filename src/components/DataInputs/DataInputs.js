import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField, Button, Typography } from "@material-ui/core";

const styles = {
    container: {
        maxWidth: '75vw',
        textAlign: 'center',
        margin: 'auto',
    },
    el: {
        margin: '5px'
    }
}

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
      <div style={styles.container}>
        <TextField
          type="number"
          variant="outlined"
          label="Home Cost"
          onChange={event => this.handleChange(event, "homeCost")}
          placeholder="280000"
          style={styles.el}
        />
        <TextField
          type="number"
          variant="outlined"
          label="Down Payment"
          onChange={event => this.handleChange(event, "downPercent")}
          placeholder="EG 0.20"
          style={styles.el}
        />
        <TextField
          type="number"
          variant="outlined"
          label="Monthly Savings"
          onChange={event => this.handleChange(event, "monthlySavings")}
          placeholder="EG 2000"
          style={styles.el}
        />
        <TextField
          type="number"
          variant="outlined"
          label="Starting Amount"
          onChange={event => this.handleChange(event, "startingAmount")}
          placeholder="EG 10000"
          style={styles.el}
        />
        <Button
          variant="outlined"
          style={styles.el}
          onClick={this.handleSubmit}
        >
          Calculate!
        </Button>
        <br/>
        {this.props.data.months == undefined ? '' : <Typography variant='h3'>{this.props.data.months} Months Til House!</Typography>}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    data: reduxState.data
})

export default connect(mapStateToProps)(DataInputs);
