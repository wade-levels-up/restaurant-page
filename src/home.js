import pizzaLoungImg from '../assets/aldward-castillo-Lys3krd8jck-unsplash.jpg';

export function home() {

    const mainContent = document.querySelector('#content');

    const homeContent = document.createElement('div');
    homeContent.classList.add('container');

    const title = document.createElement('h2');
    title.textContent = "Home";
    const welcome = document.createElement('p');
    welcome.textContent = `Welcome to Luigi's Pizza Lounge! The best pizza lounge in all of Nutropolis. Please see our menu and about tabs for more information`;
    const image = document.createElement('img');
    image.src = pizzaLoungImg;
    image.alt = `Luigi's pizza lounge, a warmly lit long room aligned with chairs and tables`;
    const credit = document.createElement('a');
    credit.classList.add('credit');
    credit.href = "https://unsplash.com/@aldwardcv31?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
    credit.textContent = `Photo by Aldward Castillo on Unsplash`;

    homeContent.appendChild(title);
    homeContent.appendChild(welcome);
    homeContent.appendChild(image);
    homeContent.appendChild(credit);
    mainContent.appendChild(homeContent)
}