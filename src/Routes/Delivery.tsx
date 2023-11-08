import { useState } from "react"
import { StepsHeader } from "../Components/StepsHeader"

export function Delivery() {
    const [chosenDeliveryOption, setChosenDeliveryOption] = useState(false)

    return (
        <section className="container">
            <header className="header"><button><span className="material-symbols-outlined">keyboard_return</span></button> <h1>Leveransuppgifter</h1></header>
            <StepsHeader />
            <form className="form">

                <div className="multi-inputs">
                    <div className="label-above-input">
                        <label htmlFor="firstname-input">Förnamn</label>
                        <input className="input name-input" id="firstname-input" type="text" placeholder="Johanna" required />
                    </div>

                    <div className="label-above-input">
                        <label htmlFor="lastname-input">Efternamn</label>
                        <input className="input name-input" id="lastname-input" type="text" placeholder="Doe" required/>
                    </div>
                </div>
              

                <div className="label-above-input">
                    <label htmlFor="email-input">Epost</label>
                    <input className="email-input input" id="email-input" type="email" placeholder="johannaDoe@example.com" required />
                </div>

                <div className="label-above-input">
                    <label htmlFor="phone-input">Telefonnummer</label>
                    <input className="phone-input input" id="phone-input" type="number" placeholder="070 123 4561" required />
                </div>

                <div className="spacer label-above-input">
                    <label htmlFor="own-comments-input">Egna kommentarer</label>
                    <textarea className="input text-area" id="own-comments-input" placeholder="Jag vill inte ha gurka i thai sushin" />
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
                                <input className="address-input input" id="address-input" type="text" placeholder="Drottninggatan 17" required />
                            </div>

                            <div className="multi-inputs">
                                <div className="label-above-input">
                                    <label htmlFor="post-input">Postnummer</label>
                                    <input className="post-number-input input" id="post-input" type="number" placeholder="12345"  required/>
                                </div>
                                <div className="label-above-input">
                                    <label htmlFor="county-input">Ort</label>
                                    <input className="county-input input" id="county-input" type="text" placeholder="Karlstad"  required/>
                                </div>
                            </div>

                        <div className="multi-inputs">
                            <div className="label-above-input">
                                <label htmlFor="apartment-input">Lgn. nr</label>
                                <input className="input tinier-inputs" id="apartment-input" type="number" placeholder="430" />
                            </div>
                        <div className="label-above-input">
                            <label htmlFor="port-code-input">Portkod</label>
                            <input className="input tinier-inputs" id="port-code-input" type="number" placeholder="1234" />
                        </div>
                        <div className="label-above-input">
                            <label htmlFor="floor-input">Våning</label>
                            <input className="input tinier-inputs" id="floor-input" type="number" placeholder="1" />
                        </div>
                    </div>
                </>
                    )
                }
                <button className="button" type="submit">Nästa</button>
            </form>




            

        </section>
    )
}