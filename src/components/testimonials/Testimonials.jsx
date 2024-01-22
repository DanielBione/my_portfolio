import React from 'react'
import './testimonials.css'
import AV1 from '../../assets/avatar1.jpg'
import AV2 from '../../assets/avatar2.jpg'
import AV3 from '../../assets/avatar3.jpg'
import { Pagination,Autoplay, Navigation  } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import { showFromTopVariants } from '../motion/variants'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


const data = [
  {
    id: 1,
    avatar: AV1,
    name: 'Patrícia',
    review: 'Andrew é fera no mundo do desenvolvimento web. Já fizemos vários projetos juntos, e a criatividade dele e o olho para detalhes sempre surpreendem.'
  },
  {
    id: 2,
    avatar: AV2,
    name: 'Jacob',
    review: "His tech skills are off the charts, and he always comes up with custom solutions that fit our unique needs. He's all about quality, from the planning stage right through to keeping our systems running smoothly."
  },
  {
    id: 3,
    avatar: AV3,
    name: 'Oscar',
    review: "Not only does he create eye-catching websites, but they also work like a charm. He totally gets what you want, and his solutions are spot on. "
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <motion.h5 variants={showFromTopVariants(200)} initial="hidden" whileInView="visible" viewport={{once:true}}>Review from clients</motion.h5>
      <motion.h2 variants={showFromTopVariants(200,0.3)} initial="hidden" whileInView="visible" viewport={{once:true}}>Testimonials</motion.h2>

      <motion.div variants={showFromTopVariants(200,0.4)} initial="hidden" whileInView="visible" viewport={{once:true}}>
        <Swiper className="container testimonials__container"
          modules={[Pagination,Autoplay,Navigation]}
          spaceBetween={50}
          loop={true}
          autoplay={true}
          delay={1000}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
        >
          {data.map(({id,avatar,name,review}) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </motion.div>
    </section>
  )
}

export default Testimonials