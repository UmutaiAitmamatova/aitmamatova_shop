import React from 'react';
import classes from './Header.module.scss';
import { BsPerson } from 'react-icons/bs';
import { TbMail, TbBrandTelegram, TbBrandInstagram, TbBrandWhatsapp } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import Logo from '../../assets/img/logo.png';

function Header() {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.rigth}>
            <TbMail className={classes.mail} />
            <p>umut@gmail.com</p>
          </div>
          <div className={classes.left}>
            <div className={classes.network}>
              <TbBrandTelegram className={classes.icons} />
              <TbBrandInstagram className={classes.icons} />
              <TbBrandWhatsapp className={classes.icons} />
            </div>
            <div className={classes.auth}>
              <BsPerson className={classes.person} />
              <p>Log in</p>
            </div>
          </div>
        </div>

        <div className={classes.bottom}>
          <div>
            <img src={Logo} alt="Logo"/>
          </div>
          <div className={classes.pages}>
            <MdOutlineFavoriteBorder className={classes.cart}/>
            <AiOutlineShoppingCart className={classes.cart}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header