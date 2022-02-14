let amountOfPeople = 0;
let peopleCounterHtmlElement = document.getElementById("count-el")
let storedPeople = 'Saved entries: '
let peopleStoredHtmlElement = document.getElementById("storedPeople")

const showAmountOfPeople = (amountOfPeople) => {
    peopleCounterHtmlElement.innerText = amountOfPeople;
}

const peopleCounter = () => {
    amountOfPeople += 1;
    showAmountOfPeople(amountOfPeople)
}

const resetPeopleCounter = () => {
    amountOfPeople = 0;
    showAmountOfPeople(amountOfPeople)
}

const saveAmountOfPeople = () => {
    storedPeople += amountOfPeople + ' - '
    peopleStoredHtmlElement.innerText = storedPeople
    resetPeopleCounter() 
}