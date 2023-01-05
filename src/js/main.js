import './libs/sliders';

import modals from './modules/modals';
import headerTopFixation from "./modules/headerTopFixation";
import touchSubMenu from './modules/touchSubMenu';
import spollers from './modules/spollers';
import mobileMenu from './modules/mobileMenu';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    headerTopFixation('.header', '.header__container', '.header-main', '.page');
    touchSubMenu();
    spollers();
    mobileMenu('menu-button', '.navigation');
});