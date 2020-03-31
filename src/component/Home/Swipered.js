import React, { useEffect, useState, useCallback } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
const Swipered = () => {
    const [swiper, updateSwiper] = useState(null);
    const [currentIndex, updateCurrentIndex] = useState(0);
    const params = {
        Swiper,
        initialSlide: 3,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl:  '.swiper-button-next' + '.swiperB',
            prevEl: '.swiper-button-prev' + '.swiperB',
        },
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        getSwiper: updateSwiper
    };
    const updateIndex = useCallback(() => updateCurrentIndex(1 + swiper.realIndex));
    useEffect(() => {

        if (swiper !== null) {
            swiper.on('slideChange', updateIndex);
        }
        return () => {
            if (swiper !== null) {
                swiper.off('slideChange', updateIndex);
            }
        };
        
    }, [swiper]);
    return (
        <>
            <div className="container">
                <Swiper {...params} >
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                </Swiper>
            </div>
            <div>
                {currentIndex}
            </div>
        </>
    );
};
export default Swipered;

