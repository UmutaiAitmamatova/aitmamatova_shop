import React, { useEffect } from 'react';
import GoodsCard from '../../components/GoodsCard';
import Slider from '../../components/Slider/Slider';
import { useCreatUserMutation, useGetUsersQuery } from "../../redux/api/authApi";
import classes from './home.module.scss';

function Home() {
  const { data, isLoading, isError } = useGetUsersQuery();
  return (
    <main className={classes.home}>
      <div className={classes.containet}>
        {/* <Slider/> */}
        <div className={classes.goods}>
          {/* <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/>
          <GoodsCard/> */}
        </div>
      </div>
    </main>
  )
}

export default Home