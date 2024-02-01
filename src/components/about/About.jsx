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
              Olá, eu sou Daniel, um desenvolvedor especializado em Flutter e um entusiasta da tecnologia da informação, dedicado a criar soluções inovadoras por meio de aplicativos, estou em constante busca por expandir meu conhecimento e habilidades na programação, visando oportunidades desafiadoras no mercado de desenvolvimento de aplicativos. Apaixonado por transformar ideias em produtos digitais funcionais e intuitivos, meu foco está em criar sites e aplicativos que sejam tanto bonitos quanto simples de usar. Estou sempre aprendendo e explorando novidades na programação, testando diversas ferramentas como Riverpod, Provider, GraphQL, REST, Dio, Dart. Esta jornada só me motiva ainda mais a enfrentar desafios difíceis com criatividade.</p>
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