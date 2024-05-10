import './stylesheet.css';
import { createHomeDiv } from './home.js';
import { createNav, highlightNavSelection, wipeContent } from './navSetup';
import { createAboutDiv } from './about';
import {Dog, dogHouse, dogCardManagement, domElements} from './scriptsRefactored.js';
import {createDogManagementDiv} from './dogManagement.js';

console.log("NPM Is Working!")



const manageNavButtons = () => {

    const {homeButton, dogManagementButton, aboutButton} = createNav();

    homeButton.addEventListener('click', () => {
        wipeContent();
        createHomeDiv();
        highlightNavSelection(homeButton);
    }
    );

    dogManagementButton.addEventListener('click', () => {
        wipeContent();
        createDogManagementDiv();
        highlightNavSelection(dogManagementButton);
    }
    );

    aboutButton.addEventListener('click', () => {
        wipeContent();
        createAboutDiv();
        highlightNavSelection(aboutButton);
    }
    );
};


manageNavButtons();

