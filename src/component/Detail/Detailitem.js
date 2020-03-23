import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useSelector, useDispatch } from 'react-redux';
import Item_thumpai from './Item_thumpai';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
const Detailitem = (props) => {
    const [state, setstate] = useState({ menua: false });
    const { classes } = props;
    const Param_ = {
        Swiper,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        grabCursor: true,
        freeMode: true,
        freeModeSticky: true,
        loop: true,
        autoplay: {
            delay: 8000000,
            disableOnInteraction: false,
        },

        height: 50,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
    };
    const handclickDrag = (sta, open) => {
        setstate({
            ...state,
            [sta]: !open,
        });
    };
    const { task } = props;
    const sale = task.sale;
    const productImage = task.productImage;
    const result = productImage.split(/uploads\\/g);
    const tasks = useSelector(state => state.task);
    return (
        <div className="container-fluid">
            <div className="row shopping__card__wrapper">
                <div className="col-lg-1 menucart">
                    <div className="DragHandleIcon">
                        <DragHandleIcon onClick={() => handclickDrag('menua', state.menua)}></DragHandleIcon>
                    </div>
                </div>
                <div className="col-lg-7 shop__layout">
                    <div className="title_">
                        <h2 className={classes.title}><span className={classes.titleF}>discover </span>the best</h2>
                        <div className={classes.thumbnail}>
                            <Swiper {...Param_}>
                                {
                                    tasks.list.map((item) => {
                                        return <div className="swiper-slide">
                                            <Item_thumpai key={item._id} item={item}></Item_thumpai>;
                                            </div>;
                                    })
                                }
                                <div class="swiper-scrollbar"></div>
                            </Swiper>
                            <div className={classes.icon_}>
                                <span className='icon_InFa'>
                                    <InstagramIcon className='InstagramIcon_'></InstagramIcon>
                                    <FacebookIcon className='FacebookIcon_'></FacebookIcon>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`togglemenucart ${state.menua === true ? 'showcart' : ' '}`}>
                    <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
                    </div>
                </div>
                <div className="col-lg-4 shop__product">

                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(Detailitem);