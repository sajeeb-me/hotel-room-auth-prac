import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FacebookIcon from '../../../icons/facebook.png'
import GoogleIcon from '../../../icons/google.png'
import TwitterIcon from '../../../icons/twitter.png'
import useFirebase from '../../../hooks/useFirebase';
import auth from '../../../firebase.init';
import { onAuthStateChanged } from 'firebase/auth';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPass = e => {
        setPass(e.target.value)
    }

    const { handleLogin, handleSignInWithGoogle, handleSignInWithFacebook, handleSignInWithTwitter } = useFirebase()

    const getCurrentUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate(from, { replace: true });
            }
        });
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }
        setValidated(true);
        handleLogin(auth, email, pass)
        getCurrentUser()
    };
    return (
        <div className='min-vh-100'>
            <section className='text-start w-50 mx-auto my-5'>
                <p className='fs-3 text-center text-primary'>Login here</p>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='border p-5 rounded-3 border-primary'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={getPass} type="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <p><small>Don't have account? <Link to='/registration'>Register</Link></small></p>
                    <Button className='px-4' variant="primary" type="submit">
                        Login
                    </Button>

                    <div className='text-center mt-3'>
                        <img onClick={handleSignInWithFacebook} className='icon' src={FacebookIcon} alt="" />
                        <img onClick={handleSignInWithGoogle} className='icon mx-4' src={GoogleIcon} alt="" />
                        <img onClick={handleSignInWithTwitter} className='icon' src={TwitterIcon} alt="" />
                    </div>

                </Form>
            </section>
        </div>
    );
};

export default Login;