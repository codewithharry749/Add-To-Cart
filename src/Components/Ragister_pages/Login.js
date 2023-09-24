import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleInpute = (e) => {
    const { name, value } = e.target;
    setData({
      ...data, [name]: value
    });

  }

  const submitData = (e) => {
    e.preventDefault();
    console.log(data)
  }



  return (
    <div className='container-fluid login '>
      <div className='row p-2 mt-4'>

        <div className='col-md-6 col-sm-10 signup_left p-3' style={{
          borderRadius: '.7rem 0 0 .7rem'
        }}>
          <form>
            <center><h2 className='mb-4'>Login Now</h2></center>

            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email"
                name='email'
                onChange={handleInpute}
                required
                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password"
                name='password'
                onChange={handleInpute}
                required
                className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <button onClick={submitData} style={{ marginTop: '.5rem' }} type="submit" className="btn btn-primary">Login</button>

            <br /><br />
            <p style={{ marginTop: '.5rem' }}>Login with Other</p>

            <button
            //  onClick={signUpwithgoogle}
              style={{ cursor: 'pointer', border: 'none', backgroundColor: 'milk', borderRadius: '.5rem', color: 'green', width: '250px',textDecoration:'none' }} > <i class="fa fa-google-plus" style={{
              fontSize: '1.5rem', color: 'red',
              padding: '.5rem', cursor: 'pointer'
            }}></i> Sign-in With Google
            </button><br /><br/>
           <NavLink  style={{fontFamily:'monospace',textDecoration:'none' , color:'black'}} to='/signup'>
           <span>Create New Account</span>
           </NavLink>

          </form>

        </div>
        <div className='col-md-6 col-sm-10 login_rigth p-3' style={{ backgroundColor: 'orange', borderRadius: '0 0.7rem .7rem 0' }} >
          <img src='../images/login.png' className='login_img' />
        </div>
      </div>
    </div>

  )
}

export default Login;
