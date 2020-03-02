import React from 'react';
import DiscreteSlider from '../MaterialComponets/Slider';

const values = {
    name: 'downPayment',
    min: 0.05,
    default: 0.20,
    max: 0.20,
    stepSize: 0.01
}

function DownPayment(props) {

    return (
        <>
            <DiscreteSlider sliderValues={values} setValue={props.setValue} value={props.value}/>
        </>
    )
}

export default DownPayment;