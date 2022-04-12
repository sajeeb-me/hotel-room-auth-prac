import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container className='navbar'>
                    <Link to='/'><h4>Hoteeel</h4></Link>
                    <Nav className="mx-auto">
                        <Link to="/">Home</Link>
                        <Link to="/rooms">Rooms</Link>
                        <Link to="/login">Login</Link>
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