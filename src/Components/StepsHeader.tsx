import { useState } from "react"

export const StepsHeader = () => {

    const [selectStep, setSelectStep] = useState(1)

    const chosenStep = (step) => {
        return {
            height: selectStep === step ? "75px" : null, width: selectStep === step ? "75px" : null
        }
    }

    return (
        <section className="steps-container">
            <div>
                <button className="step-round-button" onClick={() => setSelectStep(1)} style={chosenStep(1)}>1</button>
                <legend>Varukorg</legend>
            </div>
            <div>
                <button className="step-round-button" onClick={() => setSelectStep(2)} style={chosenStep(2)}>2</button>
                <legend>Leverans</legend>
            </div>
            <div>
                <button className="step-round-button" onClick={() => setSelectStep(3)} style={chosenStep(3)}>3</button>
                <legend>Betala</legend>
            </div>
            <div>
                <button className="step-round-button" onClick={() => setSelectStep(4)} style={chosenStep(4)}>4</button>
                <legend>Bekräftelse</legend>
            </div>
        </section>

    )
}