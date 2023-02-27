import React from 'react';
import classes from './profile.module.scss'

function Profile() {
  return (
    <div className={classes.profile}>
        <div className={classes.container}>
        <h1>My profile</h1>
            <div className={classes.block}>
              <div className={classes.img}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="userURL"/>
              </div>

              <div className={classes.info}>
                <div><strong>UserName: </strong>Umutai</div>
                <div><strong>Email:: </strong>aitmamatova@gmail.com</div>
                <div><strong>Phone Number: </strong>+996 555 777 888</div>
                <div><strong>Birth Date: </strong>2023-02-20</div>
                <div><strong>About: </strong> dededede</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Profile;