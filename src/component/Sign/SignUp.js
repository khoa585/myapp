import React, { Component } from 'react';
class SignUp extends Component {
    OnFocusFname = () => {
        const placeholdertextr_1 = document.querySelector(".placeholdertextr_1");
        placeholdertextr_1.classList.add('placeholdertexts')
    }
    OnblueFname = () => {
        const inputtextr_1 = document.querySelector(".inputtextr_1");
        const placeholdertextr_1 = document.querySelector(".placeholdertextr_1");
        if (inputtextr_1.value === '') {
            placeholdertextr_1.classList.remove('placeholdertexts')
        } else {
            placeholdertextr_1.classList.add('placeholdertexts')
        }
    }
    OnFocusLname = () => {
        const placeholdertextr_2 = document.querySelector(".placeholdertextr_2");
        placeholdertextr_2.classList.add('placeholdertexts')
    }
    OnblueLname = () => {
        const inputtextr_2 = document.querySelector(".inputtextr_2");
        const placeholdertextr_2 = document.querySelector(".placeholdertextr_2");
        if (inputtextr_2.value === '') {
            placeholdertextr_2.classList.remove('placeholdertexts')
        } else {
            placeholdertextr_2.classList.add('placeholdertexts')
        }
    }
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
        } else {
            placeholdertext_2.classList.add('placeholdertexts')
        }
    }
    OnFocusComfirm = () => {
        const placeholdertexted_3 = document.querySelector(".placeholdertexted_3");
        placeholdertexted_3.classList.add('placeholdertexts')
    }
    OnblueLComfirm = () => {
        const input_placeholdered_3 = document.querySelector(".inputtexted_3");
        const placeholdertexted_3 = document.querySelector(".placeholdertexted_3");
        if (input_placeholdered_3.value === '') {
            placeholdertexted_3.classList.remove('placeholdertexts')
        } else {
            placeholdertexted_3.classList.add('placeholdertexts')
        }
    }
    render() {
        return (
            <div className="container">
                <h4 className="Victorinox">sign up</h4><br />
                <div className="control1">
                    <div className="field-name-prefix-item">
                        <input id="prefix-option-mr" name="prefix" className="required-entry" type="radio" data-focus-current="true" data-focus-parent=".field-name-prefix-item" defaultValue="Mr" defaultChecked="checked" data-selector="prefix"  />
                        <label className="labeld" htmlFor="prefix-option-mr">Mr </label>
                    </div>
                    <div className="field-name-prefix-item">
                        <input id="prefix-option-mrs" name="prefix" className="required-entry" type="radio" data-focus-current="true" data-focus-parent=".field-name-prefix-item" defaultValue="Mrs" data-selector="prefix"  />
                        <label className="labeld" htmlFor="prefix-option-mrs">Mrs</label>
                    </div>
                </div><br /><br /><br />
                <form className="form form-login" method="">
                    <div className="field email required">
                        <div className="control">
                            <input onFocus={() => this.OnFocusFname()} onBlur={() => this.OnblueFname()} name="Firstname" id="Firstname" type="text" className="inputtextr_1" />
                            <label className="placeholdertextr_1" htmlFor="Firstname"><span className="bg">First name *</span></label>
                        </div>
                    </div><br /><br />
                    <div className="field password required">
                        <div className="control">
                            <input onFocus={() => this.OnFocusLname()} onBlur={() => this.OnblueLname()} name="Lastname" id="Lastname" type="text" className="inputtextr_2" />
                            <label className="placeholdertextr_2" htmlFor="Lastname"><span className="bg">Last name *</span></label>
                        </div>
                    </div><br /><br />
                    <div className="field password required">
                        <div className="control">
                            <input onFocus={() => this.OnFocusEmail()} onBlur={() => this.OnblurEmail()} name="Email" id="emailed" type="email" className="inputtext_1" />
                            <label className="placeholdertext_1" htmlFor="emailed"><span className="bg">Email *</span></label>
                        </div>
                    </div><br /><br />
                    <div className="field password required">
                        <div className="control">
                            <input onFocus={() => this.OnFocusPass()} onBlur={() => this.OnblurPass()} name="password" id="passworded" type="password" autocomplete="on"  className="inputtext_2" />
                            <label className="placeholdertext_2" htmlFor="password"><span className="bg">Password *</span></label>
                        </div>
                    </div><br /><br />
                    <div className="field password required">
                        <div className="control">
                            <input onFocus={() => this.OnFocusComfirm()} onBlur={() => this.OnblueLComfirm()} name="password" id="Comfirmpassword" autocomplete="off"  type="password" className="inputtexted_3" />
                            <label className="placeholdertexted_3" htmlFor="Comfirmpassword"><span className="bg">Comfirm Password *</span></label>
                        </div>
                    </div><br /><br />
                    <div className="row">
                        <div className="col-lg-4">
                            <select className="dob-day  validate-cdobd" id="dob-day" name="dob-day">
                                <option value="Day">Day</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <select className="dob-month  validate-cdobm" id="dob-month" name="dob-month">
                                <option value>Month</option>
                                <option value={1}>January</option>
                                <option value={2}>Febuary</option>
                                <option value={3}>March</option>
                                <option value={4}>April</option>
                                <option value={5}>May</option>
                                <option value={6}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>August</option>
                                <option value={9}>September</option>
                                <option value={10}>October</option>
                                <option value={11}>November</option>
                                <option value={12}>December</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <select name="year" className="year">
                                <option value="year"> year </option>
                                {this.years()}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
    years = () => {
        for (var i = 1900; i <= 2000; i++) {
            return "<option value=" + i + ">"+i+"</option>"
        }
    }
}

export default SignUp;