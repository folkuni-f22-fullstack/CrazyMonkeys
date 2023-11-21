import './Om-oss.css'
import wok from '../../assets/om-oss-image/wok.png'
import image39 from '../../assets/om-oss-image/image 39.png'
import seafood from '../../assets/om-oss-image/seafood.png'
import pasta from '../../assets/om-oss-image/pasta.png'
import titlePic from '../../assets/om-oss-image/titlePic.png'


const AboutUs = () => {

    const resizePic = { minWidth: '100%' }
    return (
        <div>
            <div className='parent-about-container'>
                <div className="about-container">
                    <section className='title-pic'>
                        <img className='first-img' style={resizePic} src={titlePic} alt="bild på mat" />
                        <p className='mobile-text'>
                            om oss på funky fusion
                        </p>
                        <p className='text-title-us'>
                            Välkomna till vår exklusiva fusionrestaurang, där smaker från hela världen möts för att skapa en unik och minnesvärd kulinarisk upplevelse. Vi är
                        </p>
                    </section>
                    <section className='middle-page'>
                        <div className='middle-img'>
                            <img src={wok} alt="bild på mat" className='wok-img' />
                            <img src={pasta} alt="bild på mat" className='pasta-img' />
                        </div>

                        <div className='middle-contain'>

                            <div className='funky-about-text'>
                                <h1 className='whyfunky'> Varför välja Funkey Fusion </h1>
                                <p className='middle-text'>
                                    Välkomna till vår exklusiva fusionrestaurang, där smaker från hela världen möts för att skapa en unik och minnesvärd kulinarisk upplevelse. Vi är stolta över att erbjuda en atmosfär fylld av elegans och en meny som är lika mångsidig som den är läcker.

                                    Vårt passionerade köksteam sätter tonen för en gastronomisk resa där traditionella rätter från olika kulturer kombineras på nyskapande sätt. Varje rätt är en konstnärlig fusion av smaker och ingredienser, noggrant utvalda för att skapa harmoni på tallriken.
                                    Vi strävar efter att erbjuda våra gäster en kulinarisk resa där varje tugga är en smakupplevelse i världsklass.



                                </p>
                            </div>
                        </div>



                    </section>

                    <div>

                    </div>


                </div>
            </div>

        </div>

    )
}

export default AboutUs