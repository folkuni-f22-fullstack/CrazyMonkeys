import { useState } from "react"

// Styles


export function Delivery() {
    const [chosenDeliveryOption, setChosenDeliveryOption] = useState(false)

    const container = {
        minWidth: "320px",
        backgroundColor: "#F2F2F2",
    }

    const labelAboveInput = {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'flex-start'
    };

    const nameInputs = {
        maxWidth: "155px",
    }

    const tinyInputs = {
        maxWidth: "55px"
    }

    const MultiInputs = {
        display: 'flex',
    }

    const textArea = {
        minWidth: "275px",
        minHeight: "100px"
    }

    return (
        <section className="container" style={container}>
            <header>Tillbaka <h1>Leveransuppgifter</h1></header>
                <section><button>1</button><hr /><button>2</button><hr /><button>3</button><hr /><button>4</button></section>
            <form>

                <div style={MultiInputs}>
                    <div style={labelAboveInput}>
                        <label htmlFor="firstname-input">Förnamn</label>
                        <input className="input" style={nameInputs} id="firstname-input" type="text" placeholder="Johanna" required />
                    </div>

                    <div style={labelAboveInput}>
                        <label htmlFor="lastname-input">Efternamn</label>
                        <input className="input" style={nameInputs} id="lastname-input" type="text" placeholder="Doe" required/>
                    </div>
                </div>
              

                <div style={labelAboveInput}>
                    <label htmlFor="email-input">Epost</label>
                    <input className="input" id="email-input" type="email" placeholder="johannaDoe@example.com" required />
                </div>

                <div style={labelAboveInput}>
                    <label htmlFor="phone-input">Telefonnummer</label>
                    <input className="input" id="phone-input" type="number" placeholder="070 123 4561" required />
                </div>

                <div style={labelAboveInput}>
                    <label htmlFor="own-comments-input">Egna kommentarer</label>
                    <textarea style={textArea} className="input" id="own-comments-input" placeholder="Jag vill inte ha gurka i thai sushin" />
                </div>


                <div>
                    <div>
                        <input id="takeaway-delivery-radio" type="radio" name="deliveryOption" onClick={() => setChosenDeliveryOption(false)} required />
                        <label htmlFor="takeaway-delivery-radio">Takeaway</label>
                    </div>
                    <div>
                        <input id="home-delivery-radio" type="radio" name="deliveryOption" onClick={() => setChosenDeliveryOption(true)} required />
                        <label htmlFor="home-delivery-radio">Hemleverans</label>
                    </div>
                </div>

                {
                    chosenDeliveryOption && (
                        <>
                            <div style={labelAboveInput}>
                                <label htmlFor="address-input">Adress</label>
                                <input className="input" id="address-input" type="text" placeholder="Drottninggatan 17" required />
                            </div>

                            <div style={MultiInputs}>
                                <div style={labelAboveInput}>
                                    <label htmlFor="post-input">Postnummer</label>
                                    <input className="input" id="post-input" type="number" placeholder="12345"  required/>
                                </div>
                                <div style={labelAboveInput}>
                                    <label htmlFor="county-input">Ort</label>
                                    <input className="input" id="county-input" type="text" placeholder="Karlstad"  required/>
                                </div>
                            </div>

                        <div style={MultiInputs}>
                            <div style={labelAboveInput}>
                                <label htmlFor="apartment-input">Lgn. nr</label>
                                <input className="input" style={tinyInputs} id="apartment-input" type="number" placeholder="430" />
                            </div>
                        <div style={labelAboveInput}>
                            <label htmlFor="port-code-input">Portkod</label>
                            <input className="input" style={tinyInputs} id="port-code-input" type="number" placeholder="1234" />
                        </div>
                        <div style={labelAboveInput}>
                            <label htmlFor="floor-input">Våning</label>
                            <input className="input" style={tinyInputs} id="floor-input" type="number" placeholder="1" />
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