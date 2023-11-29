import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StepsHeader } from "../Components/StepsHeader/StepsHeader";
import { FunkyContext } from "../ContextRoot";

import { isValidName, isValidEmailAddress, isValidPhoneNumber } from "../Components/validation";

import "./DeliveryStyle.css";

export function Delivery() {
    const navigate = useNavigate();
    const [status, setStatus] = useState("untreated")

    const {
        orderToSend,
        order,
        setOrder,
        setCustomerInfo,
        customerInfo,
        selectStep,
        setSelectStep,
        deliveryFirstName, setDeliveryFirstName, deliveryLastName, setDeliveryLastName, deliveryEmail, setDeliveryEmail, deliveryPhoneNumber, setDeliveryPhoneNumber, deliveryOwnComments, setDeliveryOwnComments, deliveryAddress, setDeliveryAddress, deliveryCounty, setDeliveryCounty, deliveryApartmentNumber, setDeliveryApartmentNumber, deliveryPostNumber, setDeliveryPostNumber, deliveryFloor, setDeliveryFloor, deliveryPortCode, setDeliveryPortCode
    } = useContext(FunkyContext);

    // States
    const [chosenDeliveryOption, setChosenDeliveryOption] = useState(false);
    

    const [isEmptyFirstName, setIsEmptyFirstName] = useState(false);

    const [isEmptyLastName, setIsEmptyLastName] = useState(false);

    const [isEmptyPhoneNumber, setIsEmptyPhoneNumber] = useState(false);

    const [isEmptyEmail, setIsEmptyEmail] = useState(false);

    // Validation
    const [wrongFirstName, setWrongFirstName] = useState(false);

    const [wrongLastName, setWrongLastName] = useState(false);

    const [wrongPhoneNumber, setWrongPhoneNumber] = useState(false);

    const [wrongEmail, setWrongEmail] = useState(false);



    const firstNameChange = (e) => {
        setDeliveryFirstName(e.target.value);

        if (e.target.value === "") {
            setIsEmptyFirstName(true);
        } else {
            setIsEmptyFirstName(false);
        }
    };

    const lastNameChange = (e) => {
        setDeliveryLastName(e.target.value);

        if (e.target.value === "") {
            setIsEmptyLastName(true);
        } else {
            setIsEmptyLastName(false);
        }
    };

    const emailChange = (e) => {
        setDeliveryEmail(e.target.value);

        if (e.target.value === "") {
            setIsEmptyEmail(true);
        } else {
            setIsEmptyEmail(false);
        }
    };

    const phoneNumberChange = (e) => {
        setDeliveryPhoneNumber(e.target.value);

        if (e.target.value === "") {
            setIsEmptyPhoneNumber(true);
        } else {
            setIsEmptyPhoneNumber(false);
        }
    };

    const addressChange = (e) => {
        setDeliveryAddress(e.target.value);
    };

    const ownCommentsChange = (e) => {
        setDeliveryOwnComments(e.target.value);
    };

    const countyChange = (e) => {
        setDeliveryCounty(e.target.value);
    };

    const apartmentNumberChange = (e) => {
        setDeliveryApartmentNumber(e.target.value);
    };

    const postNumberChange = (e) => {
        setDeliveryPostNumber(e.target.value);
    };

    const floorChange = (e) => {
        setDeliveryFloor(e.target.value);
    };

    const portCodeChange = (e) => {
        setDeliveryPortCode(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (chosenDeliveryOption) {
            if (
                deliveryFirstName !== "" &&
                deliveryLastName !== "" &&
                deliveryEmail !== "" &&
                deliveryPhoneNumber !== "" &&
                deliveryAddress !== "" &&
                deliveryCounty !== "" &&
                deliveryApartmentNumber !== "" &&
                deliveryPostNumber !== "" &&
                deliveryFloor !== "" &&
                deliveryPortCode !== "" && isValidFirstName && isValidLastName && isValidEmail && isValidNumber
            ) {
                if (deliveryOwnComments !== "") {
                    setCustomerInfo({
                        name: `${deliveryFirstName} ${deliveryLastName}`,
                        mail: deliveryEmail,
                        mobile: deliveryPhoneNumber,
                        adress: deliveryAddress,
                        floor,
                        portCode,
                        comments: deliveryOwnComments,
                        status: status
                    });
                } else {
                    setCustomerInfo({
                        name: `${deliveryFirstName} ${deliveryLastName}`,
                        mail: deliveryEmail,
                        mobile: deliveryPhoneNumber,
                        adress: deliveryAddress,
                        floor,
                        portCode,
                        comments: "",
                        status: status
                    });
                }
                navigate("/betalning");
                setSelectStep(3);
            }
        } else {
            if (deliveryFirstName !== "" && deliveryLastName !== "" && deliveryEmail !== "" && deliveryPhoneNumber !== "" && isValidFirstName && isValidLastName && isValidEmail && isValidNumber) {
                if (deliveryOwnComments !== "") {
                    setCustomerInfo({
                        name: `${deliveryFirstName} ${deliveryLastName}`,
                        mail: deliveryEmail,
                        mobile: deliveryPhoneNumber,
                        adress: "",
                        floor: "",
                        portCode: "",
                        comments: deliveryOwnComments,
                        status: status
                    });
                } else {
                    setCustomerInfo({
                        name: `${deliveryFirstName} ${deliveryLastName}`,
                        mail: deliveryEmail,
                        mobile: deliveryPhoneNumber,
                        adress: "",
                        floor: "",
                        portCode: "",
                        comments: deliveryOwnComments,
                        status: status
                    });
                }
                navigate("/betalning");
                setSelectStep(3);
            }
        }
    };

    const [isValidFirstName, notValidFirstName] = isValidName(deliveryFirstName);

    const [isValidLastName, notValidLastName] = isValidName(deliveryLastName);
    const [isValidNumber, notValidNumber] = isValidPhoneNumber(deliveryPhoneNumber);
    const [isValidEmail, notValidEmail] = isValidEmailAddress(deliveryEmail);

    // style
    const validationErrorBorder = (empty, wrong, isValid) => {
        return {
            border: empty
                ? null
                : wrong
                ? isValid
                    ? "2px solid #48E761"
                    : "2px solid #FF0000"
                : null,
        };
    };

    const onGoBackBtn = () => {
        navigate("/varukorg");
        setSelectStep(1);
    };

    return (
        <section className="center">
            <section className="delivery-container">
                <StepsHeader />
                <header className="header">
                    <button onClick={onGoBackBtn}>
                        <span className="material-symbols-outlined">undo</span>
                    </button>
                    <h1>Uppgifter</h1>
                </header>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="multi-inputs">
                        <div className="label-above-input">
                            <label htmlFor="firstname-input">Förnamn</label>
                            <input
                                className="input name-input"
                                id="firstname-input"
                                name="name"
                                onChange={firstNameChange}
                                onBlur={() => setWrongFirstName(true)}
                                style={validationErrorBorder(
                                    isEmptyFirstName,
                                    wrongFirstName,
                                    isValidFirstName
                                )}
                                value={deliveryFirstName}
                                type="text"
                                placeholder="Johanna"
                                required
                            />
                            {!isEmptyFirstName && (
                                <div className="validation-error">
                                    <p>
                                        {isEmptyFirstName
                                            ? ""
                                            : wrongFirstName
                                            ? notValidFirstName
                                            : ""}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="label-above-input">
                            <label htmlFor="lastname-input">
                                Efternamn<span></span>
                            </label>
                            <input
                                className="input name-input"
                                id="lastname-input"
                                onChange={lastNameChange}
                                onBlur={() => setWrongLastName(true)}
                                style={validationErrorBorder(
                                    isEmptyLastName,
                                    wrongLastName,
                                    isValidLastName
                                )}
                                value={deliveryLastName}
                                type="text"
                                placeholder="Doe"
                                required
                            />
                            {!isEmptyLastName && (
                                <div className="validation-error">
                                    <p>
                                        {isEmptyLastName
                                            ? ""
                                            : wrongLastName
                                            ? notValidLastName
                                            : ""}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="label-above-input">
                        <label htmlFor="email-input">Epost</label>
                        <input
                            className="email-input input"
                            id="email-input"
                            name="mail"
                            onChange={emailChange}
                            onBlur={() => setWrongEmail(true)}
                            style={validationErrorBorder(isEmptyEmail, wrongEmail, isValidEmail)}
                            value={deliveryEmail}
                            type="email"
                            placeholder="johannaDoe@example.com"
                            required
                        />
                        {!isEmptyEmail && (
                            <div className="validation-error">
                                <p>{isEmptyEmail ? "" : wrongEmail ? notValidEmail : ""}</p>
                            </div>
                        )}
                    </div>

                    <div className="label-above-input">
                        <label htmlFor="phone-input">Telefonnummer</label>
                        <input
                            className="phone-input input"
                            id="phone-input"
                            name="mobile"
                            onChange={phoneNumberChange}
                            onBlur={() => setWrongPhoneNumber(true)}
                            style={validationErrorBorder(
                                isEmptyPhoneNumber,
                                wrongPhoneNumber,
                                isValidNumber
                            )}
                            value={deliveryPhoneNumber}
                            type="number"
                            placeholder="070 123 4561"
                            required
                        />
                        {!isEmptyPhoneNumber && (
                            <div className="validation-error">
                                <p>
                                    {isEmptyPhoneNumber
                                        ? ""
                                        : wrongPhoneNumber
                                        ? notValidNumber
                                        : ""}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="spacer label-above-input">
                        <label htmlFor="own-comments-input">Egna kommentarer</label>
                        <textarea
                            className="input text-area no-span-input"
                            id="own-comments-input"
                            name="comments"
                            onChange={ownCommentsChange}
                            value={deliveryOwnComments}
                            placeholder="Jag vill inte ha gurka i thai sushin"
                        />
                    </div>

                    <div className="spacer">
                        <div className="radio-spacing">
                            <input
                                id="takeaway-delivery-radio"
                                type="radio"
                                name="deliveryOption"
                                onClick={() => setChosenDeliveryOption(false)}
                                required
                            />
                            <label htmlFor="takeaway-delivery-radio" className="radio-label">
                                Takeaway
                            </label>
                        </div>
                        <div className="radio-spacing">
                            <input
                                id="home-delivery-radio"
                                type="radio"
                                name="deliveryOption"
                                onClick={() => setChosenDeliveryOption(true)}
                                required
                            />
                            <label htmlFor="home-delivery-radio" className="radio-label">
                                Hemleverans
                            </label>
                        </div>
                    </div>

                    {chosenDeliveryOption && (
                        <>
                            <div className="label-above-input">
                                <label htmlFor="address-input">Adress</label>
                                <input
                                    className="address-input input no-span-input"
                                    id="address-input"
                                    name="adress"
                                    onChange={addressChange}
                                    value={deliveryAddress}
                                    type="text"
                                    placeholder="Drottninggatan 17"
                                    required
                                />
                            </div>

                            <div className="multi-inputs">
                                <div className="label-above-input">
                                    <label htmlFor="post-input">Postnummer</label>
                                    <input
                                        className="post-number-input input no-span-input"
                                        id="post-input"
                                        onChange={postNumberChange}
                                        value={deliveryPostNumber}
                                        type="number"
                                        placeholder="12345"
                                        required
                                    />
                                </div>
                                <div className="label-above-input">
                                    <label htmlFor="county-input">Ort</label>
                                    <input
                                        className="county-input input no-span-input"
                                        id="county-input"
                                        onChange={countyChange}
                                        value={deliveryCounty}
                                        type="text"
                                        placeholder="Karlstad"
                                        required
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
                                        value={deliveryApartmentNumber}
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
                                        value={deliveryPortCode}
                                        type="number"
                                        placeholder="1234"
                                    />
                                </div>
                                <div className="label-above-input">
                                    <label htmlFor="floor-input">Våning</label>
                                    <input
                                        className="input tinier-inputs no-span-input"
                                        id="floor-input"
                                        name="floor"
                                        onChange={floorChange}
                                        value={deliveryFloor}
                                        type="number"
                                        placeholder="1"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    <div className="delivery-btn-grad ">
                        <button className="btn-grad delivery-btn" type="submit" >
                            Gå till Betalning
                        </button>
                    </div>
                </form>
            </section>
        </section>
    );
}
