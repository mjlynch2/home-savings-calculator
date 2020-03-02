import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  }
}));

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();
  const marks = [
    { value: props.sliderValues.min, label: `${props.sliderValues.min}`},
    { value: props.sliderValues.max, label: `${props.sliderValues.max}`}
  ];

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={props.sliderValues.default}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        marks={marks}
        step={props.sliderValues.stepSize}
        min={props.sliderValues.min}
        max={props.sliderValues.max}
      />
    </div>
  );
}
