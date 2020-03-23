import React , {useCallback} from 'react';
import MySidenav1 from './MySidenav1';
function MySidenav(props) {
    const showCollection = useCallback((show_Menu, onshowOne) => {
        show_Menu(null, 'onshowOne', null, 'onshowThree', !onshowOne);
        if (onshowOne === false) {
            show_Menu(null, 'onshowOne', null, null, !onshowOne);
        }
    });
    const closeMenu = useCallback((show_Menu) => {
        show_Menu('show_Menu', 'onshowOne', null, 'onshowThree', false);
    });
    const hidenMenu = useCallback((show_Menu) => {
        show_Menu('show_Menu', 'onshowOne', null, 'onshowThree', false);
    });
    const { showMenu, show_Menu, onshowOne, onshowTwo, onshowThree } = props;
    return (
        <>
            <div id={showMenu === true ? 'mySidenav' : ''} className="sidenav">
                <div onClick={() => hidenMenu(show_Menu)} className={`bodyMenu ${showMenu === true ? 'showBg' : ''}`} ></div>
                <button onClick={() => closeMenu(show_Menu)} type="button" className="closebtn closes" id="main-menu-close-btn"><span className="closed">Close</span></button>
                <div className="styles">
                    <ul className="text_">
                        <li onClick={() => showCollection(show_Menu, onshowOne)} className="text-align knoted"><strong className="glyphicon glyphicon-dashboard"></strong><br /><span >THE COLLECTION</span><div className="s2015"></div></li>
                        <li className="text-align"><strong className="glyphicon glyphicon-heart-empty"></strong><br /><span >PLANNET LUXURY</span><div className="s2015"></div></li>
                        <li className="text-align"><strong className="glyphicon glyphicon-education"></strong><br /><span>NEWS & STORIES</span><div className="s2015"></div></li>
                        <li className="text-align"><strong className="glyphicon glyphicon-registration-mark"></strong><br /><span>STORE LOCATOR</span><div className="s2015"></div></li>
                        <li className="text-align"><strong className="glyphicon glyphicon-globe"></strong><br /><span>CUSTOMER SERVICE</span><div className="s2015"></div></li>
                        <li className="text-align"><strong className="glyphicon glyphicon-globe"></strong><br /><span>GOOGLE MAP</span></li>
                    </ul>
                </div>
            </div>
            <MySidenav1 onshowOne={onshowOne} onshowThree={onshowThree} onshowTwo={onshowTwo} show_Menu={show_Menu}></MySidenav1>
        </>
    );
}
export default React.memo(MySidenav);