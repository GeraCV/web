import React from 'react'
import emailjs from 'emailjs-com'

import '../styles/contact.css'

const ContactMe = () => {

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_249da2f', 'template_q0mu994', e.target, 'user_FykyP0ucLtTi0pPBxkBrc')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <div className="contactme">
      <h2 className="subtitle"> Contacto </h2>
      <p className="information">
        Si te interesa mi trabajo o mis servicios,
        mandame un correo,
        y en lo mas breve me pondré en contacto contigo.
      </p>
      <form action="" className="form-contact" onSubmit={sendEmail}>
        <input className="inpt-form" type="text" name="name" placeholder="Nombre" required />
        <input className="inpt-form" type="email" name="email" placeholder="Correo" required />
        <input className="inpt-form" type="text" name="subject" placeholder="Asunto" required />
        <textarea className="inpt-form message-form" name="message" placeholder="Mensaje"></textarea>
        <button className="btn-submit" type="submit" value="Enviar"> Enviar </button>
      </form>
    </div>
  )
}

export default ContactMe