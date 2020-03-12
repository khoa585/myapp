import React, { Component } from 'react';
class Detailitem extends Component {
    showsale = (sale) => {
        if (sale === true) {
            return <span><i className="far fa-check-circle" /></span>;
        } else {
            return <span><i style={{ color: '#b50000' }} class="far fa-times-circle"></i></span>;
        }
    }
    formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
    render() {
        const { task } = this.props;
        const sale = task.sale;
        const productImage = task.productImage;
        console.log(productImage);
        return (
            <>
                <section className="shop__item">
                    <div className="container px-0">
                        <div className="row">
                            <div className="col-md-6 item__image pl-0">
                                <div className="product__image ml-auto">
                                    <img className="img-responsive" src="img/img15.png" alt="cabbage" />
                                    <div className="products__sale">
                                        <span className="onsale">HOT</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 item__content">
                                <div className="item__info">
                                    <div className="rating">
                                        <span>
                                            <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                                            <i className="fas fa-star" /><i className="fas fa-star-half-alt" /></span>
                                        <a href="/#"><i className="fas fa-pencil-alt" /> 3 Reviews</a>
                                    </div>
                                    <p>Description: {task.description}</p>
                                    <p>Name: {task.name} </p>
                                    <div className="meta">
                                        <span className="stock">Sale : {this.showsale(sale)}</span>                                    </div>
                                </div>
                                <hr />
                                <div className="price">
                                    <h2 className="price">$ {this.formatNumber(task.price)}</h2>
                                </div>
                                <div className="add__cart d-flex align-items-center">
                                    <button className="btnAdd"><i className="fas fa-shopping-cart" /> ADD TO CART</button>
                                    <div className="extra">
                                        <a href="/#"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="extra">
                                        <a href="/#"><i className="fas fa-sync-alt" /></a>
                                    </div>
                                    <div className="extra">
                                        <a href="/#"><i className="far fa-envelope" /></a>
                                    </div>
                                </div>
                                <hr />
                                <div className="meta__link">
                                    <div className="cats__link">
                                        <span>Categories:</span><span className="cats__link"><a href="/#"> Veggies</a></span>
                                    </div>
                                    <ul className="meta__social">
                                        <li className="twitter ticon">
                                            <a href="/#" target="_blank"><i className="fab fa-twitter" />  Tweet</a>
                                        </li>
                                        <li className="facebook ticon">
                                            <a href="/#" target="_blank"><i className="fab fa-facebook-f" />  Share</a>
                                        </li>
                                        <li className="google-plus ticon">
                                            <a href="/#" target="_blank"><i className="fab fa-google-plus-g" />  Google+</a>
                                        </li>
                                        <li className="pinterest ticon">
                                            <a href="/#" target="_blank"><i className="fab fa-pinterest" />  Pinterest</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Detailitem;