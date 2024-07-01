import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      {/* <a href="/#" className='footer__logo'>SPACETREVORCODE</a> */}



      <div className="footer_socials">
        <a href="https://github.com/DanielBione" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/daniel-escolano-868553252/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Daniel Escolano</small>
      </div>
    </footer>
  )
}

export default Footer