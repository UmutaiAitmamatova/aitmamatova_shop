import React from "react";
import { useCreatUserMutation } from "../../redux/api/authApi";
import classes from "./singUp.module.scss";
import { useForm } from "react-hook-form";
import { FormConfigs } from "./configs";
import { Link } from "react-router-dom";

export const changeObjToForm = (obj) => {
  let formData = new FormData();
  Object.entries(obj).map((el) => {
      formData.append(el[0], el[1]);
  });
  return formData;
}


function SignUp() {
  const [ createUser ] = useCreatUserMutation();
  // const { register, handleSubmit } = useForm();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
});
// const handleError = (errors) => {console.log(errors);};
const { registerOptions } = FormConfigs()


  const onSubmit = (data) => {
    if (data.avatarka["length"] === 0) delete data.avatarka
    else data.avatarka = data.avatarka[0];

    let newFormData = changeObjToForm(data);
    createUser(newFormData).then((resp) => {
      console.log(resp)
    })
  };
  
  return (
    <div className={classes.block}>
      <div className={classes.signupContainer}>
        <h2>Sign Up</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <label>
            Username:
            <input type="text" {...register("username", registerOptions.username)}/>
            <small  className={classes.text_danger}>
                {errors?.username && errors.username.message}
            </small>
          </label>

          <label>
            Email:
            <input type="email" {...register("email", registerOptions.email)}/>
            <small  className={classes.text_danger}>
                {errors?.email && errors.email.message}
            </small>
          </label>

          <label>
            Avatarka:
            <input type="file" {...register("avatarka", registerOptions.avatarka)} />
            <small  className={classes.text_danger}>
                {errors?.avatarka && errors.avatarka.message}
            </small>
          </label>

          <label>
            Phone Number:
            <input type="text" {...register("phone_number", registerOptions.phone_number)}/>
            <small  className={classes.text_danger}>
                {errors?.phone_number && errors.phone_number.message}
            </small>
          </label>

          <label>
            Birth Date:
            <input type="date" {...register("birth_date", registerOptions.birth_date)} />
            <small  className={classes.text_danger}>
                {errors?.birth_date && errors.birth_date.message}
            </small>
          </label>

          <label>
            about
            <input type="text" {...register("about", registerOptions.about)}/>
            <small  className={classes.text_danger}>
                {errors?.about && errors.about.message}
            </small>
          </label>
          <label>
            Password:
            <input type="password" {...register("password", registerOptions.password)}/>
            <small  className={classes.text_danger}>
                {errors?.password && errors.password.message}
            </small>
          </label>

          <Link to={'/signIn'}><p>Have already account?</p></Link>
          <Link to={'/'}><p>На главную</p></Link>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
