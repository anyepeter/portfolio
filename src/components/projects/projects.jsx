import AOS from 'aos';
import 'aos/dist/aos.css'
import './projects.css';

const Project = () => {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 200, // offset (in px) from the original trigger point
        delay: 2, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
    return (
        <section className='projects' id="projects">
            <div className='about-section'>
            <div className='project-header'>
                <hr />
                <h2>Projects</h2><hr /></div>
         <div className='project-container'>


            <div data-aos="fade-up-right" className="project-card"> 
                <div className='card-info'>
                    <div className='image-card-container'><img src="https://media.licdn.com/dms/image/C4E2DAQGtvJcLuCIPzQ/profile-treasury-image-shrink_800_800/0/1672965610499?e=1684141200&v=beta&t=E-Ts893Ets6Zqd0KiKFCJaA0CMERjfij_d5nMwov7s0"/></div>
                    <div className='para-container'>
                        <h1>BookStore App</h1>
                        <p>The online bookstore delivery app allows bookstore owners and authors to upload and 
                            delete books using an API. Additionally, users can track their progress
                             once a book has been uploaded. The app is built with React and Redux.</p>

                  <div className='buit-with'>
                  <ul>
                    <li>CSS</li>
                    <li>REACT</li>
                    <li>REDUX</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                  </div>
                        <ul className='container-button'>
                            <li><a href='https://bookstore-p545.onrender.com/' target="_blank">Live Demo</a></li>
                            <li><a  href='https://github.com/anyepeter/bookstore' target="_blank">Source Code</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div data-aos="fade-up-left" className="project-card"> 
                <div className='card-info left-show'>
                    <div className='image-card-container'><img src="https://media.licdn.com/dms/image/C4E2DAQHHSqvJL2t6lQ/profile-treasury-image-shrink_800_800/0/1672964953168?e=1684141200&v=beta&t=l8JDifUP54_Xel-F70yyEDcEvq26deNOzel0Yi_axTk"/></div>
                    <div className='para-container'>
                    <h1>Tile of project</h1>
                        <p>In this project, I created a music concert occasion name 
                            "Mboko Drill". It is a rap type mostly practiced in my
                             area where artists get to sing in "Pigin"</p>

                  <div className='buit-with'>
                  <ul>
                    <li>HTMl</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                  </div>
                        <ul className='container-button'>
                            <li><a href='https://anyepeter.github.io/Capstone-project/' target="_blank">Live Demo</a></li>
                            <li><a  href='https://github.com/anyepeter/Capstone-project' target="_blank">Source Code</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div data-aos="fade-up-right" className="project-card"> 
                <div className='card-info'>
                    <div className='image-card-container'><img src="https://media.licdn.com/dms/image/C4E2DAQGwpaFertiVoA/profile-treasury-image-shrink_800_800/0/1672970507211?e=1684141200&v=beta&t=h3aMduv3NADAYRqpNq4YPcBRRAROr8aUhqqgv0Dv-o0" /></div>
                    <div className='para-container'>
                    <h1>Space Ship</h1>
                        <p>Build a web application for a company that offers commercial and
                             scientific space travel services, working with real-time
                             data from the SpaceX API. Users will be able to book rockets and dragons,
                              as well as join selected space missions through the application.</p>

                  <div className='buit-with'>
                  <ul>
                  <li>CSS</li>
                    <li>REACT</li>
                    <li>REDUX</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                  </div>
                        <ul className='container-button'>
                            <li><a href='https://spaceship-irm6.onrender.com/' target="_blank">Live Demo</a></li>
                            <li><a href='https://github.com/Trust-007/React-Group-Project' target="_blank">Source Code</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div data-aos="fade-up-left" className="project-card"> 
                <div className='card-info left-show'>
                    <div className='image-card-container'><img src="https://media.licdn.com/dms/image/C4E2DAQHqzZAQmxqI9g/profile-treasury-image-shrink_1920_1920/0/1672964365389?e=1684141200&v=beta&t=rlKsrvIRXXrC8n_bWXsKnjBwE5p5A4J0KP85ThXqw7w"/></div>
                    <div className='para-container'>
                    <h1>Cryptocurrency info</h1>
                        <p>A simple SPA consists of a home page that fetches and displays data about 
                            cryptocurrencies and their price, and a details
                             page where the user can interact with information about a 
                             specific cryptocurrency.</p>

                  <div className='buit-with'>
                  <ul>
                  <li>CSS</li>
                    <li>REACT</li>
                    <li>REDUX</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                  </div>
                        <ul className='container-button'>
                            <li><a href='https://cryptocurrency-4zh0.onrender.com/' target="_blank">Live Demo</a></li>
                            <li><a href='https://github.com/anyepeter/currency-info' target="_blank">Source Code</a></li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
         </div>
        </section>
    )
}

export default Project;