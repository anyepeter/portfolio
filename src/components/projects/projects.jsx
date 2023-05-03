import AOS from 'aos';
import hero from '../../assets/hero-image.png';
import './projects.css';

const Project = () => {
    return (
        <section className='projects' id="projects">
            <div className='project-header'>
                <hr></hr>
                <h2>Projects</h2><hr /></div>
         <div>
            <div data-aos="fadeInUp"> 
                <div>
                    <div><img src={hero}/></div>
                    <div>
                        <p>I can fgtgtrhrthtrhtr help you build a product, feature or website.
                  Take a look at my works. If you like what you see 
                  and have a project you need coded, don't hesitate 
                  and contact me.</p>
                  
                        <ul>
                            <li><button>Live</button></li>
                            <li><button>Source Code</button></li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
        </section>
    )
}

export default Project;