import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useSelector, useDispatch } from "react-redux";
import Item_thumpai from "./Item_thumpai";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
const Detailitem = props => {
  const [state, setstate] = useState({ menua: false });
  const [activeC, setActiveC] = useState({ color: "blue", bgImgage: "0" });
  const { classes, task } = props;
  let colors = ["blue", "green", "yellow"];
  const tasks = useSelector(state => state.task);
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
      disableOnInteraction: false
    },
    height: 50,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true
    }
  };
  const Paramc = {
    direction: "vertical",
    Swiper,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next" + ".btN",
      prevEl: ".swiper-button-prev" + ".btP"
    },
    autoplay: {
      delay: 80000,
      disableOnInteraction: false
    }
  };
  const handclickDrag = (sta, open) => {
    setstate({
      ...state,
      [sta]: !open
    });
  };
  const showcolor = (color) => {
    return {
      backgroundColor: color
    };
  };
  const active_color = (color,key) => {
    setActiveC({ color: color, bgImgage: key });
  };
  const showbg = (bg) => {
    return {
      backgroundImage: `url(https://apiproductjs.herokuapp.com/${bg})`,
    };
  };
  console.log(task.productImage)
  return (
    <div className="container-fluid">
      <div className="row shopping__card__wrapper">
        <div className="col-lg-1 menucart">
          <div className="DragHandleIcon">
            <DragHandleIcon
              onClick={() => handclickDrag("menua", state.menua)}
            ></DragHandleIcon>
          </div>
        </div>
        <div className="col-lg-7 shop__layout">
          <div className="title_">
            <h2 className={classes.title}>
              <span className={classes.titleF}>discover </span>the best
            </h2>
            <div className={classes.thumbnail}>
              <Swiper {...Param_}>
                {tasks.list.map(item => {
                  return (
                    <div className="swiper-slide">
                      <Item_thumpai key={item._id} item={item}></Item_thumpai>;
                    </div>
                  );
                })}
                <div className="swiper-scrollbar"></div>
              </Swiper>
              <div className={classes.icon_}>
                <span className="icon_InFa">
                  <InstagramIcon className="InstagramIcon_"></InstagramIcon>
                  <FacebookIcon className="FacebookIcon_"></FacebookIcon>
                </span>
              </div>
            </div>
          </div>
          <div
            className={`togglemenucart ${
              state.menua === true ? "showcart" : "closeShowcart"
              }`}
          >
            <div className="swiper-wrapper">
              <Swiper {...Paramc}>
                <div className="swiper-slide">
                  <div className={classes.contaiC}>
                    <div className={classes.note}>
                      <h3 className={classes.titleC}>
                        <span className={classes.titlecart}>black</span>sort
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className={classes.contaiC}>
                    <div className={classes.note}>
                      <h3 className={classes.titleC}>
                        <span className={classes.titlecart}>black</span>sort
                      </h3>
                    </div>
                  </div>
                </div>
              </Swiper>
              <div className={classes.New}></div>
              <div className={classes.back}>
                <KeyboardArrowLeftIcon
                  className={classes.KeyboardArrowLeftIcon}
                ></KeyboardArrowLeftIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 shop__product">
          <div className={classes.highP}></div>
          <div className={classes.context_P}>
            <div className="product-card">
              {
                task.productImage.map((index, key) => {
                  if (parseInt(activeC.bgImgage,10) === key) {
                    return <div key={key} className="product-pic"><img style={{transition: '.6s linear'}} className="img-responsive" src={`https://apiproductjs.herokuapp.com/${index}`}/></div>;
                  }
                })
              }
              <div className="product-colors">
                {
                  colors.map((c,key) => {
                    return <><span
                      style={showcolor(c)}
                      className={activeC.color === c ? "active" : ""}
                      onClick={() => active_color(c,key)}
                      key={key}
                    ></span><br></br></>;
                  })
                }
              </div>
            </div>
            <div className="infP">
              <h3>{task.name}</h3>
              <span>{task.price}</span>
              <span>{task.description}</span><br />
              <span>quantity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(React.memo(Detailitem));
