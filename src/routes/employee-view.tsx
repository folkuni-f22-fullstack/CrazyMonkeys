import { useState, useContext } from "react";
import { FunkyContext } from "../ContextRoot";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import "./employeeStyle.css";

export const EmployeeView = () => {
  const { setIsLoggedIn } = useContext(FunkyContext);

  const [selectTab, setSelectTab] = useState("untreated");

  const [isLocked, setIsLocked] = useState(false);

  const chosenTab = (tab) => {
    return selectTab === tab ? "selected-tab" : "unselected-tab";
  };

  const [selectOrder, setSelectOrder] = useState({});

  const [msgToCook, setMsgToCook] = useState("");

  const onChangeTextArea = (event) => {
    setMsgToCook(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // if selectOrder is selected and has an object of an order, do this: if "skicka till kocken" button is clicked, send the order with "info till kocken" textarea text to "kockens vy" (if there is any message)
  };

  const onClickLogOut = () => {
    setIsLocked(false);
  };

  return (
    <>
      <Header />
      <section className="center">
        <section className="employee-view-container">
            <header className="title-header">
            <span>Du är inloggad</span>
            <button onClick={onClickLogOut} className="btn-grad">
                logga ut
            </button>
            <h1 className="login-title">Beställningar</h1>
            <div className="title-line" />
            <section className="tabs-section">
                <button
                className={chosenTab("untreated")}
                onClick={() => setSelectTab("untreated")}
                >
                Obehandlade
                </button>
                <button
                className={chosenTab("during-treatment")}
                onClick={() => setSelectTab("during-treatment")}
                >
                Underbehandling
                </button>
                <button
                className={chosenTab("done")}
                onClick={() => setSelectTab("done")}
                >
                Färdig
                </button>
            </section>
            </header>

            {selectTab === "untreated" && (
            <section>
                <form onSubmit={onSubmit}>
                <div className="order-box">
                    <span className="material-symbols-outlined">schedule</span>
                    <p className="order-name">Ordernummer 699</p>
                    {isLocked ? (
                    <span>Skickar till kocken...</span>
                    ) : (
                    <>
                        <button className=" button-decline">Neka</button>
                        <button className=" button-edit">Ändra</button>
                    </>
                    )}
                    <details onClick={() => setSelectOrder("eeeee")}>
                    <summary></summary>
                    <div className="details-about-order">
                        <hr />
                        <p>Maträtter: </p>
                        <p>Tillbehör: </p>
                        <p>Dryck(er): </p>
                        <p>Summa: </p>
                        <hr />
                        <p>Kundkommentar: </p>

                        <details>
                        <summary className="summary-box">Meddela kocken</summary>
                        <textarea
                            onChange={onChangeTextArea}
                            className="msg-to-cook-textarea"
                            placeholder="Meddelande till kocken"
                        />
                        </details>
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
                        className=" button-confirm"
                        type="submit"
                        onClick={() => setIsLocked(true)}
                        >
                        Skicka till kocken{" "}
                        {isLocked && (
                            <span className="material-symbols-outlined">lock</span>
                        )}
                        </button>
                    </div>
                    </details>
                </div>
                </form>
                <hr />
            </section>
            )}
        </section>
      </section>

      <Footer />
    </>
  );
};
