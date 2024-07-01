import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const linkVariants = {
  hidden: {
    opacity: 0,
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2
    }
  }
}

const HeaderSocials = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.1 }} className='header__socials'>
      <motion.div variants={linkVariants} initial="hidden" animate="visible" className='header__socials__teste'>
        <a href="https://www.linkedin.com/in/daniel-escolano-868553252/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
      </motion.div>
      <motion.div variants={linkVariants} initial="hidden" animate="visible" className='header__socials__teste'>
        <a href="https://github.com/DanielBione" target='_blank' rel="noreferrer"><FaGithub /></a>
      </motion.div>
      <motion.div variants={linkVariants} initial="hidden" animate="visible" className='header__socials__teste'>
        <a href="https://www.facebook.com/profile.php?id=100094695927875" target='_blank' rel="noreferrer"><FaFacebook /></a>
      </motion.div>
      <motion.div variants={linkVariants} initial="hidden" animate="visible" className='header__socials__teste'>
        <a href="https://www.instagram.com/dev.escolano/" target='_blank' rel="noreferrer"><FaInstagram /></a>
      </motion.div>
    </motion.div>
  )
}

export default HeaderSocials