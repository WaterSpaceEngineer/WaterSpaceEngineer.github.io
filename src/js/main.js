import './libs/sliders';

import modals from './modules/modals';
import navigationFixation from "./modules/navigationFixation";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    navigationFixation('.header', '.header__container');
});