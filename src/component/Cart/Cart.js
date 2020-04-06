import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import styles from "./style";
function Cart(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className={classes.col_container}>
                            <div className={classes.shop_Cart}>Shopping Cart</div>
                            <div className={classes.detai_Cart}>
                                <div className={classes.product_}>
                                    <h4>Product</h4>
                                    <div className={classes.img_Name}>
                                        <img src="http://www.thephoblographer.com/wp-content/uploads/2013/03/Chris-Gampat-The-Phoblographer-Fujifilm-X100s-street-photography-images-1-of-12ISO-4001-320-sec-at-f-5.61.jpg" alt="" className="img-responsive" />
                                        <span>Name</span>
                                    </div>
                                </div>
                                <div className={classes.size_}>
                                    <h4>size</h4>
                                    <div className={classes.size__}>
                                        <select className={classes.cars}>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={classes.quantity_}>
                                    <h4>quantity</h4>
                                    <div className={classes.quantity__}>
                                        <button className="plus" type="button" name="button">
                                            +
                                         </button>
                                        <input type="text" name="name" value="1"></input>
                                        <button className="minus" type="button" name="button">
                                            -
                                        </button>
                                    </div>
                                </div>
                                <div className={classes.price_}>
                                    <h4>price</h4>
                                    <div className={classes.price__}>

                                    </div>
                                </div>
                                <div className={classes.sale_}>
                                    <div className={classes.sale__}>d</div>
                                </div>
                                <div className={classes.delete_P}>
                                    <div className={classes.delete_P_}>s</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default withStyles(styles)(Cart);