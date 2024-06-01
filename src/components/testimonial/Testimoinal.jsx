import React from 'react';
import './testimonial.css';
import Avtar2 from '../../assets/img/me.png'


// import {Pagination} from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Avtar2,
    title: 'Vikram Dev',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam totam sequi nihil rem quos quae ut molestias omnis dolorem id quo numquam sit laborum, quasi quisquam cupiditate inventore libero sunt?'
  },
  {
    id: 2,
    image: Avtar2,
    title: 'Vikram Dev',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam totam sequi nihil rem quos quae ut molestias omnis dolorem id quo numquam sit laborum, quasi quisquam cupiditate inventore libero sunt?'
  },
  {
    id: 3,
    image: Avtar2,
    title: 'Vikram Dev',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam totam sequi nihil rem quos quae ut molestias omnis dolorem id quo numquam sit laborum, quasi quisquam cupiditate inventore libero sunt?'
  },
]

const Testimoinal = () => {
  return (
    <section id="testimoinal">
      <h5>Review from client</h5>
      <h2>Testimoinal</h2>

      <Swiper 
        direction={"vertical"}
         modules={[Pagination]}
         spaceBetween={50}
         pagination={{ clickable: true }}
      className="container testimonial__container">
       {
        data.map(({id, image, title, review})=>{
          return(
            <SwiperSlide className="testimonial" key={id}>
            <div className="client__avatar">
              <img src={image} alt="" />
              </div>
              <h5 className="client__name">{title}</h5>
              <small className="client__review">{review}</small>
          </SwiperSlide>
  
          );
        })
       }
      </Swiper>
    </section>
    
  )
}

export default Testimoinal