import React from 'react';
import './Room.css'

const Room = ({ room }) => {
    const { roomName, aboutRoom, img } = room
    return (
        <div className='col text-start p-4'>
            <img className='img-fluid w-full' src={img} alt="" />
            <p className='fs-3 roomName mt-2'>{roomName}</p>
            <p>{aboutRoom}</p>
            <button className='btn btn-outline-primary px-4'>Book now</button>
        </div>
    );
};

export default Room;