import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import * as productActions from './../../actions/index';
import { connect } from 'react-redux';
import Detailitem from './Detailitem';
import Discount from '../Home/Discount';
class Detail extends Component {
    componentDidMount() {
        const { productActions } = this.props;
        const { actFetchProducts } = productActions;
        actFetchProducts();
    }
    showdetail = (product) => {
        const pd_id = this.props.match.params.id;
        var result = null;
        if (product.length > 0) {
            result = product.map((task) => {
                if (pd_id === task._id) {
                    return <Detailitem key={task._id} task={task}></Detailitem>;
                }
            });
        }
        return result;
    }
    render() {
        const { products } = this.props;
        return (
            <>
                <Discount></Discount>
                {this.showdetail(products)}
                <Discount></Discount>
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.task.list,
        fr: state.form
    };
};
const mapDispatchToProps = dispatch => {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    };
};
const withconnect = connect(
    mapStateToProps,
    mapDispatchToProps
);
export default compose(withconnect)(Detail);