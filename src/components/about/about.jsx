import logo from '../../assets/hero-image.png';
import './about.css'

const About = () => {
    return (
        <section id="about" className='about'>
         <div className='about-section'>
         <div className='project-header'>
                <hr />
                <h2>About me</h2><hr /></div>

            <div>
                <div><img src={logo}/></div>
                <div>
                <p>I can fgtgtrhrthtrhtr help you build a product, feature or website.
                  Take a look at my works. If you like what you see 
                  and have a project you need coded, don't hesitate 
                  and contact me.</p>

                  <p>I can fgtgtrhrthtrhtr help you build a product, feature or website.
                  Take a look at my works. If you like what you see 
                  and have a project you need coded, don't hesitate 
                  and contact me.</p>

                  <p>I can fgtgtrhrthtrhtr help you build a product, feature or website.
                  Take a look at my works. If you like what you see 
                  and have a project you need coded, don't hesitate 
                  and contact me.</p>
                </div>
            </div>
            <div>

                <div>
                    <h3>Language</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>Ruby</li>
                        <li>PHP</li>
                    </ul>
                </div>

                <div>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React</li>
                        <li>Ruby on Rails</li>
                        <li>Laravel</li>
                    </ul>
                </div>

                <div>
                    <h3>Skills</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>Ruby</li>
                        <li>PHP</li>
                    </ul>
                </div>
            </div>
         </div>
        </section>
    )
}

export default About;