import React, { Component } from 'react';
import Stream from './Stream';
import Discount from './Discount';
import Manhattan from './Manhattan';
import Swipered from './Swipered';
import Bg from './Bg';
import Authenticity from './Authenticity';
import Product from './Product/Product';
import Background from './Background';
class Home extends Component {
    render() {
        return (
            <div>
                <Background></Background>
                <Stream></Stream>
                <Discount></Discount>
                <Product></Product>
                <Discount></Discount>
                <Bg></Bg>
                <Discount></Discount>
                <Authenticity></Authenticity>
                <Discount></Discount>
                <Manhattan></Manhattan>
                <Discount></Discount>
                <Swipered></Swipered>
                <Discount></Discount>
            </div>
        );
    }
}
export default Home;