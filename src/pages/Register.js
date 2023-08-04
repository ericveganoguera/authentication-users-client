import { Link } from "react-router-dom";
import "./styles.css";
import Logo from "../devchallenges-logo-transparent.png";

function Register(props) {
  

  return (
      <section className={`${props.isThemeLight? "light" : "dark"} container-body`}>
          <button
            onClick={()=>(props.isThemeLight? props.setIsThemeLight(false):props.setIsThemeLight(true))}
            className="button-theme"
          >{props.isThemeLight ? "🌙" : "🌞"}</button>
        <div className="content">
          <p className={`${props.isThemeLight ? "text-light-theme" : "text-dark-theme"} text-logo `}><img src={Logo} alt="logo" className="logo" /> devchallenges</p>
          <div className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} title`}>
            <p>Join thousands of learners from around the world</p>
          </div>
          <p className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} description`}>
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
          <form action="" className="form-login">
            <div className="input-form">
              <i class="bi bi-envelope"></i>
              <input type="email" name="" id="" placeholder="Email" />
            </div>
            <div className="input-form">
              <i class="bi bi-lock-fill"></i>
              <input type="password" name="" id="" placeholder="Password" />
            </div>
            <input type="submit" value="Start coding now" />
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
            Adready a member? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
  );
}

export default Register;
