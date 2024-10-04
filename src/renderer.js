import { renderAbout } from "./about";
import { renderHome } from "./home";

const navBtns = Array.from(document.querySelectorAll('.navButton'));
const [homeBtn, menuBtn, aboutBtn] = navBtns;

export const initLoad = (function() {
    window.addEventListener('DOMContentLoaded', renderHome());
})();

homeBtn.addEventListener('click', renderHome);

menuBtn.addEventListener('click', ()=>{
    alert('I am the menu button!');
})

aboutBtn.addEventListener('click', renderAbout);