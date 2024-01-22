import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/eu.png'
import HeaderSocials from './HeaderSocials'
import { TypingText } from '../motion/typing-text'
import { motion } from 'framer-motion';

const myselfImgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2
    }
  }
}

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>OLá, me chamo</h5>
        <h1><TypingText title="Daniel Escolano" /></h1>
        <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className='text-light'>FrontEnd Developer</motion.h5>
        <Cta />
        <HeaderSocials />

        <motion.div variants={myselfImgVariants} initial="hidden" animate="visible" className='me'>
          <img src={ME} alt="me" />
        </motion.div>

        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }} >
          <a href="#contact" className='scroll__down'>Sroll Down</a>
        </motion.div>
      </div>
    </header>
  )
}

export default Header