
import './testimonial.css';

const Testimonial = () => {

    return (
        <section className="testimonials">
            <div className='testimonial-container'>
       <div className="div5">
        <div className="userdetails">
          <div className="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="" />
          </div>
          <div className="detbox">
            <p className="name">Patrick Abrams</p>
            <p className="designation">Verified Graduate</p>
          </div>
        </div>
        <div className="review">
          <h4>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h4>
        <p>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</p>
        </div>
      </div>
      </div>
        </section>
    )
}

export default Testimonial;