import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { showFromTopVariants } from '../motion/variants'

const backEndServices = [
  {
    id: 1,
    title: "Restfull API'S"
  },
  // {
  //   id: 2,
  //   title: "Fullstack aplications"
  // },
  {
    id: 3,
    title: "Database configuration"
  },
  {
    id: 4,
    title: "Firebase development"
  },
]

const frontEndServices = [
  {
    id: 1,
    title: "Website development"
  },
  {
    id: 2,
    title: "System development"
  },
  {
    id: 3,
    title: "Mobile development"
  },
  {
    id: 4,
    title: "Style upgrades"
  },
]

const Services = () => {
  return (
    <section id='services'>
      <motion.h5 variants={showFromTopVariants(200)} initial="hidden" whileInView="visible" viewport={{ once: true }}>O que eu Ofereço</motion.h5>
      <motion.h2 variants={showFromTopVariants(200, 0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }}>Serviços</motion.h2>

      <div className="container services__container">
        <motion.div variants={showFromTopVariants(200)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <article className='service'>
            <div className="service__head">
              <motion.h3 variants={showFromTopVariants(200, 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>BackEnd</motion.h3>
            </div>

            <ul className='service__list'>
              {backEndServices.map((service, i) => (
                <motion.li variants={showFromTopVariants(200, i / 10)} initial="hidden" whileInView="visible" viewport={{ once: true }} key={service.id}>
                  <BiCheck className='service__list-icon' />
                  <p>{service.title}</p>
                </motion.li>
              ))}
            </ul>
          </article>
        </motion.div>


        <article className='service'>
          <div className="service__head">
            <motion.h3 variants={showFromTopVariants(200, 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>FrontEnd</motion.h3>
          </div>

          <ul className='service__list'>
            {frontEndServices.map((service, i) => (
              <motion.li variants={showFromTopVariants(200, i / 10)} initial="hidden" whileInView="visible" viewport={{ once: true }} key={service.id}>
                <BiCheck className='service__list-icon' />
                <p>{service.title}</p>
              </motion.li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services