import Header from "../../Components/Header/Header";
import taco from "../../assets/startpagepic/taco.png";
import musslor from "../../assets/startpagepic/musslor.png";
import pizza from "../../assets/startpagepic/pizza.png";
import sushi from "../../assets/startpagepic/sushi.png";
import sushirulle from "../../assets/startpagepic/sushirulle.png";
import teriyaki from "../../assets/startpagepic/teriyaki.png";
import koriander from "../../assets/startpagepic/Korianderpesto.png";

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
        <div className="text-container">
          <h1 className="company-title">FuNKY FUSION</h1>
          <p className="body-text">
            Fusionmat är den kreativa konsten att kombinera olika matkulturer
            och smaker för att skapa helt nya, spännande rätter.
          </p>
        </div>

        <div className="text-container">
          <img className="startmainpicture" src={koriander} alt="Bild på mat" />

          <p className="body-text">
            Korianderpesto-past - är en smakexplosion med sin friska och kryddiga
            koriander, nötiga jordnötter och fräscha lime, vilket ger en
            oemotståndlig smakupplevelse i varje tugga. Den kombinerar det bästa
            av öst och väst i en pasta som är både djärv och harmonisk på samma
            gång.
          </p>
        </div>

        <div className="text-container">
          <p className="companytitletext-p">
            Fonkey Fusion är stället där du kan uppleva spännande och unika
            matuapplevelser som förenar smaker från hela världen."
          </p>
        </div>

        <div className="text-container">
          <img className="startmainpicture" src={teriyaki} alt="Bild på mat" />

          <p className="body-text">
            Teriyaki Tofu Sushi Burrito - Den kombinerar den saftiga sötman från teriyaki med den fräscha
            krispigheten av grönsaker och nori, vilket ger en spännande
            smakupplevelse i varje tugga.
          </p>
        </div>
      </main>
    </>
  );
}
export default StartPage;
