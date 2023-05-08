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
            <img src="https://media.licdn.com/dms/image/D4E03AQFgDlK5TQtMrw/profile-displayphoto-shrink_100_100/0/1670086668134?e=1689206400&v=beta&t=t-jIUBQLanC1x_EpDXKJd1EQmWsFjaCrpi8oCx31Uog" alt="" />
          </div>
          <div className="detbox">
            <p className="name">Emmanuella Ngufor</p>
            <p className="designation">Full-stack web developer</p>
          </div>
        </div>
        <div className="review">
          <h4>
Having worked with Peter on multiple projects, I can confidently 
say that he is a highly skilled and dedicated web developer who uses his software development skills,
 attention to detail, and critical thinking to tackle
  any technical problem with ease, making him an invaluable asset to any team.</h4>
        <p>“
        I have worked with Peter on several projects and found him to be a highly skilled and 
        dedicated professional who can easily tackle any software development problem with his
         attention to detail, critical thinking, 
        and coding ability in React, JavaScript, and Bootstrap; he also offers helpful assistance to
         his peers, making him an asset to any team.
”</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="div5">
        <div className="userdetails">
          <div className="imgbox">
            <img src="https://media.licdn.com/dms/image/D4D03AQEKCOXIoXHHGw/profile-displayphoto-shrink_100_100/0/1669757342159?e=1689206400&v=beta&t=YASUzz2vqaBkr6QdHAjzZB7udgvWKBVyB3GalWG08rc" alt="" />
          </div>
          <div className="detbox">
            <p className="name">Bhaskar Ranjan Bora</p>
            <p className="designation">Full-stack web developer</p>
          </div>
        </div>
        <div className="review">
          <h4>
Peter Chendi is a skilled and dedicated React and Redux developer who effectively contributed to the development of a React Capstone
 Project at Microverse, making him a valuable asset to the team and highly recommended for any project requiring strong coding abilities.</h4>
        <p>“I  had the pleasure of working with Peter Chendi at Microverse and was consistently 
          impressed by his coding skills. Peter consistently demonstrated his expertise in React and
           Redux and was able to effectively contribute to the development of our React Capstone Project.
            He was a valuable asset to our team and I highly recommend him for any
           project requiring strong coding abilities. Peter is a dedicated and talented professional
            who I believe would be an asset to any organization.”</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="div5">
        <div className="userdetails">
          <div className="imgbox">
            <img src="https://media.licdn.com/dms/image/D4D03AQHQA287BiIXZA/profile-displayphoto-shrink_100_100/0/1671440367930?e=1689206400&v=beta&t=bExCQAhZvUpOKdCpnMGlhRcLkJ1mHT8Q6H5FA7zK1JM" alt="" />
          </div>
          <div className="detbox">
            <p className="name">Ahmed AL-ali</p>
            <p className="designation">Front-End developer</p>
          </div>
        </div>
        <div className="review">
          <h4>Peter is a skilled and dedicated developer who consistently 
            demonstrated his expertise in coding, problem-solving,
             and project management during the project we worked on together.</h4>
        <p>“ During a project I worked on with Peter, he consistently demonstrated his expertise in coding, problem-solving, and project management,
           and impressed me with his ability to communicate complex technical concepts in a way that 
          was easy to understand for non-technical team members, making him a great team player who is open
           to feedback and willing to help others.”</p>
        </div>
      </SwiperSlide>
      </Swiper>
      </div>
        </section>
    )
}

export default Testimonial;