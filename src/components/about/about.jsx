import logo from '../../assets/hero-image.png';
import './about.css'

const About = () => {
    return (
        <section id="about" className='about'>
         <div className='about-section'>
         <div className='project-header'>
                <hr />
                <h2>About</h2><hr /></div>

            <div className='about-intro'>
                <div className='about-image-container'><img src="https://media.licdn.com/dms/image/D4E03AQH3biSVm49TBQ/profile-displayphoto-shrink_100_100/0/1671796666754?e=1689206400&v=beta&t=UU_Ogc1o4U3-YZLX-RCPCcLbW4ipmwmldRYccrBoJJo"/></div>
                <div className='about-para'>
                <p> A full-stack developer who is obsessed with building high-quality,
                     Well organized, and maintainable web applications that provide exceptional user experiences 
                     using different languages and frameworks like Javascript, React, Redux, Ruby, Ruby on Rails, 
                     etc following the best code practices.</p>

                  <p>In my previous role as a full-time Microverse student, I spent months immersed in a
                     remote development environment, collaborating with amazing peers around the world with 
                     diverse backgrounds and cultures to develop a variety of web applications, blogging apps,
                      and more.</p>

                  <p>I am passionate about developing scalable software, as well as user-friendly and
                     responsive websites, and I enjoy learning new technologies. I'm eager to collaborate with
                      a talented team of developers, designers, and support specialists to build tools and products that
                       empower businesses to deliver better customer experiences and streamline their support operations.</p>
                </div>
            </div>
            <div className='Skills-container' id='skills'>
            <div className='skill-section'>
                <div >
                    <h3 className='skill-title'>Language</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>Ruby</li>
                        <li>PHP</li>
                    </ul>
                </div>

                <div>
                    <h3 className='skill-title'>Frameworks</h3>
                    <ul>
                        <li>React</li>
                        <li>Ruby on Rails</li>
                        <li>Laravel</li>
                    </ul>
                </div>

                <div>
                    <h3 className='skill-title'>Skills</h3>
                    <ul>
                        <li>Pair-programming</li>
                        <li>Colaboration</li>
                        <li>Communication</li>
                    </ul>
                </div>
            </div>
            </div>
         </div>
        </section>
    )
}

export default About;