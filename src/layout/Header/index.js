import React from 'react';
import classes from './Header.module.scss';
import { BsPerson } from 'react-icons/bs';
import { TbMail, TbBrandTelegram, TbBrandInstagram, TbBrandWhatsapp } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.rigth}>
          <div className={classes.network}>
              <TbBrandTelegram className={classes.icons} />
              <TbBrandInstagram className={classes.icons} />
              <TbBrandWhatsapp className={classes.icons} />
            </div>
          </div>

          <div className={classes.left}>
            <div className={classes.links}>
              <Link to='/'><div>Главная</div></Link>
              <Link to='aboutUs'><div>О Нас</div></Link>
              <Link to='goods'><div>Товары</div></Link>
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
            <Link to='cart'><AiOutlineShoppingCart className={classes.cart}/></Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header