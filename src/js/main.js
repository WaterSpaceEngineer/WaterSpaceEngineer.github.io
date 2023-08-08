import './libs/sliders';

import setCurrentYear from './modules/setCurrentYear';
import languageSwitchingBtns from './modules/languageSwitchingBtns';
import modals from './modules/modals';
import scrollPage from "./modules/scrollPage";
import resizePage from './modules/resizePage';
import touchSubMenu from './modules/touchSubMenu';
import spollers from './modules/spollers';
import mobileMenu from './modules/mobileMenu';
import dropdownList from './modules/dropdownList';
import accordion from './modules/accordion';
import scrolling from './modules/scrolling';
import submitForm from './modules/submitForm';
import clickOnHash from './modules/clickOnHash';
import playVideos from './modules/playVideos';
import filterVideo from './modules/filterVideo';
import renderPrices from './modules/renderPrices';

window.addEventListener('DOMContentLoaded', () => {

    setCurrentYear();
    languageSwitchingBtns();
    modals();
    scrollPage();
    resizePage();
    touchSubMenu('submenu-button', '.submenu-item', '.submenu-item._hover');
    dropdownList();
    spollers();
    mobileMenu('menu-button', '.navigation');
    accordion();
    scrolling('.page-up');
    submitForm();
    clickOnHash();
    filterVideo();
    playVideos('[data-video-trigger]');
    renderPrices();
});