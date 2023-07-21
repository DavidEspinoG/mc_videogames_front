const SignIn = () => {
  return (
    <div className="login-main-container">
      <div className="container">
        <div className="login-form">
          <h3 className="subtitle text-center">SIGN IN</h3>
          <hr className="green-line"/>
          <form className="login-inputs">
            <input 
              placeholder="E-mail"
              className="input"
              type="text"
            />
            <input 
              placeholder="Password"
              className="input"
              type="password"
            />
            <input 
              placeholder="Confirm your password"
              className="input"
              type="text"
            />
            <button className="login-submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default SignIn;