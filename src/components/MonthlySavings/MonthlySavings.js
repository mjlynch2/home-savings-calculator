import React from "react";
import DiscreteSlider from "../MaterialComponets/Slider";

const values = {
    name: 'monthlySavings',
    min: 500,
    default: 2000,
    max: 7500,
    stepSize: 500
};

function MonthlySavings(props) {
  return (
    <>
      <DiscreteSlider sliderValues={values} setValue={props.setValue} value={props.value}/>
    </>
  );
}

export default MonthlySavings;
