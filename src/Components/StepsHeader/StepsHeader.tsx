import { useState, useContext } from "react"

import "./StepsHeaderStyle.css"

import { FunkyContext } from "../../ContextRoot"
export const StepsHeader = () => {

   const {selectStep, setSelectStep} = useContext(FunkyContext)

    const chosenStep = (step) => {
        return {
            height: selectStep === step ? "40px" : null, width: selectStep === step ? "40px" : null, backgroundColor: selectStep === step ? "#97E4A4" : null, borderColor: selectStep === step ? "#2B7837" : null       }
    }

    return (
        <section className="steps-container">
            <div>
                <div className="step-round" style={chosenStep(1)}>1</div>
                <legend>Varukorg</legend>
            </div>
            <div className="line" />
            <div>
                <div className="step-round" style={chosenStep(2)}>2</div>
                <legend>Uppgifter</legend>
            </div>
            <div className="line" />
            <div>
                <button className="step-round" style={chosenStep(3)}>3</button>
                <legend>Betala</legend>
            </div>
            <div className="line" />
            <div>
                <div className="step-round" style={chosenStep(4)}>4</div>
                <legend>Kvitto</legend>
            </div>
        </section>

    )
}