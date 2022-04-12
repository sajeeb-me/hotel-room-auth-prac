import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <p className='bg-primary text-white py-2'><small>Copyright &copy; {year}</small></p>
        </div>
    );
};

export default Footer;