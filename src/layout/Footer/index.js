import React from 'react';
import classes from './Footer.module.scss';
import Logo from '../../assets/img/logo.png';
import { CiLocationOn } from 'react-icons/ci'
import { IoIosCall } from 'react-icons/io'
import { FiMail } from 'react-icons/fi'

function Footer() {
  return (
    <footer>
      <div className={classes.right}>
        <div className={classes.container}>
          <div><img src={Logo} alt="Logo"/></div>
          <div className={classes.intro}><CiLocationOn className={classes.icon}/><span> Gogoliy 125/2</span></div>
          <div className={classes.intro}><IoIosCall className={classes.icon}/><span> +996 505 171 515</span></div>
          <div className={classes.intro}><FiMail className={classes.icon}/><span> umut@gmail.com</span></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;