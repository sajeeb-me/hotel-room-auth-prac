import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image1 from '../../../images/carousel-1.jpg'
import Image2 from '../../../images/carousel-2.jpg'
import Image3 from '../../../images/carousel-3.jpg'

const BodyCarousel = () => {
    return (
        <div>
            <section>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    );
};

export default BodyCarousel;