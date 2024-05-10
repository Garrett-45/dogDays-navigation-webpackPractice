//******************************* Module for Dog Object *******************************


export class Dog {
    
    #today;
    #birthday

    #birthdayDay;

    #birthdayMonth;
    #todayMonth;

    #birthdayYear;
    #todayYear;

    #yearsOld;
    #monthsOld;

    #calculatedAgeInMonths;

    #calculatedYears;
    #calculatedMonths;
    
    constructor(name, birthday, breed, notes, inhouseStatus) {
        this.Name = name;
        this.#birthday = new Date(birthday)
        this.Breed = breed;
        this.Notes = notes;
        this["Current in the house?"] = inhouseStatus;
        // this.Birthday = this.displayBirthday()

    }

          

   get Age() {
        this.#today = new Date();

        this.#birthdayYear = this.#birthday.getFullYear();
        this.#todayYear = this.#today.getFullYear();

        this.#birthdayMonth = this.#birthday.getMonth();
        this.#todayMonth = this.#today.getMonth();

        this.#yearsOld = this.#todayYear - this.#birthdayYear;
        this.#monthsOld = this.#todayMonth - this.#birthdayMonth;

        this.#calculatedAgeInMonths = (this.#todayYear - this.#birthdayYear) * 12 + (this.#monthsOld);

        this.#calculatedYears = Math.floor(this.#calculatedAgeInMonths / 12);
        this.#calculatedMonths = Math.floor(this.#calculatedAgeInMonths - (this.#calculatedYears * 12));

        this.#birthdayDay = this.#birthday.getDate();
        
        return `${this.#calculatedYears} years and ${this.#calculatedMonths} months old`
    }

    get Birthday() {
        return `${this.#birthdayMonth}-${this.#birthdayDay}-${this.#birthdayYear}`
    }


}


// ******************************Module for tracking dogs in the house***************************

const dogHouse = (function() {
    let dogsInHouse = []

    const getDogsInHouse = () => dogsInHouse

    return {getDogsInHouse}

})

// ******************************Module for dog card management***************************

const dogCardManagement = (function() {
 
    let dogIndex = ''

    const makeCard = function(currentDogInArray, index) {
        // build the card, set the data-index attribute, and add the remove button
        const newDogCard = document.createElement('div')
        newDogCard.classList.add("summary-cards")
        newDogCard.setAttribute('data-index', index)

        const removeDogbtn = document.createElement('button')
        removeDogbtn.setAttribute('data-index', index)
        removeDogbtn.setAttribute('class', 'dog-remove-btn')
        removeDogbtn.textContent = "Remove Dog"

        const dogGuestStatus = document.createElement('button')
        dogGuestStatus.setAttribute('data-index', index)
        dogGuestStatus.setAttribute('class', 'dog-guest-status')
        dogGuestStatus.textContent = "Change guest status"

        // create the card content
        
        for (let property in currentDogInArray) {
            let listItem = document.createElement('li')
            listItem.textContent = `${property}: ${currentDogInArray[property]}`
            newDogCard.appendChild(listItem)
        }

        let listItem = document.createElement('li')
        listItem.textContent = `Age: ${currentDogInArray.Age}`
        newDogCard.appendChild(listItem)

        listItem = document.createElement('li')
        listItem.textContent = `Birthday: ${currentDogInArray.Birthday}`
        newDogCard.appendChild(listItem)
        
        newDogCard.appendChild(removeDogbtn)
        newDogCard.appendChild(dogGuestStatus)
        domElements.cardArea.appendChild(newDogCard)
    
        removeDogbtn.addEventListener('click', dogCardManagement.showDogRemovalConfirmation)
        dogGuestStatus.addEventListener('click', dogCardManagement.changeDogGuestStatus)
    }

    const refreshCards = function() {
        while (domElements.cardArea.firstChild) {
            domElements.cardArea.removeChild(domElements.cardArea.firstChild)
        }
    }

    const displayDogs = function() {
        let currentDogforCard = ''
        
        for (let i = 0; i < dogHouse.getDogsInHouse().length; i++) {
            currentDogforCard = dogHouse.getDogsInHouse()[i]
            dogCardManagement.makeCard(currentDogforCard, i)
        }
    }

    const removeDogClickHandler = function() {
        const confirmed = window.confirm("Are you sure you want to remove this dog?")

        if (confirmed) {
            dogIndex = this.getAttribute('data-index')
            dogHouse.getDogsInHouse().splice(dogIndex, 1)
            dogCardManagement.refreshCards()
            dogCardManagement.displayDogs()
        }
    }

    const showDogRemovalConfirmation = function() {
        domElements.dogRemovalDialogEl.showModal()
        domElements.dogRemovalDialogYesBtn.setAttribute('data-index', this.getAttribute('data-index'))
        domElements.dogRemovalDialogYesBtn.addEventListener('click', handleDogRemovalConfirmation)
        domElements.dogRemovalDialogNoBtn.addEventListener('click', handleDogRemovalNotConfirmed)
    }

    const handleDogRemovalConfirmation = function() {
        dogIndex = this.getAttribute('data-index')
        dogHouse.getDogsInHouse().splice(dogIndex, 1)
        domElements.dogRemovalDialogEl.close()
        dogCardManagement.refreshCards()
        dogCardManagement.displayDogs()
    }

    const handleDogRemovalNotConfirmed = function() {
        domElements.dogRemovalDialogEl.close()
    }

    const changeDogGuestStatus = function() {
        dogIndex = this.getAttribute('data-index')
        let currentDog = dogCardManagement.ourDogs[dogIndex]

        if (currentDog.inhouseStatus === "Currently a guest") {
            currentDog.inhouseStatus = "Not currently a guest"
            dogCardManagement.refreshCards()
            dogCardManagement.displayDogs()
        }
    }

    return {
        refreshCards,
        displayDogs,
        removeDogClickHandler,
        showDogRemovalConfirmation,
        handleDogRemovalConfirmation,
        handleDogRemovalNotConfirmed,
        changeDogGuestStatus,
        makeCard,
    }

})









