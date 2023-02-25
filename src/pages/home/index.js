import React from 'react';
import GoodsCard from '../../components/GoodsCard';
import Slider from '../../components/Slider/Slider';
import classes from './home.module.scss';

function Home() {
  return (
    <main className={classes.home}>
      <div className={classes.containet}>
        <Slider/>
        <div className={classes.goods}>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
        </div>
      </div>
    </main>
  )
}

export default Home