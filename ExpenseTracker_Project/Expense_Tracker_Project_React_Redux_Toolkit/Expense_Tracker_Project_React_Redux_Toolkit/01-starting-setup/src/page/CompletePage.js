import classes from "./CompletePage.module.css";
import { Link, useHistory } from "react-router-dom";
import UpdateProfileForm from "../component/UpdateProfile/UpdateProfileForm";
import Button from "../component/UI/Button";
import { authAction } from "../store/auth";
import { useDispatch } from "react-redux";

const CompletePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    dispatch(authAction.logout());
    history.replace("/");
  };
  return (
    <div className={classes.completePage}>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <h4>Winners never quite,Quitters never win</h4>
          <p>
            Your Profile is 64% completed.A complete profile has
            <br />
            higher chances of landing a job &nbsp;
            <Link to="/welcome/complete" className={classes.link}>
              Complete now
            </Link>
          </p>
          <Button className={classes.logouButton} onClick={logoutHandler}>
            LogOut
          </Button>
        </nav>
      </header>
      <hr />
      <UpdateProfileForm />
    </div>
  );
};

export default CompletePage;
