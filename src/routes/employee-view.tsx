import { useState } from "react"

export const EmployeeView = () => {

    const [selectTab, setSelectTab] = useState("untreated")

    const [isLocked, setIsLocked] = useState(false)

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
                        <div className="order-box">
                        <span className="material-symbols-outlined">schedule</span>
                            <p className="order-name">Ordernummer 699</p>
                           <button className="button button-confirm" onClick={() => setIsLocked(true)}>Bekräfta {
                            isLocked && <span className="material-symbols-outlined">lock</span>
}</button>
                           <button className="button button-decline">Neka</button>
                           <button className="button button-edit">Ändra</button>
                           <button className="button button-more"><span className="material-symbols-outlined">
expand_more
</span></button>
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