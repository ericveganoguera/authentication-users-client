import { Link } from "react-router-dom";
import "./styles.css";
import Logo from "../devchallenges-logo-transparent.png";

function Login(props) {
  return (
    <section
      className={`${props.isThemeLight ? "light" : "dark"} container-body`}
    >
      <button
        onClick={() =>
          props.isThemeLight
            ? props.setIsThemeLight(false)
            : props.setIsThemeLight(true)
        }
        className={`${props.isThemeLight? "personal-button-theme-light" : "personal-button-theme-dark"} button-theme`}
      >
        {props.isThemeLight ? "🌙" : "🌞"}
      </button>
      <div className="content">
        <p
          className={`${
            props.isThemeLight ? "text-light-theme" : "text-dark-theme"
          } text-logo`}
        >
          <img src={Logo} alt="logo" className="logo" /> devchallenges
        </p>
        <div
          className={`${
            props.isThemeLight ? "text-light-theme" : "text-dark-theme"
          } title`}
        >
          <p>Login</p>
        </div>
        <form action="" className="form-login">
          <div className="input-form">
            <i class="bi bi-envelope"></i>
            <input type="email" name="" id="" placeholder="Email" />
          </div>
          <div className="input-form">
            <i class="bi bi-lock-fill"></i>
            <input type="password" name="" id="" placeholder="Password" />
          </div>
          <input type="submit" value="Login" />
        </form>
        <p className="other-login-options">
          or continue with these social profile
        </p>
        <div className="social-network-login">
          <i class="bi bi-google"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-github"></i>
        </div>
        <p className="login">
        Don’t have an account yet? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