// *****************************Module for DOM elements****************************

const domElements = (function() {
const cardArea = document.getElementById("dog-add-remove-area")
const dogAddButton = document.getElementById("dog-add-btn")
const dogRemoveButton = document.getElementById("dog-remove-btn")
const dogUpdateButton = document.getElementById("dog-update-btn")

// Dog addition dialog elements
const dialogElement = document.getElementById("dialog")
const addDogFormEl = document.getElementById("dog-add-form")

const addDogbtn = document.getElementById("dog-add-btn")


// Dog removal dialog elements
const dogRemovalDialogEl = document.getElementById("dog-removal-confirmation-dialog")
const dogRemovalDialogYesBtn = document.getElementById("dog-removal-confirmation-yes-button")
const dogRemovalDialogNoBtn = document.getElementById("dog-removal-confirmation-no-button")

// Dog addition form input elements
let dogsName = document.querySelector("#dogs-name-input")
let dogsBirthday = document.querySelector("#dogs-birthday-input")
let dogsBreed = document.querySelector("#dogs-breed-input")
let dogNotes = document.querySelector("#dog-notes-input")
let dogBoardingStatus = document.querySelector("#dog-inhouse-status")

const cardSubmitbtn = document.querySelector("#submit-btn")

return {
    cardArea,
    dogAddButton,
    dogRemoveButton,
    dogUpdateButton,
    dialogElement,
    addDogFormEl,
    addDogbtn,
    dogRemovalDialogEl,
    dogRemovalDialogYesBtn,
    dogRemovalDialogNoBtn,
    dogsName,
    dogsBirthday,
    dogsBreed,
    dogNotes,
    dogBoardingStatus,
    cardSubmitbtn
}
})


// *****************************Module for Event Listeners*****************************

const eventListeners = (function() {
    
    // Event listener for adding a dog card when clicking the add button, 
    // creates an instance of the Dog class
    domElements.cardSubmitbtn.addEventListener('click', function(event) {
        event.preventDefault()
        let newDog = new Dog(domElements.dogsName.value, 
                                domElements.dogsBirthday.value, 
                                domElements.dogsBreed.value, 
                                domElements.dogNotes.value, 
                                domElements.dogBoardingStatus.value)
        dogHouse.getDogsInHouse().push(newDog)
        dogCardManagement.refreshCards()
        domElements.dialogElement.close()
        domElements.addDogFormEl.reset()
        dogCardManagement.displayDogs()
    })

    // Open the dialog for adding a dog card, which shows the form

    domElements.dogAddButton.addEventListener('click', function() {
        domElements.dialogElement.showModal()
    })
}
)

export {dogHouse, dogCardManagement, domElements}