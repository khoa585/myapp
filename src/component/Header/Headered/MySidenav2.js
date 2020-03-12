import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MySidenav2 extends Component {
    render() {
        const { onshowThree } = this.props;
        return (
            <div id={onshowThree === true ? 'mySidenav_Two' : ''} className="sidenav_Two">
                <div className="row class">
                    <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                        <img className="img-responsive center-block" src="img/img15.png " alt="ad" />
                        <p className="cen">Globemaster</p>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                        <img className="img-responsive center-block" src="img/img15.png" alt="ad" />
                        <p className="cen">Constellation</p>
                    </div>
                </div>
                <div className="contsainer">
                    <Link to="/ProductItem"><button className="btn btn1">See all the Constellation</button></Link>
                </div>
            </div>
        );
    }
}
export default MySidenav2;