import { motion, AnimatePresence } from 'framer-motion';
import hero from '../../assets/hero-image.png'
import './landingPage.css';


const LandingPage = () => {
    return (
        <section className="landing-container">
            <div className='flex mt-20 landing-section'>
            <div className="intro-container" >
                <div className='flex flex-col gap-4 '>
                    <h2 className='text-3xl font-medium'>Peter Chendi</h2>
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
                <div>
               <p className='text-xl leading-6'>Hello! 
                 I can help you build a product, feature or website.
                  Take a look at my works. If you like what you see 
                  and have a project you need coded, don't hesitate 
                  and contact me.

</p>

                </div>
            </div>
            <div>
                <img src={hero} />
                <ul className='flex gap-2'>
                    <li><a><img src="" alt='ig' /></a></li>
                    <li><a><img src="" alt='git' /></a></li>
                    <li><a><img src="" alt='hash' /></a></li>
                    <li><a><img src="" alt='twi' /></a></li>
                </ul>
            </div>
            </div>
        </section>
    )
}

export default LandingPage;