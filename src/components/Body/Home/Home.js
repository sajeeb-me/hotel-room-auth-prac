import React from 'react';
import BodyCarousel from '../BodyCarousel/BodyCarousel';
import Image1 from '../../../images/image-1.jpg'

const Home = () => {
    return (
        <div>
            <BodyCarousel></BodyCarousel>
            <section>
                <div className='row p-5'>
                    <article className='col text-end my-auto'>
                        <p className='fs-1'>You are always Welcome</p>
                        <p>Experience the top notch service and sophisticated style at the Hotel and Resort, which is conveniently located within 5 minutes distance of International Airport.</p>
                        <button className='btn btn-outline-primary px-5 py-2'>Book now</button>
                    </article>
                    <div className='col'>
                        <img className='rounded-3' src={Image1} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;