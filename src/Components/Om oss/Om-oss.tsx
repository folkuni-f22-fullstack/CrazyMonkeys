import "./Om-oss.css";
import wok from "../../assets/om-oss-image/wok.png";
import pasta from "../../assets/om-oss-image/pasta.png";
import titlePic from "../../assets/om-oss-image/titlePic.png";
import sushi from '../../assets/om-oss-image/sushi.png'
import seafood from '../../assets/om-oss-image/seafood.png'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


const AboutUs = () => {
  const resizePic = { minWidth: "100%" };

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    console.log("isInView1:", isInView1);
    if (isInView1) {
      controls1.start("visible");
    }
  }, [isInView1]);

  useEffect(() => {
    console.log("isInView2:", isInView2);
    if (isInView2) {
      controls2.start("visible");
    }
  }, [isInView2]);



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
          <motion.section className="middle-page"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                ref={ref1}
                initial="hidden"
                animate={controls1}
                transition={{ duration: 2 }}
          >
            <div className="middle-img">
              <img src={wok} alt="bild på mat" className="wok-img" />
              <img src={pasta} alt="bild på mat" className="pasta-img" />
            </div>

            <div className="middle-contain"
      
            >
              <div className="funky-about-text">
                <h1 className="whyfunky"> Varför välja Funkey Fusion </h1>
                <p className="middle-text">

                  Välkomna till vår exklusiva fusionrestaurang, där världens smaker möts för en unik och minnesvärd kulinarisk upplevelse. Vi erbjuder en elegant atmosfär och en läcker, mångsidig meny. Vårt passionerade köksteam skapar innovativa fusionrätter från olika kulturer. Varje tallrik är en konstnärlig kombination av noggrant utvalda smaker och ingredienser, skapad för att ge harmoni. Upplev en kulinarisk resa där varje tugga är i världsklass.
                </p>
            
              </div>
            </div>
          </motion.section>

          <motion.section className="middle-page-2"
           variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          ref={ref2}
          initial="hidden"
          animate={controls2}
          transition={{ duration: 2 }}
          >

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
              
              
            </div>
        </div>

      </motion.section>
    </div>
      </div >
  <Footer />
    </div >
  );
};

export default AboutUs;
