import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StepsHeader } from "../../Components/StepsHeader/StepsHeader";
import { FunkyContext } from "../../ContextRoot";

import "./DeliveryStyle.css";

export function Delivery() {
    const navigate = useNavigate();
    const {
        orderToSend,
        setOrder,
        setCustomerInfo,
        selectStep,
        setSelectStep,
        // Other context variables
      } = useContext(FunkyContext);
    
      const [status, setStatus] = useState("untreated");
    
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [customerEmail, setEmail] = useState("");
      const [customerPhone, setPhone] = useState("");
      const [ownComments, setOwnComments] = useState("");
      const [customerAddress, setAddress] = useState("");
      const [customerCounty, setCounty] = useState("");
      const [apartmentNumber, setApartmentNumber] = useState("");
      const [postNumber, setPostNumber] = useState("");
      const [customerFloor, setFloor] = useState("");
      const [portCode, setPortCode] = useState("");
      const [chosenDeliveryOption, setChosenDeliveryOption] = useState(true);
    
      // Validation states
      const [isEmptyFirstName, setIsEmptyFirstName] = useState(false);
      const [isEmptyLastName, setIsEmptyLastName] = useState(false);
      const [isEmptyPhoneNumber, setIsEmptyPhoneNumber] = useState(false);
      const [isEmptyEmail, setIsEmptyEmail] = useState(false);
    
      const [wrongFirstName, setWrongFirstName] = useState(false);
      const [wrongLastName, setWrongLastName] = useState(false);
      const [wrongPhoneNumber, setWrongPhoneNumber] = useState(false);
      const [wrongEmail, setWrongEmail] = useState(false);

      const [shortFirstName, setShortFirstName] = useState(false);

      const [shortLastName, setShortLastName] = useState(false);

      const [shortPhoneNumber, setShortPhoneNumber] = useState(false);

      const [phoneNoSpace ,setPhoneSpace] = useState(false)

      const handleSubmit = (event) => {
        event.preventDefault();

            if (firstName !== "" && lastName!== "" && customerEmail !== "" && customerPhone!=="") {
                const customerInfo = {
                    name: `${firstName} ${lastName}`,
                    mail: customerEmail,
                    mobile: customerPhone,
                    adress: !chosenDeliveryOption ? customerAddress : "",
                    floor: !chosenDeliveryOption ? customerFloor : "",
                    portCode: !chosenDeliveryOption ? portCode : "",
                    comments: ownComments,
                    status: status,
                  };

                setCustomerInfo(customerInfo);
                navigate("/betalning");
                setSelectStep(3);
            }
      };

      // On change
    
      const firstNameChange = (e) => {
        setFirstName(e.target.value);
      };
    
      const lastNameChange = (e) => {
        setLastName(e.target.value);
      };
    
      const emailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const phoneNumberChange = (e) => {
        setPhone(e.target.value);
      };

    const addressChange = (e) => {
        setAddress(e.target.value);
    };

    const ownCommentsChange = (e) => {
        setOwnComments(e.target.value);
    };

    const countyChange = (e) => {
        setCounty(e.target.value);
    };

    const apartmentNumberChange = (e) => {
        setApartmentNumber(e.target.value);
    };

    const postNumberChange = (e) => {
        setPostNumber(e.target.value);
    };

    const floorChange = (e) => {
        setFloor(e.target.value);
    };

    const portCodeChange = (e) => {
        setPortCode(e.target.value);
    };

    // Links
    const backButton = () => {
        navigate("/varukorg")
        setSelectStep(1)
    }

    const goBackToMenu = () => {
        navigate("/menu")
      }

    return (
        <section className="center">
            <section className="delivery-container">
            <button className="back-btn" onClick={() => backButton()}>
                    <span className="material-symbols-outlined">undo</span>
            </button>
                <h1 className="delivery-title mobile">Uppgifter</h1>
                <StepsHeader />
                <header className="delivery-header">
                    <h1 className="delivery-title">Uppgifter</h1>
                </header>
                {
                    orderToSend.items.length > 0 ? (
                        <form className="form" onSubmit={handleSubmit}>
                    <div className="multi-inputs">
                        <div className="label-above-input">
                            <label htmlFor="firstname-input">Förnamn</label>
                            <input
                                className="input name-input"
                                id="firstname-input"
                                name="name"
                                onChange={firstNameChange}
                                value={firstName}
                                type="text"
                                placeholder="Johanna"
                            />
                            {
                                isEmptyFirstName && (
                                    <div className="validation-error">
                               <p>Fyll i detta fält!</p>
                               </div>
                                )
                            }
                            {
                                shortFirstName && (
                                    <div className="validation-error">
                                    <p>Minst 2 bokstäver!</p>
                                    </div>
                                )
                            }
                            {
                                wrongFirstName && (
                                    <div className="validation-error">
                                    <p>Endast bokstäver!</p>
                                    </div>
                                )
                            }
                        </div>

                        <div className="label-above-input">
                            <label htmlFor="lastname-input">
                                Efternamn<span></span>
                            </label>
                            <input
                                className="input name-input"
                                id="lastname-input"
                                onChange={lastNameChange}
                                value={lastName}
                                type="text"
                                placeholder="Doe"
                            />
                                                     {
                                isEmptyLastName && (
                                    <div className="validation-error">
                               <p>Fyll i detta fält!</p>
                               </div>
                                )
                            }
                            {
                                shortLastName && (
                                    <div className="validation-error">
                                    <p>Minst 2 bokstäver!</p>
                                    </div>
                                )
                            }
                            {
                                wrongLastName && (
                                    <div className="validation-error">
                                    <p>Endast bokstäver!</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="label-above-input">
                        <label htmlFor="email-input">Epost</label>
                        <input
                            className="email-input input"
                            id="email-input"
                            name="mail"
                            onChange={emailChange}
                            value={customerEmail}
                            type="email"
                            placeholder="johannadoe@example.com"
                        />
                            {
                                isEmptyEmail && (
                                    <div className="validation-error">
                               <p>Fyll i detta fält!</p>
                               </div>
                                )
                            }
                            {
                                wrongEmail && (
                                    <div className="validation-error">
                                    <p>Ej godkänt format!</p>
                                    </div>
                                )
                            }
                    </div>

                    <div className="label-above-input">
                        <label htmlFor="phone-input">Telefonnummer</label>
                        <input
                            className="phone-input input"
                            id="phone-input"
                            name="mobile"
                            onChange={phoneNumberChange}
                            value={customerPhone}
                            type="number"
                            placeholder="073 123 4561"
                        />
                        {
                                isEmptyPhoneNumber && (
                                    <div className="validation-error">
                               <p>Fyll i detta fält!</p>
                               </div>
                                )
                            }
                            {
                                shortPhoneNumber && (
                                    <div className="validation-error">
                                    <p>Bara 10 siffror!</p>
                                    </div>
                                )
                            }
                            {
                                phoneNoSpace && (
                                    <div className="validation-error">
                                    <p>Inga mellanrum!</p>
                                    </div>
                                )
                            }
                            {
                                wrongPhoneNumber && (
                                    <div className="validation-error">
                                    <p>Endast siffror!</p>
                                    </div>
                                )
                            }
                    </div>

                    <div className="spacer">
                        <div className="radio-spacing">
                            <input
                                id="home-delivery-radio"
                                type="radio"
                                name="deliveryOption"
                                onClick={() => setChosenDeliveryOption(false)} required
                            />
                        
                            <label htmlFor="home-delivery-radio" className="radio-label">
                                Hemleverans
                            </label>
                        </div>

                        {!chosenDeliveryOption && (
                        <>
                            <div className="label-above-input">
                                <label htmlFor="address-input">Adress</label>
                                <input
                                    className="address-input input no-span-input"
                                    id="address-input"
                                    name="adress"
                                    onChange={addressChange}
                                    value={customerAddress}
                                    type="text"
                                    placeholder="Drottninggatan 17"
                                    
                                />
                            </div>

                            <div className="multi-inputs">
                                <div className="label-above-input">
                                    <label htmlFor="post-input">Postnummer</label>
                                    <input
                                        className="post-number-input input no-span-input"
                                        id="post-input"
                                        onChange={postNumberChange}
                                        value={postNumber}
                                        type="number"
                                        placeholder="12345"
                                    />
                                </div>
                                <div className="label-above-input">
                                    <label htmlFor="county-input">Ort</label>
                                    <input
                                        className="county-input input no-span-input"
                                        id="county-input"
                                        onChange={countyChange}
                                        value={customerCounty}
                                        type="text"
                                        placeholder="Karlstad"
                                    />
                                </div>
                            </div>

                            <div className="multi-inputs">
                                <div className="label-above-input">
                                    <label htmlFor="apartment-input">Lgn. nr</label>
                                    <input
                                        className="input tinier-inputs no-span-input"
                                        id="apartment-input"
                                        onChange={apartmentNumberChange}
                                        value={apartmentNumber}
                                        type="number"
                                        placeholder="430"
                                    />
                                </div>
                                <div className="label-above-input">
                                    <label htmlFor="port-code-input">Portkod</label>
                                    <input
                                        className="input tinier-inputs no-span-input"
                                        id="port-code-input"
                                        name="portCode"
                                        onChange={portCodeChange}
                                        value={portCode}
                                        type="text"
                                        placeholder="*1234#"
                                    />
                                </div>
                                <div className="label-above-input">
                                    <label htmlFor="floor-input">Våning</label>
                                    <input
                                        className="input tinier-inputs no-span-input"
                                        id="floor-input"
                                        name="floor"
                                        onChange={floorChange}
                                        value={customerFloor}
                                        type="number"
                                        placeholder="1"
                                    />
                                </div>
                            </div>
                        </>
                    )}

                        <div className="radio-spacing">
                            <input
                                id="takeaway-delivery-radio"
                                type="radio"
                                name="deliveryOption"
                                onClick={() => setChosenDeliveryOption(true)} required
                            />
                            <label htmlFor="takeaway-delivery-radio" className="radio-label">
                                Takeaway
                            </label>
                        </div>
                    </div>

                    <div className="spacer label-above-input">
                        <label htmlFor="own-comments-input">Egna kommentarer</label>
                        <textarea
                            className="input text-area no-span-input"
                            id="own-comments-input"
                            name="comments"
                            onChange={ownCommentsChange}
                            value={ownComments}
                            placeholder="Jag vill inte ha gurka i thai sushin"
                        />
                    </div>

                    <div className="delivery-btn-grad">
                        <button className="btn-grad delivery-btn" type="submit" >
                            Gå till Betalning
                        </button>
                    </div>
                </form>
                    ) : (
                        <>
                            <div className="delivery-center">
                                <p>För att fortsätta behöver du påbörja en beställning.</p>
                            </div>
                            <div className="pay-btn-div">
                                    <button onClick={() => goBackToMenu()} className="btn-grad">Gå tillbaka till menyn</button>
                            </div>
                        </>
                        

                    )
                }
               
            </section>
        </section>
    );
}
