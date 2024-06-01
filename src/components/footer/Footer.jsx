import React from 'react';
import './footer.css';
import{BsInstagram} from 'react-icons/bs'
import{GrTwitter} from 'react-icons/gr'
import{BsFacebook} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <a href="" className='footer__logo'>VIKRAM DEV</a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experince">Experince</a></li>
          {/* <li><a href="#services">Services</a></li> */}
          <li><a href="#portfolio">Portfolio</a></li>
          {/* <li><a href="#testimonial">Testimonial</a></li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://github.com/" target='_blank'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vikram-singh-91902b231" target='_blank'><FaLinkedinIn /></a>
          {/* <a href="#"><BsFacebook/></a> */}
        </div>
        <div className="footer__copyright">
          <small>&copy; Vikram Dev. All right reserved</small>
        </div>
    </footer>
  )
}

export default Footer