import { renderAbout } from "./about";
import { renderHome } from "./home";
import { renderMenu } from "./menu";

const navBtns = Array.from(document.querySelectorAll('.navButton'));
const [homeBtn, menuBtn, aboutBtn] = navBtns;

export const initLoad = (function() {
    window.addEventListener('DOMContentLoaded', renderHome());
})();

homeBtn.addEventListener('click', renderHome);

menuBtn.addEventListener('click', renderMenu);

aboutBtn.addEventListener('click', renderAbout);