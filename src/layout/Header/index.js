import React from 'react';
import classes from './Header.module.scss';
import { BsPerson } from 'react-icons/bs';
import { TbBrandTelegram, TbBrandInstagram, TbBrandWhatsapp } from 'react-icons/tb';
import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';

function Header() {
  const menu = [
    { id: 0, value: "Главная", href: "/" },
    { id: 1, value: "О Нас", href: "aboutUs" },
    { id: 2, value: "Товары", href: "goods" },
];
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <header>
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.rigth}>
          <div className={classes.network}>
              <Link to={'#'}><TbBrandTelegram className={classes.icons} /></Link>
              <Link to={'#'}><TbBrandInstagram className={classes.icons} /></Link>
              <Link to={'#'}><TbBrandWhatsapp className={classes.icons} /></Link>                       
            </div>
          </div>

          <div className={classes.left}>
            <div className={classes.links}>
              <Link to='/'><div>Главная</div></Link>
              <Link to={'aboutUs'}><div>О Нас</div></Link>
              <Link to={'goods'}><div>Товары</div></Link>
            </div>
            <div className={classes.auth}>
              <Link to={'profile'}><BsPerson className={classes.person} /></Link>
              <AiOutlineLogin className={classes.person}/>

              <div className={classes.menu__btn} onClick={() => setMenuActive(!menuActive)}>
                <span className={classes.senond} />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.bottom}>
          <Link to={'/'}>
            <div><img src={Logo} alt="Logo"/></div>
          </Link>
          <div className={classes.pages}>
            <Link to='favorite'><MdOutlineFavoriteBorder className={classes.cart}/></Link>
            <Link to='cart'><AiOutlineShoppingCart className={classes.cart}/></Link>
          </div>
        </div>

        {/* <Menu
          active={menuActive}
          setActive={setMenuActive}
          header={"Menu"}
          items={menu}
        /> */}
      </div>
    </header>
  )
}

export default Header