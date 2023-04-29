import classes from "./UpdateProfileForm.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import {  useEffect, useRef } from "react";
import Button from "../UI/Button";
import { useHistory } from "react-router-dom";

const UpdateProfileForm = (props) => {
const token=localStorage.getItem('token');
  const InputNameRef = useRef();
  const InputUrlRef = useRef();
  const history = useHistory();

  useEffect(() => {
    const email = localStorage.getItem("Email");
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBCroafSGPHdUTusIDf0ZYzav2O3JYwP5g",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
        }),
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.error && data.error.message) {
          let errorMessage = data.error.message;
          throw new Error(errorMessage);
        } else {
          const userData = data.users.find((user) => user.email === email);
          if (userData) {
            InputNameRef.current.value = userData.displayName;
            InputUrlRef.current.value = userData.photoUrl;
          } else {
            InputNameRef.current.value = "";
            InputUrlRef.current.value = "";
          }
        }
      })
      .catch((error) => {
        console.log('error',error.message);
      });
  },[]);

  const onClickHandler = () => {
    history.replace("/welcome");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const fullName = InputNameRef.current.value;
    const photoUrl = InputUrlRef.current.value;

    try {
      const resp = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBCroafSGPHdUTusIDf0ZYzav2O3JYwP5g",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
            displayName: fullName,
            photoUrl: photoUrl,
            returnSecureToken: true,
          }),
        }
      );

      const data = await resp.json();

      if (!resp.ok) {
        let errorMessage = data.error.message;
        throw new Error(errorMessage);
      } else {
        alert('Your Profile has been updated successfully')
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className={`${classes.userForm}`} onSubmit={submitHandler}>
      <div className={classes.formHeader}>
        <h5>Contact Details</h5>
        <Button type="button" onClick={onClickHandler}>
          {" "}
          Cancel
        </Button>
      </div>
      <div className={classes.userDetails}>
        <div className={classes.name}>
          <AiFillGithub />
          <label htmlFor="userName">Fullname</label>
          <input type="text" id="userName" ref={InputNameRef}></input>
        </div>
        <div className={classes.url}>
          <BsGlobe2 />
          <label htmlFor="photoUrl">Profile Photo URL</label>
          <input type="url" id="photoUrl" ref={InputUrlRef}></input>
        </div>
      </div>
      <Button className={classes.updateButton} type="submit">
        Update
      </Button>
      <hr />
    </form>
  );
};

export default UpdateProfileForm;
