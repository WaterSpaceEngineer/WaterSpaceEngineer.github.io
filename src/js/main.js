import './libs/sliders';

import modals from './modules/modals';
import scrollPage from "./modules/scrollPage";
import resizePage from './modules/resizePage';
import touchSubMenu from './modules/touchSubMenu';
import spollers from './modules/spollers';
import mobileMenu from './modules/mobileMenu';
import dropdownList from './modules/dropdownList';
import accordion from './modules/accordion';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    scrollPage();
    resizePage();
    touchSubMenu('submenu-button', '.submenu-item', '.submenu-item._hover');
    dropdownList();
    spollers();
    mobileMenu('menu-button', '.navigation');
    accordion();
    scrolling('.page-up');
});