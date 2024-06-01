import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vikramdev-singh-91902b231/" target="_blank"  rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/v4vikram" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/vikramdev-singh-91902b231/" target="_blank"  rel="noreferrer"><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocials