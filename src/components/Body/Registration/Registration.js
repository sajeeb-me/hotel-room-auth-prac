import React, { useState } from 'react';
import './Registration.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FacebookIcon from '../../../icons/facebook.png'
import GoogleIcon from '../../../icons/google.png'
import TwitterIcon from '../../../icons/twitter.png'
import useFirebase from '../../../hooks/useFirebase';


const Registration = () => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const getName = e => {
        setName(e.target.value)
    }
    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPass = e => {
        setPass(e.target.value)
    }
    const getConfirmPass = e => {
        setConfirmPass(e.target.value)
    }

    const { handleSignInWithGoogle, handleSignInWithFacebook } = useFirebase()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        setValidated(true);
    };
    return (
        <div className='min-vh-100'>
            <section className='text-start w-50 mx-auto my-5'>
                <p className='fs-3 text-center text-primary'>Register here</p>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='border p-5 rounded-3 border-primary'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control onBlur={getName} type="text" placeholder="Full name" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide your full name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={getPass} type="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control onBlur={getConfirmPass} type="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <p><small>Already have account? <Link to='/login'>login</Link></small></p>
                    <Button className='px-4' variant="primary" type="submit">
                        Submit
                    </Button>

                    <div className='text-center mt-3'>
                        <img onClick={handleSignInWithFacebook} className='icon' src={FacebookIcon} alt="" />
                        <img onClick={handleSignInWithGoogle} className='icon mx-4' src={GoogleIcon} alt="" />
                        <img className='icon' src={TwitterIcon} alt="" />
                    </div>

                </Form>
            </section>
        </div>
    );
};

export default Registration;