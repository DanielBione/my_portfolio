import React from 'react'
import './portfolio.css'
import IMG3 from '../../assets/portfolio-3.jpg'
import IMG14 from '../../assets/portfolio-14.jpg'
import IMG15 from '../../assets/portfolio-15.jpg'
import { motion } from 'framer-motion'
import { showFromTopVariants } from '../motion/variants'

const data = [
  {
    id: 15,
    image: IMG15,
    title: 'Pets PlayGoogle',
    github: '',
    demo: 'https://play.google.com/store/apps/details?id=com.puzzl.pets&hl=pt_BR&gl=US'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Pets App Store',
    github: '',
    demo: 'https://apps.apple.com/us/app/pets/id6451150411'
  },
  // {
  //   id: 14,
  //   image: IMG14,
  //   title: 'FlutterPot',
  //   github: 'https://github.com/tekboxs/flutterpot?tab=readme-ov-file',
  //   demo: ''
  // },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <motion.h5 variants={showFromTopVariants(200)} initial="hidden" whileInView="visible" viewport={{ once: true }}>Meus trabalhos Recentes</motion.h5>
      <motion.h2 variants={showFromTopVariants(200, 0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }}>Portfolio</motion.h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <motion.div variants={showFromTopVariants(200, 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {github !== '' ? <a href={github} className='btn btn-primary' rel='noreferrer' target='_blank'>Github</a> : ''}
                  {demo !== '' ? <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>App Link</a> : ''}
                </div>
              </article>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio