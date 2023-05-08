import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './testimonial.css';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {

    return (
        <section className="testimonials">
                      <div className='testimonial-header'>
                <hr />
                <h2>Testimonials</h2><hr /></div>  
                <div className='testimonial-container'>
                <Swiper 
  modules={[Pagination]}
  spaceBetween={20}
  centeredSlides={true}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    // when window width is <= 576px
    576: {
      slidesPerView: 1
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }}
>

       <SwiperSlide className="div5">
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
        <p>“ I have had the pleasure of working with Peter on a project and can confidently say that he is a skilled and dedicated developer. Throughout the project, Peter consistently demonstrated his expertise in coding, problem-solving, and project management.

What impressed me most about Peter was his ability to take complex technical concepts and break them down into easily understandable terms for non-technical team members. This was particularly valuable during meetings and presentations, as it ensured that everyone was on the same page and had a clear understanding of the project's progress.
”</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="div5">
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
        <p>“ I have had the pleasure of working with Peter on a project and can confidently say that he is a skilled and dedicated developer. Throughout the project, Peter consistently demonstrated his expertise in coding, problem-solving, and project management.

What impressed me most about Peter was his ability to take complex technical concepts and break them down into easily understandable terms for non-technical team members. This was particularly valuable during meetings and presentations, as it ensured that everyone was on the same page and had a clear understanding of the project's progress.
”</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="div5">
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
        <p>“ I have had the pleasure of working with Peter on a project and can confidently say that he is a skilled and dedicated developer. Throughout the project, Peter consistently demonstrated his expertise in coding, problem-solving, and project management.

What impressed me most about Peter was his ability to take complex technical concepts and break them down into easily understandable terms for non-technical team members. This was particularly valuable during meetings and presentations, as it ensured that everyone was on the same page and had a clear understanding of the project's progress.
”</p>
        </div>
      </SwiperSlide>
      </Swiper>
      </div>
        </section>
    )
}

export default Testimonial;