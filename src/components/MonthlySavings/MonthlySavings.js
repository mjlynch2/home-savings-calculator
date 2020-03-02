import React, { useState } from "react";
import DiscreteSlider from "../MaterialComponets/Slider";

const values = {
  min: 0,
  default: 2000,
  max: 5000,
  stepSize: 500
};

function MonthlySavings() {
  return (
    <>
      <DiscreteSlider sliderValues={values} />
      {values.min} | {values.default}
    </>
  );
}

export default MonthlySavings;
