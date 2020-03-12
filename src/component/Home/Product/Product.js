import React, { Component } from 'react';
import Products from './Products';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as taskActions from './../../../actions/index';
class Product extends Component {
  componentDidMount() {
    const { taskActions } = this.props;
    const { actFetchProducts } = taskActions;
    actFetchProducts();
  };
  render() {
    const { products } = this.props;
    return (
      <div className='container row-locations-mansory gray-bg'>
        <div className='seamaster' id='seamaster'>
          <h5 className='textSenma'>SEAMASTER DIVER 300M<br />COLLECTION</h5>
          <p className='Discover_'>Discover the new look of an VICTORINOX icon! 25 years after the first Seamaster Diver 300M, the collection<br />has been beautifully updated from the inside out.</p><br />
          <a href='#product'><button className='btn_ btn_a center-block'>Discover the collection</button></a>
        </div><br /><br />
        <div id='product' className='container'>
          <div className='row'>
            {this.ShowProduct(products)}
          </div>
        </div>
      </div>
    );
  }
  ShowProduct = (e) => {
    var result = null;
    if (e.length > 0) {
      result = e.slice(0, 6).map((item, index) => {
        return <Products pid={item._id} img={item.img} star={item.start} key={index} sale={item.sale} name={item.name} price={item.price}></Products>;
      });
    }
    return result;
  }
}
const mapStateToProps = state => {
  return {
    products : state.task.list,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch)
  };
};
const withconnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withconnect)(Product);