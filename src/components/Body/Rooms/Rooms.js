import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div className='container'>
            <p className='fs-3 mt-5'>OUR ROOMS AND SUITES</p>
            <section className='row row-cols-2'>
                {
                    rooms.map(room => <Room key={room.id} room={room} />)
                }
            </section>
        </div>
    );
};

export default Rooms;