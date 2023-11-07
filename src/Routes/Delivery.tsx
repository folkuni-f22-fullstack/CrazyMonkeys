export function Delivery() {
    return (
        <section className="container">
            <header>Tillbaka <h1>Leverans</h1></header>
            <section><button>1</button><hr /><button>2</button><hr /><button>3</button><hr /><button>4</button></section>
            <div>
                <label>Förnamn</label>
                <input type="text" placeholder="Johanna" required />
            </div>

            <div>
                <label>Efternamn</label>
                <input type="text" placeholder="Doe" required/>
            </div>

            <div>
                    <label>Adress</label>
                    <input type="text" placeholder="Drottninggatan 17" required />
            </div>

            <div>
                <div>
                    <label>Postnummer</label>
                    <input type="number" placeholder="12345"  required/>
                </div>
                <div>
                    <label>Ort</label>
                    <input type="text" placeholder="Karlstad"  required/>
                </div>
            </div>

            <div>
                <div>
                    <label>Lgn. nr</label>
                    <input type="number" placeholder="430" />
                </div>
                <div>
                    <label>Portkod</label>
                    <input type="number" placeholder="1234" />
                </div>
                <div>
                    <label>Våning</label>
                    <input type="number" placeholder="1" />
                </div>
            </div>


            

        </section>
    )
}