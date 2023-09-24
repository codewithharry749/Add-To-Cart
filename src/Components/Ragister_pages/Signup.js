import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate()
    const [userDetail, setUserdetail] = useState({
        email: '',
        password: '',
        cpassword: ''
    });

    const handleInpute = (e) => {
        const { name, value } = e.target;
        setUserdetail({
            ...userDetail, [name]: value})
    }
    const signupData = (e) => {
        e.preventDefault();
        if (userDetail.password === userDetail.cpassword) {
            if (userDetail.password.length < 7) {
                alert("Plz enter passwordt atleast 8 digit including (0-9) number ,(@ , ! , # , $ , % , &) symble , characters.");
                navigate('/signup')
            } else {
                // createUserWithEmailAndPassword(auth, userDetail.email, userDetail.password).then((res) => { console.log(res) }).catch((err) => {
                //     console.log(err)
                // })
                navigate('/login')
            }


        } else {
            alert("Password Not Matched ")
        }

        console.log(userDetail)
    }
    const Login_signup_style = { fontSize: '1.5rem', cursor: 'pointer', textDecoration: 'none', backgroundColor: 'white' }



    return (
        <div className='container-fluid signup'>
            <div className='row justify-content-around p-2'>
                <div className='col-md-6 col-sm-10 signup_left p-3' style={{
                    borderRadius: '.7rem 0 0 .7rem'
                }}>
                    <form>
                        <center>
                            <div className='col-10 mb-4' style={{ backgroundColor: 'white', padding: '.7rem', justifyContent: 'center', display: 'flex', borderRadius: '.7rem', textDecoration: 'none', alignItems: 'center', marginTop: '1rem' }}>
                                <NavLink to='/login' style={Login_signup_style}>Login</NavLink>&nbsp;|&nbsp;
                                <NavLink to='/signup' style={Login_signup_style}>signUp</NavLink>

                            </div>
                        </center>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Email Address</label>
                            <input type="email"
                                name='email'
                                onChange={handleInpute}
                                required
                                value={userDetail.email}
                                className="form-control" id="exampleInputPassword1" placeholder="Enter Your Email" />

                        </div>

                        <div>
                            <label for="exampleInputEmail1">Password</label>
                            <input type="password"
                                name='password'
                                onChange={handleInpute}
                                required
                                value={userDetail.password}
                                className="form-control" id="exampleInputEmail1" aria-describedby="passwordHelp" placeholder="Enter Password" />

                        </div>
                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password"
                                name='cpassword'
                                onChange={handleInpute}
                                required
                                value={userDetail.cpassword}
                                className="form-control" id="exampleInputPassword1" placeholder="Enter Confirm Password" />
                        </div>

                        <div id='recaptcha-container' ></div>
                        <button
                           onClick={signupData}
                            style={{ marginTop: '.5rem', }} type="submit" className="btn btn-primary">Signup</button> &nbsp;
                    </form>
                </div>

                <div className='col-md-6 col-sm-10  signup_right' style={{ backgroundColor: 'orange', borderRadius: '0 .7rem .7rem 0' }} >
                    <img src='../images/signup.png' alt='...' className='' />
                </div>

            </div>

        </div>

    )
}

export default Signup;
