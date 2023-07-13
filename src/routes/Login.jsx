import '../styles/Login.scss';

const Login = () => {
  return (
    <div className="login-main-container">
      <div className='container'>
        <div className='login-header'>
          <i class="fa-solid fa-bars login-icon-one"></i>
          <i class="fa-solid fa-magnifying-glass login-icon-two"></i>
        </div>
        <div className='login-form'>
          <h3 className='subtitle text-center'>LOGIN</h3>
          <hr className='green-line'/>
          <div className='login-inputs'>
            <input placeholder='Email' className='input'/>
            <input placeholder='Password' className='input' />
            <button type='button' className='login-submit-button'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
