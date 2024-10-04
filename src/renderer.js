import { home } from "./home";

export const initLoad = (function() {
    window.addEventListener('DOMContentLoaded', home());
})();