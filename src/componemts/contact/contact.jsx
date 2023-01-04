import React from 'react' 
import './contact.css'
import {GrMail} from 'react-icons/gr'
import {FaWhatsappSquare} from 'react-icons/fa'
import {BsMessenger} from 'react-icons/bs'
import {useRef} from 'react' ; 
import emailjs from 'emailjs-com' 





 function contact() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();
  function sendEmail(e) {
     e.preventDefault()

     emailjs.sendForm('service_vutr95l', 'template_ip6hebg', form.current, 'C-SOlxx0YQ2D0JTMg')
      e.target.reset()
   }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <GrMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hassanzahidreal@gmail</h5>
            <a href="mailto:hassanzahidreal@gmail.com" target='_blank'>Send a message </a>
          </article>
          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+8801724734568</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801724734568" target='_blank'>Send a message </a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5> Hassan Zahid Real</h5>
            <a href="https://m.me/real.zahidhassan" target='_blank'>Send a message </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact