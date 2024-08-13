import React from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

import DTriangle from '../../assets/login/DTriangle.png';
import LeftCircle from '../../assets/login/LSideCircle.png';
import LowerCircle from '../../assets/login/LowerCircle.png';

function Signup(){
    const navigate = useNavigate();

    return(
        <div className='signup'>
            {/* <h1>This is signUp page</h1>
            <button onClick={ () => navigate('/Login')} >Login</button>
            <button onClick={ () => navigate('/')} >Back</button> */}
            <div className='signup-upper'>
                <button onClick={ () => navigate('/')} className='signup-back'>&larr;</button>
            </div>
            <div className='signup-middle'>
                <div className='signup-middle-1'>
                    <img src={DTriangle} alt="signup-triangle" />
                </div>
                <div className='signup-middle-2'>
                    <div className='signup-form'>
                        <p className='signup-form-p1'>Username</p> 
                        <input type="text" placeholder='Enter your username' className='signup-form-txt'/> <br />

                        <p className='signup-form-p2'>Email</p> 
                        <input type="text" placeholder='Enter your email' className='signup-form-txt'/> <br />

                        <p className='u-pw'>Password</p> 
                        <input type="password" placeholder='**********' className='signup-form-pw'/> <br />

                        <p className='signup-form-p2'>Confirm Password</p> 
                        <input type="password" placeholder='**********' className='signup-form-pw'/> <br />

                        

                        <button className='signup-form-btn'>signup</button> <br />
                        <p className='signup-form-p3'>
                            Already have account?
                            <span onClick={ () => navigate('/Login')} className='signup-form-span'> Login now</span>
                        </p>

                    </div>
                </div>
                <div className='signup-middle-3'>
                    <img src={LeftCircle} alt="Left Circle" className='signup-middle-3-img' />
                </div>
            </div>
            <div className='signup-lower'>
                <img src={LowerCircle} alt="lower circle" className='signup-lower-image'/>
            </div>
        </div>
    )
}

export default Signup;

// rfce