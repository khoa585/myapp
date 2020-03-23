import React from 'react';
function Modal() {
    console.log('modal');
    return (
        <div id="myModal" className="modal fade" role="dialog">
            <div className="w3-animate-top">
                <div className="modal-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-3 col-lg-2 col-md-2 col-xs-4 menu">
                                <span className="icon"><i className="fa fa-bars" data-dismiss="modal"> MENU</i> </span>
                            </div>
                            <div className="col-sm-6 col-lg-8 col-md-8 col-xs-4">
                                <img className="img-responsive center-block logo-img" src="img/logo.png" alt="logo" />
                            </div>
                            <div className="col-sm-3 col-lg-2 col-md-2 col-xs-4 menu">
                                <span style={{ color: 'black' }}><p className="glyphicon glyphicon-remove remove" data-dismiss="modal" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-12 col-xs-12 col-md-12 col-sm-12 center-block" style={{ textAlign: 'center' }}>
                            <input className="search_ search__" type="text" size={45} placeholder="Search..." />
                            <i className="fa fa-search buttonSize" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default React.memo(Modal);