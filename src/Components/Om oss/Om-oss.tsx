import "./Om-oss.css";
import wok from "../../assets/om-oss-image/wok.png";
import pasta from "../../assets/om-oss-image/pasta.png";
import titlePic from "../../assets/om-oss-image/titlePic.png";
import sushi from '../../assets/om-oss-image/sushi.png'
import seafood from '../../assets/om-oss-image/seafood.png'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const AboutUs = () => {
  const resizePic = { minWidth: "100%" };
  return (
    <div>
      <Header />
      <div className="parent-about-container">
        <div className="about-container">
          <section className="title-pic">
            <img
              className="first-img"
              style={resizePic}
              src={titlePic}
              alt="bild på mat"
            />
            <p className="mobile-text">om oss på funky fusion</p>
            <p className="text-title-us">
              Fusionmat är den kreativa konsten att kombinera olika matkulturer och smaker för att skapa helt nya, spännande rätter.
            </p>
          </section>
          <section className="middle-page">
            <div className="middle-img">
              <img src={wok} alt="bild på mat" className="wok-img" />
              <img src={pasta} alt="bild på mat" className="pasta-img" />
            </div>

            <div className="middle-contain">
              <div className="funky-about-text">
                <h1 className="whyfunky"> Varför välja Funkey Fusion </h1>
                <p className="middle-text">

                  Välkomna till vår exklusiva fusionrestaurang, där världens smaker möts för en unik och minnesvärd kulinarisk upplevelse. Vi erbjuder en elegant atmosfär och en läcker, mångsidig meny. Vårt passionerade köksteam skapar innovativa fusionrätter från olika kulturer. Varje tallrik är en konstnärlig kombination av noggrant utvalda smaker och ingredienser, skapad för att ge harmoni. Upplev en kulinarisk resa där varje tugga är i världsklass.
                </p>
                {/* <p className="middle-text">
                  Välkomna till vår exklusiva fusionrestaurang, där smaker från
                  hela världen möts för att skapa en unik och minnesvärd
                  kulinarisk upplevelse. Vi är stolta över att erbjuda en
                  atmosfär fylld av elegans och en meny som är lika mångsidig
                  som den är läcker.
                  <p>  Vårt passionerade köksteam sätter tonen för
                  en gastronomisk resa där traditionella rätter från olika
                  kulturer kombineras på nyskapande sätt. Varje rätt är en
                  konstnärlig fusion av smaker och ingredienser, noggrant
                  utvalda för att skapa harmoni på tallriken. Vi strävar efter
                  att erbjuda våra gäster en kulinarisk resa där varje tugga är
                  en smakupplevelse i världsklass.</p> </p>*/}

              </div>
            </div>
          </section>

          <section className="middle-page-2">

            <div className="middle-img">
              <img src={seafood} alt="" className="seafood" />
              <img src={sushi} alt="" className=" sushi" />
            </div>
            <div className="middle-contain-2">
              <div className="funky-about-text-2">
                <h1 className="whyfunky-2"> Varför välja Funkey Fusion </h1>
                <p className="middle-text-2">

                  Vår restaurang förenar modernitet med tradition, och varje måltid är en hyllning till kreativitet och mångfald. Rätterna är noggrant balanserade med olika influenser, och vi är stolta över att erbjuda något för varje smak och preferens. Vi strävar efter att skapa minnesvärda stunder och överträffa förväntningarna hos våra gäster. Vår professionella och vänliga personal är dedikerad att ge er service i världsklass, vilket gör varje besök hos oss till en upplevelse utöver det vanliga.
                </p>
                {/* <p className="middle-text-2">
                  Vår restaurang är en plats där modernitet möter tradition, och
                  där varje måltid är en hyllning till kreativitet och mångfald.
                  Våra rätter är resultatet av en noggrann balans mellan olika
                  influenser, och vi är stolta över att erbjuda något för varje
                  smak och preferens.

                  <p>Vi tror på att skapa minnesvärda stunder
                    och strävar efter att överträffa förväntningarna hos våra
                    gäster. Vår professionella och vänliga personal är dedikerad
                    att ge er en service i världsklass och se till att varje besök
                    hos oss blir en upplevelse utöver det vanliga. </p></p> */}
              
            </div>
        </div>

      </section>
    </div>
      </div >
  <Footer />
    </div >
  );
};

export default AboutUs;
