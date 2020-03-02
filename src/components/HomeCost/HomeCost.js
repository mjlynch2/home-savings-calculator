import React from "react";
import DiscreteSlider from "../MaterialComponets/Slider";

const values = {
  name: "homeCost",
  min: 200000,
  default: 320000,
  max: 500000,
  stepSize: 10000
};

function HomeCost(props) {
  return (
    <>
      <DiscreteSlider
        sliderValues={values}
        setValue={props.setValue}
        value={props.value}
      />
    </>
  );
}

export default HomeCost;
