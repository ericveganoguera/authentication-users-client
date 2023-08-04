import Logo from "../devchallenges-logo-transparent.png";
import { Link } from "react-router-dom";
import "./styles.css";
import "./Personal.css";

function Personal(props) {
  return (
    <div className={`${props.isThemeLight? "light" : "dark"} personal-container-body`}>
      <header>
        {/* Logo */}
        <p
          className={`${
            props.isThemeLight ? "text-light-theme" : "text-dark-theme"
          } text-logo`}
        >
          <img src={Logo} alt="logo" className="logo" /> devchallenges
        </p>

        {/* Button dark/light theme */}
        <button
          onClick={() =>
            props.isThemeLight
              ? props.setIsThemeLight(false)
              : props.setIsThemeLight(true)
          }
          className={`${props.isThemeLight? "personal-button-theme-light" : "personal-button-theme-dark"} personal-button-theme`}
        >
          {props.isThemeLight ? "🌙" : "🌞"}
        </button>

        {/* Personal button */}

        <div className="personal-button">
          <img src="" alt="Profile" />
          <p className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"}`}>NAME</p>
          <p className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"}`}>v</p>
        </div>
      </header>

      <main>
        <h1 className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} personal-title`}>Personal info</h1>
        <h3 className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} personal-subtitle`}>
          Basic info, like your name and photo
        </h3>
        <section className="personal-information">
          <div className="personal-header">
            <article>
              <h1 className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} `}>Profile</h1>
              <h3>Some ingo may be visible to other people</h3>
            </article>
            <button>Edit</button>
          </div>
          <hr />
          <div className="personal-content">
            <p className="personal-content-category">PHOTO</p>
            <p className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} personal-content-info`}>
              <img src="" alt="Profile" />
            </p>
          </div>
          <hr />
          <div className="personal-content">
            <p className="personal-content-category">NAME</p>
            <p  className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} personal-content-info`}>Xanthe Neal</p>
          </div>
          <hr />
          <div className="personal-content">
            <p className="personal-content-category">BIO</p>
            <p  className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} personal-content-info`}>
              I am a software developer and a big fan of devchallenges...
            </p>
          </div>
          <hr />
          <div className="personal-content">
            <p className="personal-content-category">PHONE</p>
            <p  className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} personal-content-info`}>908249274292</p>
          </div>
          <hr />
          <div className="personal-content">
            <p className="personal-content-category">EMAIL</p>
            <p  className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} personal-content-info`}>xanthe.neal@gmail.com</p>
          </div>
          <hr />
          <div className="personal-content">
            <p className="personal-content-category">PASSWORD</p>
            <p  className={`${props.isThemeLight? "text-light-theme" : "text-dark-theme"} personal-content-info`}>************</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Personal;
