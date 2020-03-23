import React  from 'react';
import MySidenav2 from './MySidenav2';
function MySidenav1(props) {
    const watch = (onshowTwo, show_Menu) => {
        show_Menu(null, null, 'onshowTwo', null, true);
        if (onshowTwo === true) {
            show_Menu(null, null, 'onshowTwo', 'onshowThree', !onshowTwo);
        }
    };
    const reception = (onshowThree, show_Menu) => {
        show_Menu(null, null, null, 'onshowThree', !onshowThree);
    };
    const { onshowOne, onshowTwo, show_Menu, onshowThree } = props;
    return (
        <>
            <div id={onshowOne === true ? 'mySidenav_1' : ''} className="sidenav_1">
                <ul className={`texted ${onshowTwo === false ? 'texted_1' : ''}`}>
                    <li className={`accordion ${onshowTwo === false ? 'acc_1' : ''}`} onClick={() => watch(onshowTwo, show_Menu)}><span className='watches'>WATCHES</span></li>
                    <samp className={`panel content ${onshowTwo === false ? 'panel_1' : ''}`}>
                        <li onClick={() => reception(onshowThree, show_Menu)} className="content_2 watched">constellation</li>
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
export default React.memo(MySidenav1);