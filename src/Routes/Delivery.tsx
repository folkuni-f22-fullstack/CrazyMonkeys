import { useState,useContext } from "react";
import { StepsHeader } from "../Components/StepsHeader/StepsHeader";

import { NavLink } from "react-router-dom";
import { FunkyContext } from "../ContextRoot";

import "./DeliveryStyle.css";

export function Delivery() {
    const { orderToSend, order, setOrder, setCustomerInfo, customerInfo } = useContext(FunkyContext);

    const handleInputChange = (e) => {
        const fieldName = e.target.name; 
        const value = e.target.value;

        
        setCustomerInfo((prevState) => ({
            ...prevState,
            [fieldName]: value,
        }));
    };

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

  function isValidName(name) {
    const validCharLetter = "abcdefghijklmnopqrstuvwxyzåäö- ";

    for (let i = 0; i < name.length; i++) {
      let char = name.charAt(i).toLowerCase();
      if (!validCharLetter.includes(char)) {
        return [false, "Vänligen använd endast bokstäver"];
      }
    }
    if (name.length < 2) {
      return [false, "Minst 2 tecken långt"];
    }
    return [true, ""];
  }

  function isValidPhoneNumber(number) {
    const validPhoneFormat = "+461234567890";
    const whiteSpace = /\s/;
    if (whiteSpace.test(number)) {
      return [false, "Vänligen använd utan mellanrum"];
    }

    for (
      let validNumberCounter = 0;
      validNumberCounter < number.length;
      validNumberCounter++
    ) {
      let validPhoneNumber = number.charAt(validNumberCounter);

      if (!validPhoneFormat.includes(validPhoneNumber)) {
        return [false, "Vänligen använd endast siffror"];
      }
    }
    if (number.length < 10) {
      return [false, "Minst 10 tecken"];
    } else if (number.length > 13) {
      return [false, "Inte mer än 13 tecken"];
    }
    return [true, ""];
  }

  function isValidEmailAddress(mail) {
    const validEmailCharacter = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    if (!validEmailCharacter.test(mail)) {
      return [false, "Ej godkänt format"];
    }
    return [true, ""];
  }

  // Inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ownComments, setOwnComments] = useState("");
  const [address, setAddress] = useState("");
  const [county, setCounty] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [postNumber, setPostNumber] = useState("");
  const [floor, setFloor] = useState("");
  const [portCode, setPortCode] = useState("");

  const firstNameChange = (e) => {
    setFirstName(e.target.value);

    if (e.target.value === "") {
      setIsEmptyFirstName(true);
    } else {
      setIsEmptyFirstName(false);
    }
  };

  const lastNameChange = (e) => {
    setLastName(e.target.value);

    if (e.target.value === "") {
      setIsEmptyLastName(true);
    } else {
      setIsEmptyLastName(false);
    }
  };

  const emailChange = (e) => {
    setEmail(e.target.value);

    if (e.target.value === "") {
      setIsEmptyEmail(true);
    } else {
      setIsEmptyEmail(false);
    }
  };

  const phoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);

    if (e.target.value === "") {
      setIsEmptyPhoneNumber(true);
    } else {
      setIsEmptyPhoneNumber(false);
    }
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (chosenDeliveryOption) {
      if (
        firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        phoneNumber !== "" &&
        address !== "" &&
        county !== "" &&
        apartmentNumber !== "" &&
        postNumber !== "" &&
        floor !== "" &&
        portCode !== ""
      ) {
        // Home delivery
      }
    } else {
      if (
        firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        phoneNumber !== ""
      ) {
        // Takeaway
      }
    }
  };

  const [isValidFirstName, notValidFirstName] = isValidName(firstName);

  const [isValidLastName, notValidLastName] = isValidName(lastName);
  const [isValidNumber, notValidNumber] = isValidPhoneNumber(phoneNumber);
  const [isValidEmail, notValidEmail] = isValidEmailAddress(email);

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

  return (
    <section className="center">
      <section className="delivery-container">
        <StepsHeader />
        <header className="header">
          <button>
            <span className="material-symbols-outlined">undo</span>
          </button>{" "}
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
                onChange={handleInputChange}
                onBlur={() => setWrongFirstName(true)}
                style={validationErrorBorder(
                  isEmptyFirstName,
                  wrongFirstName,
                  isValidFirstName
                )}
                value={customerInfo.name}
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
                value={lastName}
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
              onChange={handleInputChange}
              onBlur={() => setWrongEmail(true)}
              style={validationErrorBorder(
                isEmptyEmail,
                wrongEmail,
                isValidEmail
              )}
              value={customerInfo.mail}
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
              onChange={handleInputChange}
              onBlur={() => setWrongPhoneNumber(true)}
              style={validationErrorBorder(
                isEmptyPhoneNumber,
                wrongPhoneNumber,
                isValidNumber
              )}
              value={customerInfo.mobile}
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
              onChange={handleInputChange}
              value={customerInfo.comments}
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
                  onChange={handleInputChange}
                  onBlur={() => setWrongAddress(true)}
                  value={customerInfo.adress}
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
                    value={postNumber}
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
                    value={county}
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
                    onChange={handleInputChange}
                    value={customerInfo.portCode}
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
                    onChange={handleInputChange}
                    value={customerInfo.floor}
                    type="number"
                    placeholder="1"
                  />
                </div>
              </div>
            </>
          )}
          <NavLink to="/betalning">
            <button className="btn-grad" type="submit">
              Gå till Betalning
            </button>
          </NavLink>
        </form>
      </section>
    </section>
  );
}
