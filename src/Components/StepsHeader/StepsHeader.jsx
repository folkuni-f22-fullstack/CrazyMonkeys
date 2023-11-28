import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import "./StepsHeaderStyle.css"

import { FunkyContext } from "../../ContextRoot"
export const StepsHeader = () => {
    const navigate = useNavigate()

   const {selectStep, setSelectStep} = useContext(FunkyContext)

    const chosenStep = (step) => {
        return {
            height: selectStep === step ? "40px" : null, width: selectStep === step ? "40px" : null, backgroundColor: selectStep === step ? "#97E4A4" : null, borderColor: selectStep === step ? "#2B7837" : null       }
    }

    const backButton = (step) => {
        if (step === 1) {
            navigate("/menu")
        } else if (step === 2) {
            navigate("/varukorg")
        } else if (step === 3) {
            navigate("/leverans")
        }
    }

    return (
        <header className="steps-back-container">
                {
                    selectStep < 4 && (
                        <button className="back-btn" onClick={() => backButton(selectStep)}>
                           <span className="material-symbols-outlined">undo</span>
                        </button>
                    )
                }

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
                    <div className="step-round" style={chosenStep(3)}>3</div>
                    <legend>Betala</legend>
                </div>
                <div className="line" />
                <div>
                    <div className="step-round" style={chosenStep(4)}>4</div>
                    <legend>Kvitto</legend>
                </div>
            </section>
        </header>

    )
}