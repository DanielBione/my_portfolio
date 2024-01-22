import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { showFromTopVariants } from '../motion/variants'

const frontEndSkills = [
  {
    id: 1,
    title: 'Flutter',
    level: 'Medium'
  },
  {
    id: 2,
    title: 'Dart',
    level: 'Medium'
  },

  // {
  //   id: 3,
  //   title: 'TypeScript',
  //   level: 'Medium'
  // },


  // {
  //   id: 4,
  //   title: 'ReactJS',
  //   level: 'Beginner'
  // },

  // {
  //   id: 5,
  //   title: 'NextJS',
  //   level: 'Beginner'
  // },
]

const backEndSkills = [
  {
    id: 1,
    title: 'Python',
    level: 'beginner'
  },
  {
    id: 2,
    title: 'NodeJS',
    level: 'beginner'
  },
  {
    id: 3,
    title: 'SQL',
    level: 'Medium'
  },
  {
    id: 4,
    title: 'C#',
    level: 'beginner'
  },
  {
    id: 5,
    title: 'Firebase',
    level: 'Medium'
  },
]

const Experience = () => {
  return (
    <section id='experience' >
      <motion.h5 variants={showFromTopVariants(200,)} initial="hidden" whileInView="visible" viewport={{ once: true }}>Quais habilidades eu tenho</motion.h5>
      <motion.h2 variants={showFromTopVariants(200, 0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }}>Minha Experiência</motion.h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndSkills.map((skill, i) => (
              <motion.div variants={showFromTopVariants(200, i / 10)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <article key={skill.id} className='experience__details'>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.title}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backEndSkills.map((skill, i) => (
              <motion.div variants={showFromTopVariants(200, i / 10)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <article key={skill.id} className='experience__details'>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.title}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience