import './libs/sliders';

import modals from './modules/modals';
import scrollPage from "./modules/scrollPage";
import resizePage from './modules/resizePage';
// import touchSubMenu from './modules/touchSubMenu';
import touchSubMenuAll from './modules/touchSubMenuAll';
import spollers from './modules/spollers';
import mobileMenu from './modules/mobileMenu';
import dropdownList from './modules/dropdownList';
import playVideo from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    scrollPage();
    resizePage();
    // touchSubMenu('submenu-button', '.submenu-item', '.submenu-item._hover');
    touchSubMenuAll();
    dropdownList();
    spollers();
    mobileMenu('menu-button', '.navigation');
    playVideo('.silencers-play');
    playVideo('.travel-filter-play');
});