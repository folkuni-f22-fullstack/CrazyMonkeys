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
import "../../App.css"

const AboutUs = () => {
  const resizePic = { minWidth: "100%" };

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
 
    if (isInView1) {
      controls1.start("visible");
    }
  }, [isInView1]);

  useEffect(() => {
   
    if (isInView2) {
      controls2.start("visible");
    }
  }, [isInView2]);



  return (
    <div>
      <div className="parent-about-container">
        <div className="about-container">
          <section className="title-pic">
            <img
              className="first-img"
               style={resizePic}
              src={titlePic}
              alt="bild på mat"
            />
            <p className="mobile-text">om oss på </p>
            <p className="title">funky fusion</p>
            <p className="mobile-text-title-us">
            Fusionmat är konsten att kombinera matkulturer och smaker för att skapa nya, spännande rätter
            </p>
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
                <h1 className="whyfunky"> Varför välja Funky Fusion </h1>
                <p className="middle-text">

                Välkomna till vår exklusiva fusionrestaurang där världens smaker möts för en minnesvärd kulinarisk upplevelse. Vi erbjuder en elegant atmosfär, en mångsidig meny och passionerade kockar som skapar innovativa fusionrätter från olika kulturer. Varje tallrik är en konstnärlig kombination av noggrant utvalda smaker och ingredienser, skapad för perfekt harmoni. Upplev en kulinarisk resa i världsklass
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
              <img src={sushi} alt="" className=" sushy" />
            </div>
            <div className="middle-contain-2">
              <div className="funky-about-text-2">
                <h1 className="whyfunky-2">Smak, stil, service, fusion</h1>
                <p className="middle-text-2">

                Kreativitet och mångfald hyllas på vår restaurang, där modernitet och tradition blandas. Vi är stolta över att kunna erbjuda något för varje smak och preferens, och våra rätter är noggrant balanserade med olika influenser. Vår dedikerade personal till världsklassservice är präglad av strävan efter minnesvärda stunder, vilket gör varje besök hos oss till en upplevelse utöver det vanliga. 
                </p>
              
              
            </div>
        </div>

      </motion.section>
    </div>
      </div >
    </div >
  );
};

export default AboutUs;
