import taco from "../../assets/startpagepic/taco.png";
import musslor from "../../assets/startpagepic/musslor.png";
import pizza from "../../assets/startpagepic/pizza.png";
import sushi from "../../assets/startpagepic/sushi.png";
import sushirulle from "../../assets/startpagepic/sushirulle.png";
import teriyaki from "../../assets/startpagepic/teriyaki.png";
import koriander from "../../assets/startpagepic/Korianderpesto.png";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import { Link } from "react-router-dom";

import "./startpage.css";

function StartPage() {
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
    <>
      <section className="pic-container">
        <img className="top-pic" src={taco} alt="Bild på taco" />
        <img className="top-pic sushi" src={sushi} alt="Bild på taco" />
        <img className="top-pic" src={musslor} alt="Bild på musslor" />
        <img className="top-pic sushi" src={sushirulle} alt="Bild på taco" />
        <img className="top-pic" src={pizza} alt="Bild på pizza" />
      </section>
      <section className="pic-container2">
        <img className="top-pic" src={taco} alt="Bild på taco" />
        <img className="top-pic sushi" src={sushi} alt="Bild på taco" />
        <img className="top-pic" src={musslor} alt="Bild på musslor" />
        <img className="top-pic sushi" src={sushirulle} alt="Bild på taco" />
        <img className="top-pic" src={pizza} alt="Bild på pizza" />
      </section>

      <main className="mainstartpage">
        <div className="text-container">
          <h1 className="company-title">FuNKY FUSION</h1>
          <p className="companytitletext-p">
            Fusionmat är den kreativa konsten att kombinera olika matkulturer
            och smaker för att skapa helt nya, spännande rätter.
          </p>
          <Link to="/menu" className="btn-grad">
          Gå till Meny
        </Link>
        </div>

        <motion.div
          className="text-container"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          ref={ref1}
          initial="hidden"
          animate={controls1}
          transition={{ duration: 2 }}
        >
          <img className="startmainpicture" src={koriander} alt="Bild på mat" />

          <div className="body-text">
            <h3 className="startfood-title">Korianderpesto-pasta</h3>
            Korianderpesto-past - är en smakexplosion med sin friska och
            kryddiga koriander, nötiga jordnötter och fräscha lime, vilket ger
            en oemotståndlig smakupplevelse i varje tugga. Den kombinerar det
            bästa av öst och väst i en pasta som är både djärv och harmonisk på
            samma gång.
          </div>
        </motion.div>

        <div className="text-container">
          <p className="companytitletext-p">
            Fonkey Fusion är stället där du kan uppleva spännande och unika
            matuapplevelser som förenar smaker från hela världen."
          </p>
        </div>

        <motion.div
          className="text-container"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          ref={ref2}
          initial="hidden"
          animate={controls2}
          transition={{ duration: 2 }}
        >
          <img className="startmainpicture" src={teriyaki} alt="Bild på mat" />

          <div className="body-text">
            <h3 className="startfood-title">Teriyaki Tofu Sushi Burrito </h3>
            Teriyaki Tofu Sushi Burrito - Den kombinerar den saftiga sötman från
            teriyaki med den fräscha krispigheten av grönsaker och nori, vilket
            ger en spännande smakupplevelse i varje tugga.
          </div>
        </motion.div>
        <Link to="/menu" className="btn-grad">
          Gå till Meny
        </Link>
      </main>
    
    </>
  );
}
export default StartPage;
