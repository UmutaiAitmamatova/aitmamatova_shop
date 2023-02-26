import React from 'react';
import CartsCard from '../../components/CartsCard';
import classes from './cart.module.scss';

function Cart() {
  return (
    <div className={classes.cart}>
      <div className={classes.container}>
        <div className={classes.block}>
          <h2>Carts</h2>
          <h4>In total: <span>1140 $</span></h4>
          <div className={classes.goods}>
            <CartsCard/>
            <CartsCard/>
            <CartsCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;