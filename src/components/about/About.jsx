import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { showFromTopVariants } from '../motion/variants'

const About = () => {

  return (
    <section id='about'>
      <motion.h5 variants={showFromTopVariants(200,)} initial="hidden" whileInView="visible" viewport={{ once: true }}>Informações</motion.h5>
      <motion.h2 variants={showFromTopVariants(200, 0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }}>Sobre mim</motion.h2>

      <div className='container about__container'>
        <motion.div
          variants={showFromTopVariants(200, 0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='about__me'
        >
          <div className='about__me-image'>
            <img src={ME} alt="Myself" />
          </div>
        </motion.div>


        <div className='about__content'>
          <div className='about__cards'>
            <motion.div variants={showFromTopVariants(200, 0.5)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experiência</h5>
                <small>Mais de um Ano.</small>
              </article>
            </motion.div>

            <motion.div variants={showFromTopVariants(200, 0.6)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Clientes</h5>
                <small>Mais de três</small>
              </article>
            </motion.div>

            <motion.div variants={showFromTopVariants(200, 0.7)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projetos</h5>
                <small>Mais de dois</small>
              </article>
            </motion.div>
          </div>
          <motion.div className='about__card__text'>
            <p variants={showFromTopVariants(200, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Olá, eu sou Daniel, um entusiasta apaixonado por criar experiências digitais excepcionais. Com mais de um ano de experiência como desenvolvedor frontend, tenho o privilégio de estar na vanguarda da inovação na web e mobile, contribuindo para moldar o futuro digital.
              Minha jornada profissional tem sido marcada por desafios emocionantes e projetos estimulantes. Recentemente, finalizei com sucesso um projeto inovador, liderando o ciclo completo de desenvolvimento desde a concepção até a entrega.</p>
          </motion.div>

          <motion.div variants={showFromTopVariants(200, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About