import React, { useState } from 'react';
import DiscreteSlider from '../MaterialComponets/Slider';

const values = {
    min: 0.05,
    default: 0.20,
    max: 0.20,
    stepSize: 0.01
}

function DownPayment () {

    return (
        <>
            <DiscreteSlider sliderValues={values}/>
            {values.min} | {values.default}
        </>
    )
}

export default DownPayment;