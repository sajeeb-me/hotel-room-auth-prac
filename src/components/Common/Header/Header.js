import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, setUser] = useState('');
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        }
        else {
            setUser('')
        }
    });

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container className='navbar'>
                    <Link to='/'><h4>Hoteeel</h4></Link>
                    <Nav className="mx-auto">
                        <Link to="/">Home</Link>
                        <Link to="/rooms">Rooms</Link>
                        {
                            user ?
                                <p onClick={handleLogout} className='text-white logout m-0'>Logout</p>
                                :
                                <Link to="/login">Login</Link>
                        }
                    </Nav>
                    <div>
                        <button className='btn btn-outline-warning'>Book now</button>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;