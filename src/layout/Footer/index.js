import React from 'react';
import classes from './Footer.module.scss';
import Logo from '../../assets/img/logo.png';


function Footer() {
  return (
    <footer>
      <div className={classes.right}>
          <div>
            <img src={Logo} alt="Logo"/>
          </div>
      </div>
    </footer>
  )
}

export default Footer