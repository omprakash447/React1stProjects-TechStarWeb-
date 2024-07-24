import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Services() {
    return (
        <div id='services'>
            <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            >
                <div>
                    <img src="https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png" alt="" />
                    <p className='legend'>Full stact</p>
                </div>
                <div>
                    <img src="https://www.ntechglobalsolutions.com/assets/images/course-img/full-stack-development-course.webp" alt="" />
                    <p className='legend'>Pree to pree tack services</p>
                </div>
            </Carousel>

        </div>
    )
}

export default Services;
