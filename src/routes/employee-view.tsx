import { useState } from "react"

export const EmployeeView = () => {

    const [selectTab, setSelectTab] = useState("untreated")

    const chosenTab = (tab) => {
        return {
            backgroundColor: selectTab === tab ? "#fff" : null
        }
    }

    return (
        <section className="employee-view-container">
            <span>Du är inloggad</span>
            <h1>Beställningar</h1>
            <hr />
            <section>
                <button onClick={() => setSelectTab("untreated")} style={chosenTab("untreated")}>Obehandlade</button>
                <button onClick={() => setSelectTab("during-treatment")} style={chosenTab("during-treatment")}>Underbehandling</button>
                <button onClick={() => setSelectTab("done")} style={chosenTab("done")}>Färdig</button>
            </section>
            {
                selectTab === "untreated" && (
                    <section>
                        <div>
                            Order nmr: 699 <select>
                                <option>Obehandlade</option>
                                <option>Pågående</option>
                                <option>Underbehandling</option>
                                <option>Väntandes</option>
                            </select>
                            X redo
                        </div>
                        <hr />
                    </section>
                )
            }
            {
                selectTab === "during-treatment" && (
                    <section>
                        <div>
                            Order nmr: 699 <select>
                                <option>Pågående</option>
                                <option>Underbehandling</option>
                                <option>Väntandes</option>
                            </select>
                            X redo
                        </div>
                        <hr />
                    </section>
                )
            }
        </section>
    )
}