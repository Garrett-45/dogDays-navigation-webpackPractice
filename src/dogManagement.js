import { dogCardManagement, dogHouse } from "./scriptsRefactored";


export const createDogManagementDiv = () => {
    const checkForDogManagementElement = document.querySelector('.dog-add-remove-area')

    if (checkForDogManagementElement === null) {
        const dogManagementDiv = document.createElement('div');
        dogManagementDiv.id = 'dog-add-remove-area';
        dogManagementDiv.classList.add('dog-add-remove-area');
        const body = document.getElementById('content');
        
        const dogAddButton = document.createElement('button');
        dogAddButton.id = 'dog-add-btn';
        dogAddButton.textContent = 'Add Dog';
        dogAddButton.classList.add('dog-add-btn');
        dogManagementDiv.appendChild(dogAddButton);
        body.appendChild(dogManagementDiv);
    } else {
        return;
    }

}

