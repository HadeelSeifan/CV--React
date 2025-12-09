import React, { useRef } from "react";
import './contant.css'
import { MdOutlineEmail } from 'react-icons/md'
import {FaInstagram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_spr6dzv",    // من لوحة EmailJS
      "template_agi8mzp",   // من لوحة EmailJS
      form.current,
      "_LV8zZ7pf0kT9pN9j"     // user/public key من EmailJS
    )
  }

  const ContactData = [
    {
      id: 1,
      icon: <MdOutlineEmail/>,
      tittle: 'Email',
      info: 'Hadeel@gmail.com',
      link: 'mailto:amerhadeel913@gmail.com'

    },
    {
      id: 2,
      icon: <BsWhatsapp/>,
      tittle: 'Whatsapp',
      info: '+972595482976',
      link: 'https://wa.me/+972595482976'

    },
    {
      id: 3,
      icon: <FaInstagram/>,
      tittle: 'Instagram',
      info: 'hadeelamer_10',
      link: 'https://www.instagram.com/hadeelamer_10'

    },
  ]
  return (
    <section className='contact' id='contact'>
      <div className="top_section">
        <h5>Get to Touch</h5>
        <h2>Contact ME</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">

        {ContactData.map(({ id, icon, title, info,link }) => {
          return(
            <article key={id} className="contact_option" >
            
              {icon}
            
           
              <h4>{title}</h4>
              <h5 className='text_light'>{info}</h5>
              <a href={link}  target='_blank'>Send Message</a>
           
          </article>

          )})}



        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Full Name' name='name' />
          <input type='email' placeholder='Your Email' name='email' />
          <textarea rows={10} name='message' id='' placeholder='Inter Your message'></textarea>
          <button className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact