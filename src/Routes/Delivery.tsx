import { useState } from "react"
import { StepsHeader } from "../Components/StepsHeader"

export function Delivery() {
    // States
    const [chosenDeliveryOption, setChosenDeliveryOption] = useState(false)

    const [isEmptyFirstName, setIsEmptyFirstName] = useState(false)

    const [isEmptyLastName, setIsEmptyLastName] = useState(false)

    const [isEmptyPhoneNumber, setIsEmptyPhoneNumber] = useState(false)

    const [isEmptyEmail, setIsEmptyEmail] = useState(false)

    const [isEmptyAddress, setIsEmptyAddress] = useState(false)

    const [isEmptyPostNumber, setIsEmptyPostNumber] = useState(false)

    const [isEmptyCounty, setIsEmptyCounty] = useState(false)

    const [isEmptyApartmentNumber, setIsEmptyApartmentNumber] = useState(false)

    const [isEmptyFloor, setIsEmptyFloor] = useState(false)

    const [isEmptyPortCode, setIsEmptyPortCode] = useState(false)

    // Validation
    const [wrongFirstName, setWrongFirstName] = useState(false)

    const [wrongLastName, setWrongLastName] = useState(false)

    const [wrongPhoneNumber, setWrongPhoneNumber] = useState(false)

    const [wrongEmail, setWrongEmail] = useState(false)

    const [wrongAddress, setWrongAddress] = useState(false)

    function isValidName(name) {
        const validCharLetter = "abcdefghijklmnopqrstuvwxyzåäö- "

        for (let i = 0; i < name.length; i++) {
            let char = name.charAt(i).toLowerCase()
            if (!validCharLetter.includes(char)) {
                return [false, "Vänligen använd endast bokstäver"]
            }
        }
        if (name.length < 2) {
            return [false, "För- eller efternamn behöver minst vara 2 tecken långt"]
        }
        return [true, ""]
    }

    function isValidPhoneNumber(number) {

        const validPhoneFormat = "+461234567890"
        const whiteSpace = /\s/
        if (whiteSpace.test(number)) {
            return [false, "Vänligen använd utan mellanrum"]
        }

        for (let validNumberCounter = 0; validNumberCounter < number.length; validNumberCounter++) {
            let validPhoneNumber = number.charAt(validNumberCounter)

            if (!validPhoneFormat.includes(validPhoneNumber)) {
                return [false, "Vänligen använd endast siffror"]
            }
        }
        if (number.length < 10) {
            return [false, "Vänligen skriv in minst 10 tecken"]
        } else if (number.length > 13) {
            return [false, "Vänligen använd inte mer än 13 tecken"]
        }
        return [true, ""]
    }


    function isValidEmailAddress(mail) {
        const validEmailCharacter = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/

        if (!validEmailCharacter.test(mail)) {
            return [false, "Ej godkänt format"]
        }
        return [true, ""]
    }


    // Inputs
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [ownComments, setOwnComments] = useState("")
    const [address, setAddress] = useState("")
    const [county, setCounty] = useState("")
    const [apartmentNumber, setApartmentNumber] = useState("")
    const [postNumber, setPostNumber] = useState("")
    const [floor, setFloor] = useState("")
    const [portCode, setPortCode] = useState("")

    const firstNameChange = (e) => {
        setFirstName(e.target.value)

        console.log(e.target.value);
        
        if(e.target.value === "") {
            setIsEmptyFirstName(true)
        } else {
            setIsEmptyFirstName(false)
        }
        console.log(isEmptyFirstName);
    }

    const lastNameChange = (e) => {
        setLastName(e.target.value)

        if(e.target.value === "") {
            setIsEmptyLastName(true)
        } else {
            setIsEmptyLastName(false)
        }
    }

    const emailChange = (e) => {
        setEmail(e.target.value)

        if(e.target.value === "") {
            setIsEmptyEmail(true)
        } else {
            setIsEmptyEmail(false)
        }
    }

    const phoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)

        if(e.target.value === "") {
            setIsEmptyPhoneNumber(true)
        } else {
            setIsEmptyPhoneNumber(false)
        }
    }

    const addressChange = (e) => {
        setAddress(e.target.value)

        if(e.target.value === "") {
            setIsEmptyAddress(true)
        } else {
            setIsEmptyAddress(false)
        }
    }

    const ownCommentsChange = (e) => {
        setOwnComments(e.target.value)
    }

    const countyChange = (e) => {
        setCounty(e.target.value)

        if(e.target.value === "") {
            setIsEmptyCounty(true)
        } else {
            setIsEmptyCounty(false)
        }
    }

    const apartmentNumberChange = (e) => {
        setApartmentNumber(e.target.value)

        if(e.target.value === "") {
            setIsEmptyApartmentNumber(true)
        } else {
            setIsEmptyApartmentNumber(false)
        }
    }

    const postNumberChange = (e) => {
        setPostNumber(e.target.value)

        if(e.target.value === "") {
            setIsEmptyPostNumber(true)
        } else {
            setIsEmptyPostNumber(false)
        }
    }

    const floorChange = (e) => {
        setFloor(e.target.value)

        if(e.target.value === "") {
            setIsEmptyFloor(true)
        } else {
            setIsEmptyFloor(false)
        }
    }

    const portCodeChange = (e) => {
        setPortCode(e.target.value)

        if(e.target.value === "") {
            setIsEmptyPortCode(true)
        } else {
            setIsEmptyPortCode(false)
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        if (chosenDeliveryOption) {
            if (firstName !== "" && lastName !== "" && email !== "" && phoneNumber !== "" && address !== "" && county !== "" && apartmentNumber !== "" && postNumber !== "" && floor !== "" && portCode !== "" ) {
                // Home delivery
            }
        } else {
            if (firstName !== "" && lastName !== "" && email !== "" && phoneNumber !== "" ) {
                // Takeaway
            }
        }
    }

    
    const [isValidFirstName, notValidFirstName] = isValidName(firstName);

    const [isValidLastName, notValidLastName] = isValidName(lastName);
    const [isValidNumber, notValidNumber] = isValidPhoneNumber(phoneNumber)
    const [isValidEmail, notValidEmail] = isValidEmailAddress(email)

    return (
        <section className="container">
            <header className="header"><button><span className="material-symbols-outlined">keyboard_return</span></button> <h1>Leveransuppgifter</h1></header>
            <StepsHeader />
            <form className="form" onSubmit={handleSubmit}>

                <div className="multi-inputs">
                    <div className="label-above-input">
                        <label htmlFor="firstname-input">Förnamn</label>
                            <span className="span-validation">
                                <input className="input name-input" id="firstname-input" onChange={firstNameChange} onBlur={() => setWrongFirstName(true)} value={firstName} type="text" placeholder="Johanna" required />
                                {
                                    isEmptyFirstName ? "⠀⠀ " : wrongFirstName ? (isValidFirstName ? "✔️" : "❌") : "⠀ ⠀"
                                }
                            </span>
                    </div>

                    <div className="label-above-input">
                        <label htmlFor="lastname-input">Efternamn<span></span></label>
                            <span className="span-validation">
                                <input className="input name-input" id="lastname-input" onChange={lastNameChange} onBlur={() => setWrongLastName(true)} value={lastName} type="text" placeholder="Doe" required/>
                                {
                                    isEmptyLastName ? "⠀ ⠀" : wrongLastName ? (isValidLastName ? "✔️" : "❌") : "⠀ ⠀"
                                }
                                </span>
                    </div>
                </div>
                {
                    isEmptyFirstName ? '' : wrongFirstName ? notValidFirstName : ""
                }
                {
                    isEmptyLastName ? '' : wrongLastName ? notValidLastName : ""
                }              
                <div className="label-above-input">
                    <label htmlFor="email-input">Epost</label>
                    <span className="span-validation">
                        <input className="email-input input" id="email-input" onChange={emailChange} onBlur={() => setWrongEmail(true)} value={email} type="email" placeholder="johannaDoe@example.com" required />
                        {
                            isEmptyEmail ? "⠀ ⠀" : wrongEmail ? (isValidEmail ? "✔️" : "❌") : "⠀ ⠀"
                        }
                    </span>
                </div>
                {
                    isEmptyEmail ? '' : wrongEmail ? notValidEmail : ''
                }
                <div className="label-above-input">
                    <label htmlFor="phone-input">Telefonnummer</label>
                    <span className="span-validation">
                        <input className="phone-input input" id="phone-input" onChange={phoneNumberChange} onBlur={() => setWrongPhoneNumber(true)} value={phoneNumber} type="number" placeholder="070 123 4561" required />
                        {
                            isEmptyPhoneNumber ? "⠀ ⠀" : wrongPhoneNumber ? (isValidNumber ? "✔️" : "❌") : "⠀⠀ "
                        }
                    </span>
                </div>
                {
                    isEmptyPhoneNumber ? '' : wrongPhoneNumber ? notValidNumber : ''
                }

                <div className="spacer label-above-input">
                    <label htmlFor="own-comments-input">Egna kommentarer</label>
                    <textarea className="input text-area" id="own-comments-input" onChange={ownCommentsChange} value={ownComments} placeholder="Jag vill inte ha gurka i thai sushin" />
                </div>


                <div className="spacer">
                    <div className="radio-spacing">
                        <input id="takeaway-delivery-radio" type="radio" name="deliveryOption" onClick={() => setChosenDeliveryOption(false)} required />
                        <label htmlFor="takeaway-delivery-radio">Takeaway</label>
                    </div>
                    <div className="radio-spacing">
                        <input id="home-delivery-radio" type="radio" name="deliveryOption" onClick={() => setChosenDeliveryOption(true)} required />
                        <label htmlFor="home-delivery-radio">Hemleverans</label>
                    </div>
                </div>

                {
                    chosenDeliveryOption && (
                        <>
                            <div className="label-above-input">
                                <label htmlFor="address-input">Adress</label>
                                <span className="span-validation">
                                    <input className="address-input input" id="address-input" onChange={addressChange} onBlur={() => setWrongAddress(true)} value={address} type="text" placeholder="Drottninggatan 17" required />
                                </span>
                            </div>

                            <div className="multi-inputs">
                                <div className="label-above-input">
                                    <label htmlFor="post-input">Postnummer</label>
                                    <input className="post-number-input input" id="post-input" onChange={postNumberChange} value={postNumber} type="number" placeholder="12345"  required/>
                                </div>
                                <div className="label-above-input">
                                    <label htmlFor="county-input">Ort</label>
                                    <input className="county-input input" id="county-input" onChange={countyChange} value={county}type="text" placeholder="Karlstad"  required/>
                                </div>
                            </div>

                        <div className="multi-inputs">
                            <div className="label-above-input">
                                <label htmlFor="apartment-input">Lgn. nr</label>
                                <input className="input tinier-inputs" id="apartment-input" onChange={apartmentNumberChange} value={apartmentNumber} type="number" placeholder="430" />
                            </div>
                        <div className="label-above-input">
                            <label htmlFor="port-code-input">Portkod</label>
                            <input className="input tinier-inputs" id="port-code-input" onChange={portCodeChange} value={portCode} type="number" placeholder="1234" />
                        </div>
                        <div className="label-above-input">
                            <label htmlFor="floor-input">Våning</label>
                            <input className="input tinier-inputs" id="floor-input" onChange={floorChange} value={floor} type="number" placeholder="1" />
                        </div>
                    </div>
                </>
                    )
                }
                <button className="btn-grad" type="submit">Nästa</button>
            </form>
        </section>
    )
}