import './about.css';

export const createAboutDiv = () => {

    const checkForAboutElement = document.querySelector('.about-js-div')
if (checkForAboutElement === null) {

        const aboutHeaderElement = document.createElement('h2');
        aboutHeaderElement.textContent = 'Welcome to Dog Days About Page!';
        aboutHeaderElement.classList.add('about-js-div');
        const body = document.getElementById('content');
        body.appendChild(aboutHeaderElement);

        const aboutBodyElement = document.createElement('p');
        aboutBodyElement.textContent = 'This is a simple website that allows you to manage your dogs. You can add, remove, and edit your dogs. You can also view your dogs in a card format. Enjoy!';
        aboutBodyElement.classList.add('about-body');
        body.appendChild(aboutBodyElement);
    } else {
        return;
    }

}