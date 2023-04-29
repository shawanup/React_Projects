import { useHistory } from "react-router-dom";

import classes from "./VerifyUserProfile.module.css";
import { useSelector } from "react-redux";
const VerifyUserProfile = () => {
  const token = useSelector((state) => state.auth.token);
  const history = useHistory();

  const verifyHandler = async () => {
    try {
      const resp = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBCroafSGPHdUTusIDf0ZYzav2O3JYwP5g",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: token,
          }),
        }
      );
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message);
      } else {
        history.replace("/welcome");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={classes.verify}>
      <button onClick={verifyHandler}>Verify</button>
    </div>
  );
};

export default VerifyUserProfile;
