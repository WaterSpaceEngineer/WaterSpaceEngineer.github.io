import './libs/sliders';

// import modals from './modules/modals';
import scrollPage from "./modules/scrollPage";
import resizePage from './modules/resizePage';
import touchSubMenu from './modules/touchSubMenu';
import spollers from './modules/spollers';
import mobileMenu from './modules/mobileMenu';

window.addEventListener('DOMContentLoaded', () => {
    // modals();
    scrollPage();
    resizePage();
    touchSubMenu('submenu-button', '.submenu-item', '.submenu-item._hover');
    touchSubMenu('dropdown__btn', '.dropdown', '.dropdown._hover');
    spollers();
    mobileMenu('menu-button', '.navigation');
});