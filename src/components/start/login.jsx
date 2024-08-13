import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

import DTriangle from '../../assets/login/DTriangle.png';
import LeftCircle from '../../assets/login/LSideCircle.png';
import LowerCircle from '../../assets/login/LowerCircle.png';


function Login(){
    const navigate = useNavigate();
    return(
        <div className='login'>
            {/* <h1>It is Login Page</h1>
            <p onClick={ () => navigate('/Signup')} >Signup</p>
            <button onClick={ () => navigate('/')} >Back</button> */}


            <div className='login-upper'>
                <button onClick={ () => navigate('/')} className='login-back'>&larr;</button>
            </div>
            <div className='login-middle'>
                <div className='login-middle-1'>
                    <img src={DTriangle} alt="login-triangle" />
                </div>
                <div className='login-middle-2'>
                    <div className='login-form'>
                        <p className='login-form-p1'>Email</p> 
                        <input type="text" placeholder='Enter your email' className='login-form-txt'/> <br />

                        <p className='login-form-p2'>Password</p> 
                        <input type="password" placeholder='**********' className='login-form-pw'/> <br />

                        <button className='login-form-btn' onClick={ () => navigate('/folder')}>Login</button> <br />
                        <p className='login-form-p3'>
                            don't have account?
                            <span onClick={ () => navigate('/Signup')} className='login-form-span'> Register now</span>
                        </p>

                    </div>
                </div>
                <div className='login-middle-3'>
                    <img src={LeftCircle} alt="Left Circle" className='login-middle-3-img' />
                </div>
            </div>
            <div className='login-lower'>
                <img src={LowerCircle} alt="lower circle" className='login-lower-image'/>
            </div>
        </div>
    )
}

export default Login;