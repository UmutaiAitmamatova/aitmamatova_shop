import React from 'react';
import classes from './CartsCard.module.scss';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'

function CartsCard() {
  return (
    <div className={classes.carts}>
      <div className={classes.top}>
        <div>
          <img src="#" alt="CartURL" />
        </div>
        <p className={classes.title}>Black bread</p>
      </div>


      <div className={classes.botton}>
      <div className={classes.count}>
        <div>0</div>
        <div className={classes.countsIcon}>
          <MdOutlineKeyboardArrowUp className={classes.icon} />
          <MdOutlineKeyboardArrowDown className={classes.icon} />
        </div>
      </div>
      <div className={classes.price}>
        50 $
      </div>
      <div>
        <RiDeleteBin6Line className={classes.delete} />
      </div>
      </div>
    </div>
  )
}

export default CartsCard;