import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Facebook</h3>
          <span className="registerDes">
            Connect with friends and world around you.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <input placeholder="Password Again" className="registerInput" />
            <button className="registerButton">Sign up</button>
            <button className="registerLoginButton">Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
