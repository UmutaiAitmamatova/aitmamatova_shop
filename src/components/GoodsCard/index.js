import React from 'react';
import classes from './GoodsCard.module.scss';
import { MdOutlineFavorite } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai'

function GoodsCard() {
    return (
        <div className={classes.goods}>
            <div className={classes.block}>
                <div className={classes.favorite}>
                    <div><MdOutlineFavorite className={classes.icons}/></div>
                </div>
                <div>
                    <img src="" alt="GoodsURL" />
                </div>
                <p>Хлеб Черный</p>
                <p>$ 50.00</p>
                <button className={classes.btn}><AiOutlineShoppingCart size={18}/> Add to cart</button>
            </div>
        </div>
    )
}

export default GoodsCard;