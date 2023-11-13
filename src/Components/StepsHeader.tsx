import { useState } from "react"

export const StepsHeader = () => {

    const [selectStep, setSelectStep] = useState(1)

    const chosenStep = (step) => {
        return {
            height: selectStep === step ? "40px" : null, width: selectStep === step ? "40px" : null, backgroundColor: selectStep === step ? "#97E4A4" : null, borderColor: selectStep === step ? "#2B7837" : null       }
    }

    return (
        <section className="steps-container">
            <div>
                <button className="step-round-button" onClick={() => setSelectStep(1)} style={chosenStep(1)}>1</button>
                <legend>Varukorg</legend>
            </div>
            <div className="line" />
            <div>
                <button className="step-round-button" onClick={() => setSelectStep(2)} style={chosenStep(2)}>2</button>
                <legend>Uppgifter</legend>
            </div>
            <div className="line" />
            <div>
                <button className="step-round-button" onClick={() => setSelectStep(3)} style={chosenStep(3)}>3</button>
                <legend>Betala</legend>
            </div>
            <div className="line" />
            <div>
                <button className="step-round-button" onClick={() => setSelectStep(4)} style={chosenStep(4)}>4</button>
                <legend>Kvitto</legend>
            </div>
        </section>

    )
}