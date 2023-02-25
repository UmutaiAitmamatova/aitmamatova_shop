import React from 'react';
import classes from './cart.module.scss';

function Cart() {
  return (
    <div className={classes.cart}>
      <div className={classes.container}>
        <div className={classes.block}>
          <h2>Carts</h2>
          <h4>In total:</h4>
          <div className={classes.goods}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;