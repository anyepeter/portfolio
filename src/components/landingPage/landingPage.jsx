import { motion, AnimatePresence } from 'framer-motion';
import hero from '../../assets/hero-image.png';
import gitlgo from '../../assets/gitlogo.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import hashnode from '../../assets/hashnode.png';
import './landingPage.css';


const LandingPage = () => {
    return (
        <section className="landing-container">
            <div className='flex mt-20 landing-section'>
            <div className="intro-container" >
                <div className='flex flex-col gap-4 header-gap '>
                    <h2 className='font-medium greeting-text'>Peter Chendi</h2>
                    <AnimatePresence>
                   <motion.h1 className='text1'
                   initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 1 }}
                   >
                        Full-stack developer
                       </motion.h1>
                       </AnimatePresence>
                </div>
                <div className='paraContainer'>
               <p className='intro-greeting'>Hello! 
                 I can fgtgtrhrthtrhtr help you build a product, feature or website.
                  Take a look at my works. If you like what you see 
                  and have a project you need coded, don't hesitate 
                  and contact me.
</p>

                </div>
            </div>
            <div className='image-container'>
                <img className='hero-image' src={hero} />
                <ul className='social-container'>
                    <li><a><img src={gitlgo} className='social-link' alt='ig' /></a></li>
                    <li><a><img src={hashnode} className='social-link' alt='git' /></a></li>
                    <li><a><img src={twitter} className='social-link' alt='hash' /></a></li>
                    <li><a><img src={linkedin} className='social-link' alt='twi' /></a></li>
                </ul>
            </div>
            </div>
        </section>
    )
}

export default LandingPage;