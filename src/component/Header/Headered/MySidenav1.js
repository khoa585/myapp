import React, { Component } from 'react';
import MySidenav2 from './MySidenav2';
class MySidenav1 extends Component {
    watch = (onshowTwo, show_Menu) => {
        show_Menu(null, null, 'onshowTwo', null, true);
        if (onshowTwo === true) {
            show_Menu(null, null, 'onshowTwo', 'onshowThree', !onshowTwo);
        }
    }
    reception = (onshowThree, show_Menu) => {
        show_Menu(null, null, null, 'onshowThree', !onshowThree);
    }
    render() {
        const { onshowOne, onshowTwo, show_Menu, onshowThree } = this.props;
        return (
            <>
                <div id={onshowOne === true ? 'mySidenav_1' : ''} className="sidenav_1">
                    <ul className={`texted ${onshowTwo === false ? 'texted_1' : ''}`}>
                        <li className={`accordion ${onshowTwo === false ? 'acc_1' : ''}`} onClick={() => this.watch(onshowTwo, show_Menu)}><span className='watches'>WATCHES</span></li>
                        <samp className={`panel content ${onshowTwo === false ? 'panel_1' : ''}`}>
                            <li onClick={() => this.reception(onshowThree, show_Menu)} className="content_2 watched">constellation</li>
                            <li className="content_2">seamaster</li>
                            <li className="content_2">speedmaster</li>
                            <li className="content_2">deville</li>
                            <li className="content_2">specialities</li>
                            <li className="content_2 colore">Watch Finder</li>
                        </samp>
                        <li className="content_1">Nato Straps</li>
                        <li className="content_1">Fine jewellery</li>
                        <li className="content_1">Ladymatic</li>
                    </ul>
                </div >
                <MySidenav2 onshowThree={onshowThree}></MySidenav2>
            </>
        );
    }
}

export default MySidenav1;