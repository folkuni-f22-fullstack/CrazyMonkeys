import React, { useState } from "react";
import "./chefsview.css";
import { FaLock} from "react-icons/fa";



function Chefsview() {


    
    const [selectTab, setSelectTab] = useState("untreated");
    const [isLocked, setIsLocked] = useState(false);

    const chosenTab = (tab) => {
        return selectTab === tab ? "selected-tab" : "unselected-tab";
    };

    return (
        <div className="employee-view-wrapper">
            <section className="employee-view-container">
                <header className="title-header">
                    <span>Du är inloggad</span>
                    <h1>Kockens vy</h1>
                    <div className="title-line" />
                    <section className="tabs-section">
                       
                        <button
                            className={chosenTab("during-treatment")}
                            onClick={() => setSelectTab("during-treatment")}
                        >
                            Underbehandling
                        </button>
                        <button className={chosenTab("done")} onClick={() => setSelectTab("done")}>
                            Färdig
                        </button>
                    </section>
                </header>

                <div className="order-box">
                    <span className="material-symbols-outlined">schedule</span>
                    <p className="order-name">Ordernummer: 699 </p>

                    {isLocked ? (
                        <span>Order slutförs...</span>
                    ) : (
                        <>
                            <button className="button-ongoing">Ordern är pågående  <FaLock/></button>
                        
                        </>
                    )}

                    <div className="details-about-order">
                       <span className="msgFromEmployee">Meddelande från anställd: <hr/> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></span>

                       <span className="msgFromCustomer">Meddelande från Kund:<hr/> 
                       <p> Voluptatibus, sequi vero quam quisquam necessitatibus doloremque ratione magni quasi.</p></span>

                        <details>
                            <summary className="summary-box">Info om kund</summary>
                            <p>Namn: </p>
                            <p>Adress: </p>
                            <p>Våning: </p>
                            <p>Portkod: </p>
                            <p>Mejl: </p>
                            <p>Telefonnummer: </p>
                        </details>

                        <button
                            className="button-confirm"
                            type="submit"
                            onClick={() => setIsLocked(true)}
                        >
                            Slutför order
                            {isLocked && (
                                <span className="material-symbols-outlined">lock</span>
                            )}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Chefsview;
