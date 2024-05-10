



const createNav = () => {
const homeButton = document.getElementById('home-nav-button');
const dogManagementButton = document.getElementById('dog-management-nav-button');
const aboutButton = document.getElementById('about-nav-button');

return {homeButton, dogManagementButton, aboutButton};
}

const highlightNavSelection = (element) => {
    element.classList.remove('nav-button');    
    element.classList.add('selected-nav-button'); 
}

const wipeContent = () => {
        let selectedNavButton = document.querySelector('.selected-nav-button');
        if (selectedNavButton === null) {
            return;
        } else {
            selectedNavButton.classList.remove('selected-nav-button');
            selectedNavButton.classList.add('nav-button');
        }
        const contentDiv = document.getElementById('content');
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

export {createNav, highlightNavSelection, wipeContent};

