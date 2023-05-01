import hero from '../../assets/hero.png'
import './landingPage.css';

const LandingPage = () => {
    return (
        <section className="w-full h-full px-4 landing-container">
            <div className='flex mt-20 landing-section'>
            <div>
                <div>
                    <h1>Hello! I'm Peter</h1>
                    <h2>
                        I'm developing functional and interactive web apps
                    </h2>
                </div>
                <div>
                    As a full stack developermy ex pictureslies in creatingfunctional and interactive user
                    As a full stack developermy ex pictureslies in creatingfunctional and interactive user
                    As a full stack developermy ex pictureslies in creatingfunctional and interactive user
                    As a full stack developermy ex pictureslies in creatingfunctional and interactive user
                </div>
            </div>
            <div>
                <img src={hero} />

            </div>
            </div>
        </section>
    )
}

export default LandingPage;