import Header from "../../Components/Header/Header";
import taco from "../../assets/startpagepic/taco.png";
import musslor from "../../assets/startpagepic/musslor.png";
import pizza from "../../assets/startpagepic/pizza.png";
import sushi from "../../assets/startpagepic/sushi.png";
import sushirulle from "../../assets/startpagepic/sushirulle.png";

import "./startpage.css";

function StartPage() {
  return (
    <>
      <section className="pic-container">
        <img className="top-pic" src={taco} alt="Bild på taco" />
        <img className="top-pic sushi" src={sushi} alt="Bild på taco" />
        <img className="top-pic" src={musslor} alt="Bild på musslor" />
        <img className="top-pic sushi" src={sushirulle} alt="Bild på taco" />
        <img className="top-pic" src={pizza} alt="Bild på pizza" />
      </section>
      <Header />
      <section className="pic-container2">
        <img className="top-pic" src={taco} alt="Bild på taco" />
        <img className="top-pic sushi" src={sushi} alt="Bild på taco" />
        <img className="top-pic" src={musslor} alt="Bild på musslor" />
        <img className="top-pic sushi" src={sushirulle} alt="Bild på taco" />
        <img className="top-pic" src={pizza} alt="Bild på pizza" />
      </section>
      <main>
        <div className="section">
          <h1 className="company-title">FuNKY FUSION</h1>
          <p className="body-text">
            Fusionmat är den kreativa konsten att kombinera olika matkulturer
            och smaker för att skapa helt nya, spännande rätter.
          </p>
        </div>
        <div className="section">
          <img src="" alt="" />
          <p className="body-text"></p>
        </div>
      </main>
    </>
  );
}
export default StartPage;
