import React from 'react';
import Swiper from 'react-id-swiper';
import { withStyles } from '@material-ui/core/styles';
import 'swiper/css/swiper.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from './styles';
const Background = (props) => {
    const { classes } = props;
    const Params = {
        direction: 'vertical',
        Swiper,
        pagination: {
            el: '.swiper-paginations',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 80000,
            disableOnInteraction: false,
        },
    };
    const Param = {
        Swiper,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 45,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        spaceBetween: 115,
        autoplay: {
            delay: 80000,
            disableOnInteraction: false,
        },
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className={classes.swiper_container_}>
                            <div className="swiper-wrapper">
                                <Swiper {...Params} >
                                    <div className='background_____'>
                                        <div className={classes.text}>
                                            <h1 className={classes.size}>01</h1>
                                            <p className={classes.Discoer}>Discover</p>
                                        </div>
                                    </div>
                                    <div className='background___'>
                                        <div className={classes.text}>
                                            <h1 className={classes.size}>02</h1>
                                            <p className={classes.Discoer_}>scroll down</p>
                                        </div>
                                    </div>
                                    <div className='background____'>
                                        <div className={classes.text}>
                                            <h1 className={classes.size}>03</h1>
                                            <p className={classes.Discoer_}>collection</p>
                                        </div>
                                    </div>
                                    <div className='background__'>
                                        <div className={classes.text}>
                                            <h1 className={classes.size}>04</h1>
                                            <p className={classes.Discoer_}>customerrrr</p>
                                        </div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={classes.swiper_container_}>
                            <div className={classes.swiperWrapper}>
                                <div className={classes.swiperSlide_}>
                                    <div className={classes.shoesdesign}>
                                        <div className={classes.nike}>
                                            <Swiper {...Param} >
                                                <div className={classes.container__}>
                                                    <div className={classes.logoimg}>
                                                        <img className="img-responsive " src="img/Nike.logo.png" alt="" />
                                                    </div>
                                                    <div >
                                                        <p className={classes.text__}><em>Just <br></br> Do <br></br> It</em></p>
                                                    </div>
                                                    <div className="nike-shoes">
                                                        <div className='imgnike'>
                                                            <img className={'img-responsive ' + classes.imgnike_} src="img/nike-shoes.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classes.container}>
                                                    <div className='container_'>
                                                        <div className={classes.logoimg}>
                                                            <img className="img-responsive " src="img/Nike.logo.png" alt="" />
                                                        </div>
                                                        <div >
                                                            <p className={classes.text_}><em>Just <br></br> Do <br></br> It</em></p>
                                                        </div>
                                                        <div className="nike-shoes">
                                                            <div className='img15'>
                                                                <img className={'img-responsive ' + classes.img15_} src="img/img15.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classes.container__}>
                                                    <div className={classes.logoimg}>
                                                        <img className="img-responsive " src="img/Nike.logo.png" alt="" />
                                                    </div>
                                                    <div >
                                                        <p className={classes.text__}><em>Just <br></br> Do <br></br> It</em></p>
                                                    </div>
                                                    <div className="nike-shoes">
                                                        <div className='imgnike'>
                                                            <img className={'img-responsive ' + classes.imgnike_} src="img/nike-shoes.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Swiper>
                                            <div className={classes.icon_}>
                                                <span className='item_'>
                                                    <InstagramIcon className='InstagramIcon'></InstagramIcon>
                                                    <FacebookIcon className='FacebookIcon'></FacebookIcon>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.shoesdesign}>
                                    <div className={classes.left}>
                                        <div className='content'>
                                            <img className='img-responsive' src='img/1.png' alt=''></img>
                                        </div>
                                    </div>
                                    <div className={classes.between}>
                                        <div className='content'>
                                            <img className='img-responsive' src='img/2.png' alt=''></img>
                                        </div>
                                    </div>
                                    <div className={classes.right}>
                                        <div className='content'>
                                            <img className='img-responsive' src='img/3.png' alt=''></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withStyles(styles)(Background);