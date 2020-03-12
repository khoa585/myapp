import React, { useEffect, useState, useCallback } from 'react';
import Swiper from 'react-id-swiper';
import { withStyles } from '@material-ui/core/styles';
import 'swiper/css/swiper.css';
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
            delay: 200000000,
            disableOnInteraction: false,
        },
    };
    const param = {
        Swiper,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 200000000,
            disableOnInteraction: false,
        },
    };
    return (
        <>
            <div className="container-fluid">
                <div class="row">
                    <div className="col-lg-6">
                        <div class={classes.swiper_container_}>
                            <div class="swiper-wrapper">
                                <Swiper {...Params} >
                                    <div className={classes.background_____}>
                                        <div className={classes.text}>
                                            <h1 className={classes.size}>01</h1>
                                            <p className={classes.Discoer}>Discover</p>
                                        </div>
                                    </div>
                                    <div className={classes.background___}>
                                        <div className={classes.text}>
                                            <h1 className={classes.size}>02</h1>
                                            <p className={classes.Discoer_}>scroll down</p>
                                        </div>
                                    </div>
                                    <div className={classes.background____}>
                                        <div className={classes.text}>
                                            <h1 className={classes.size}>03</h1>
                                            <p className={classes.Discoer_}>collection</p>
                                        </div>
                                    </div>
                                    <div className={classes.background__}>
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
                        <div className="background_">
                            <div class="swiper-wrapper">
                                <Swiper {...param} >
                                    <div className="swiper-slide background_"><img className="img-responsive" src="https://file.hstatic.net/1000208927/file/bang-xep-hang-cac-phien-ban-air-jordan-1-tren-background-story-p-1-1.jpg" alt=" " /></div>
                                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                                    <div className="swiper-slide"><img className="img-responsive border" src="img/img15.png" alt=" " /></div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withStyles(styles)(Background);