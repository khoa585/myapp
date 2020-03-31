import React, { useState } from 'react';
import MySidenav from './MySidenav';
import { Link } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Modal from './Modal';
import renderTextField from './../../Form/TextField';
import validate from '../../Form/validate';
import * as authActions from './../../../actions/auth';
function Header(props) {
  const [state, setState] = useState({ show_Menu: false, onshowOne: false, onshowTwo: true, onshowThree: false });
  const [style, setStyle] = useState({ focusBlur: false });
  const showMenu = (side, draw, toy, tydi, open) => {
    setState({ ...state, [side]: open, [draw]: open, [toy]: open, [tydi]: open });
  };
  const submit = (validate) => {
    if (validate) {
      const { username, password } = validate;
      const { authActions } = props;
      const { login } = authActions;
      login(username, password);
    }
  };
  const onFocus = () => {
    setStyle({
      ...style,
      focusBlur: true
    });
  };
  const onBlur = () => {
    setStyle({
      ...style,
      focusBlur: false
    });
  };
  const { handleSubmit } = props;
  return (
    <div>
      <div className="container-fluid header__">
        <div className="row header___">
          <div className="col-sm-3 col-lg-2 col-md-2 col-xs-4 header ">
            <a onClick={() => showMenu('show_Menu', null, null, null, true)} href="#" className="icon knot"><i className="fa fa-bars"> menu</i> </a>
          </div>
          <div className="col-sm-6 col-lg-8 col-md-8 col-xs-4">
            <Link to='/'><img className="img-responsive center-block logo" src="img/logo.png" alt="logo" /></Link>
          </div>
          <div className="col-sm-3 col-lg-2 col-md-2 col-xs-4 header">
            <div className="container_item">
              <div className="nav-item">
                <Link to="/Login" className="LB">LB</Link>
                <div className="item">
                  <div className={`list__wrapper + ${style.focusBlur === true ? 'list_wrapper' : ''}`}>
                    <div className="list__item">
                      <div className="row">
                        <div className="col-lg-6 form_s">
                          <div>
                            <h2 className="account-block-title" style={{ fontSize: '16px' }}>
                              <strong data-bind="i18n: 'I have an account'">I have an account</strong>
                            </h2><br />
                            <form onSubmit={handleSubmit(submit)} className="form form-login">
                              <div className="field email required">
                                <div className="control">
                                  <Field
                                    id="text"
                                    name="username"
                                    type="text"
                                    component={renderTextField}
                                    label="Email Address *"
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    variant="outlined" />
                                </div>
                              </div><br />
                              <div className="field password required">
                                <div className="control">
                                  <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    component={renderTextField}
                                    label="Password *"
                                    variant="outlined" />
                                </div>
                              </div>
                              <div>
                                <a className="btn-password">
                                  <span>Forgot Your Password?</span>
                                </a>
                              </div><br />
                              <div>
                                <button type='submit' className="bt btv">login</button>
                              </div>
                            </form>
                            <br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <h2 className="account-block-title" style={{ fontSize: '16px' }}>
                            <strong data-bind="i18n: 'I have an account'">I don't have an account</strong>
                          </h2>
                          <span className="ttv" style={{ textAlign: 'center' }}>.</span>
                          <div>
                            <p>Create account to benefit from our exclusive services and keep up to date with our latest publications.<br />Thank's.<br />Hi</p>
                          </div>
                          <br />
                          <div className="Sign">
                            <Link to='/Sign'><button className="bt btv">Sign Up</button></Link>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-item ">
                <span ><i className="glyphicon glyphicon-shopping-cart" /> </span>
              </div>
              <div className="nav-item ">
                <span ><i className="fa fa-search" data-toggle="modal" data-target="#myModal" /> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MySidenav showMenu={state.show_Menu} onshowThree={state.onshowThree} onshowTwo={state.onshowTwo} onshowOne={state.onshowOne} show_Menu={showMenu}></MySidenav>
      <Modal></Modal>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    fr: state.form
  };
};
const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
});
const withconnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const ContactForm = reduxForm({
  form: 'fieldLevelValidation',
  validate,
});
export default compose(withconnect, ContactForm)(React.memo(Header));
