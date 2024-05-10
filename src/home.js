import './home.css';


export const createHomeDiv = () => {

    const checkForHomeElement = document.querySelector('.home-js-div')
if (checkForHomeElement === null) {

        const homeElement = document.createElement('h2');
        homeElement.textContent = 'Welcome to Dog Days!';
        homeElement.classList.add('home-js-div');
        const body = document.getElementById('content');
        body.appendChild(homeElement);
    } else {
        return;
    }

}