import './libs/sliders';

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

window.addEventListener('DOMContentLoaded', () => {
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


    const siteLanguageSwich = (e) => {
        console.log('swich');
    }

    
});