import React, { useRef, useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { showFromTopVariants } from '../motion/variants'

const Contact = () => {

  const form = useRef();
  const [send, setSend] = useState(false)

  const sendEmail = (e) => {
    setSend(true)
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICEID, process.env.REACT_APP_EMAIL_TEMPLATEID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then(() => {
        setSend(false)
        alert('Message sent, thank you very much!')
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        setSend(false)
      })

    e.target.reset()
  };

  return (
    <section id='contact'>
      <motion.h5 variants={showFromTopVariants(200)} initial="hidden" whileInView="visible" viewport={{ once: true }}>Entrar em Contato</motion.h5>
      <motion.h2 variants={showFromTopVariants(200, 0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }}>Contactar-Me</motion.h2>

      <div className="container contact__container">
        <div className="contact__options">
          <motion.div variants={showFromTopVariants(200, 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>escolano.dev.contato@gmail.com</h5>
              <a href="mailto:escolano.dev.contato@gmail.com" target='_blank' rel='noreferrer'>Enviar uma Mensagem</a>
            </article>
          </motion.div>
          <motion.div variants={showFromTopVariants(200, 0.5)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+55 22 998225098</h5>
              <a href="https://api.whatsapp.com/send/?phone=5522998225098" target='_blank' rel='noreferrer'>Enviar uma Mensagem</a>
            </article>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Contact