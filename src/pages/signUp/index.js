import React, { useState } from "react";
import classes from "./singUp.module.scss";

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.block}>
      <div className={classes.signupContainer}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" />
          </label>

          <label>
            Email:
            <input type="email" />
          </label>

          <label>
            Avatarka:
            <input type="file" />
          </label>

          <label>
            Phone Number:
            <input type="number" />
          </label>

          <label>
            Birth Date:
            <input type="date" />
          </label>

          <label>
            Password:
            <input type="password" />
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
