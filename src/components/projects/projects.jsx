import AOS from 'aos';
import hero from '../../assets/hero-image.png';
import './projects.css';

const Project = () => {
    return (
        <section className='projects' id="projects">
            <div className='project-header'>
                <hr />
                <h2>Projects</h2><hr /></div>
         <div className='project-container'>


            <div className="project-card"> 
                <div className='card-info'>
                    <div className='image-card-container'><img src={hero}/></div>
                    <div className='para-container'>
                        <h1>Tile of project</h1>
                        <p>I can fgtgtrhrthtrhtr help you build a product, feature or website.
                  Take a look at my works. If you like what you see 
                  and have a project you need coded, don't hesitate 
                  and contact me.</p>

                  <div className='buit-with'>
                  <ul>
                    <li>HTMl</li>
                    <li>CCSS</li>
                    <li>HTMl</li>
                    <li>CCSS</li>
                  </ul>
                  </div>
                        <ul className='container-button'>
                            <li><button>Live Demo</button></li>
                            <li><button>Source Code</button></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="project-card"> 
                <div className='card-info'>
                    <div className='image-card-container'><img src="data:image/png;base64,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"/></div>
                    <div className='para-container'>
                        <p>I can fgtgtrhrthtrhtr help you build a product, feature or website.
                  Take a look at my works. If you like what you see 
                  and have a project you need coded, don't hesitate 
                  and contact me.</p>

                  <div className='buit-with'>
                  <ul>
                    <li>HTMl</li>
                    <li>CCSS</li>
                    <li>HTMl</li>
                    <li>CCSS</li>
                  </ul>
                  </div>
                        <ul className='container-button'>
                            <li><button>Live Demo</button></li>
                            <li><button>Source Code</button></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="project-card"> 
                <div className='card-info'>
                    <div className='image-card-container'><img src={hero}/></div>
                    <div className='para-container'>
                        <p>I can fgtgtrhrthtrhtr help you build a product, feature or website.
                  Take a look at my works. If you like what you see 
                  and have a project you need coded, don't hesitate 
                  and contact me.</p>

                  <div className='buit-with'>
                  <ul>
                    <li>HTMl</li>
                    <li>CCSS</li>
                    <li>HTMl</li>
                    <li>CCSS</li>
                  </ul>
                  </div>
                        <ul className='container-button'>
                            <li><button>Live Demo</button></li>
                            <li><button>Source Code</button></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="project-card"> 
                <div className='card-info'>
                    <div className='image-card-container'><img src={hero}/></div>
                    <div className='para-container'>
                        <p>I can fgtgtrhrthtrhtr help you build a product, feature or website.
                  Take a look at my works. If you like what you see 
                  and have a project you need coded, don't hesitate 
                  and contact me.</p>

                  <div className='buit-with'>
                  <ul>
                    <li>HTMl</li>
                    <li>CCSS</li>
                    <li>HTMl</li>
                    <li>CCSS</li>
                  </ul>
                  </div>
                        <ul className='container-button'>
                            <li><button>Live Demo</button></li>
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