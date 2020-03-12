import React, { Component } from 'react';
class Login extends Component {
    OnFocusEmail = () => {
        const placeholdertext_1 = document.querySelector(".placeholdertext_1");
        placeholdertext_1.classList.add('placeholdertexts')
    }
    OnblurEmail = () => {
        const input_placeholder_1 = document.querySelector(".inputtext_1")
        const placeholdertext_1 = document.querySelector(".placeholdertext_1");
        if (input_placeholder_1.value === '') {
            placeholdertext_1.classList.remove('placeholdertexts')
        } else {
            placeholdertext_1.classList.add('placeholdertexts')
        }
    }
    OnFocusPass = () => {
        const placeholdertext_2 = document.querySelector(".placeholdertext_2");
        placeholdertext_2.classList.add('placeholdertexts')
    }
    OnblurPass = () => {
        const placeholdertext_2 = document.querySelector(".placeholdertext_2");
        const input_placeholder_2 = document.querySelector(".inputtext_2");
        if (input_placeholder_2.value === '') {
            placeholdertext_2.classList.remove('placeholdertexts')
        }else {
            placeholdertext_2.classList.add('placeholdertexts')
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h4 className="Victorinox">Victorinox</h4><br />
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="accountd">
                                <strong data-bind="i18n: 'I have an account'">I have an account</strong>
                            </h2><br />
                            <form className="form form-login" method>
                                <div className="field email required">
                                    <div className="control">
                                        <input onFocus={() => this.OnFocusEmail()} onBlur={() => this.OnblurEmail()} name="email" id="emails" type="email" className="inputtext_1" />
                                        <label className="placeholdertext_1" htmlFor="email"><span className="bg">Email Address *</span></label>
                                    </div>
                                </div><br /><br />
                                <div className="field password required">
                                    <div className="control">
                                        <input onFocus={() => this.OnFocusPass()} onBlur={() => this.OnblurPass()} name="password" id="passwords" type="password" className="inputtext_2" />
                                        <label className="placeholdertext_2" htmlFor="password"><span className="bg">Password *</span></label>
                                    </div>
                                </div><br />
                                <div>
                                    <a href="chrome-extension://hdokiejnpimakedhajhdlcegeplioahd/tabDialog.html?dialog=loginSimple" className="btn-passwordd">
                                        <span >Forgot Your Password?</span>
                                    </a>
                                </div>
                            </form><br />
                            <button className="bt2 bt btv">login</button>
                            <br />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="account">
                                <strong data-bind="i18n: 'I have an account'">I don't have an account</strong>
                            </h2>
                            <div className="love">
                                <span className="ttv" style={{ textAlign: 'center' }}>.</span>
                                <p>Create account to benefit from<br />our exclusive services and keep<br /> up to date with our latest<br /> publications.<br />Thank's.<br />Hi</p>
                            </div>
                            <br /><br /><br />
                            <div className="Sign">
                                <button className="bt1 bt btv">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;