import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {initialValues, validationSchema} from './contact-data'


import emailjs from '@emailjs/browser';



const Contact = () => {
  const sendEmail = (formValues) => {
    // e.preventDefault();

    emailjs.send('service_w53y46c', 'template_ybmjmwl', formValues, 'fqzTo5zgkXbqaJ4xs')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
      
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option_icon'/>
                <h4>Email</h4>
                <h5>v4vikram.dev@gmail.com</h5>
                  <a href="mailto:v4vikram.dev@gmail.com" target="_blank" rel="noreferrer">Send a message</a>

            </article>
            <article className="contact__option">
              <BiMessageRoundedDetail className='contact__option_icon'/>
                <h4>Messenger</h4>
                <h5>Vikram Dev</h5>
                  <a href="mailto:v4vikram.dev@gmail.com" target="_blank" rel="noreferrer">Send a message</a>

            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option_icon'/>
                <h4>Whatapp</h4>
                <h5>881-0433-233</h5>
                  <a href="https://web.whatsapp.com/send?phone=+918810433233&amp;text=Hi, I would like to get more information.." target="_blank" rel="noreferrer">Send a message</a>

            </article>
          </div>

         <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
            onSubmit={sendEmail}
         >
            <Form>
                <Field type="text" name='name' placeholder='Your Name' />
                <span className="error"> <ErrorMessage name='name'/></span>

                <Field type="email" name='email' placeholder='Your Email' />
                <span className="error"> <ErrorMessage name='email'/></span>
                
                <Field tarea name="message" rows="7" placeholder='Your Message' />
                <span className="error"> <ErrorMessage name='message'/></span>
               
                <button type='submit' className='btn btn-primary'>Send Message</button>
              </Form>
         </Formik>
      </div>
    </section>
  )
}

export default Contact