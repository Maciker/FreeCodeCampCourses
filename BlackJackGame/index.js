let card = 0
let totalCardsValue = 0
let crupierCardsvalue = 0

let userMessageHtmlElement = document.getElementById('message-el')
let pickedCardsHtmlElement = document.getElementById('cards-el')
let totalCardsValueHtmlElement = document.getElementById('cardsValue-el')
let finalMessageHtmlElement = document.getElementById('endGame-el')
let crupierCardsValueHtmlElement = document.getElementById('crupierCards-el')
let newCardHtmlButton = document.getElementById('newCard-btn')
let endGameHtmlButton = document.getElementById('endGame-btn')
let startGameHtmlButton = document.getElementById('startGame-btn')

const setInitialCardsValues = () => {
    card = 0
    totalCardsValue = 0
    crupierCardsvalue = 0
}

const setInitialMessagesValues = () => {
    pickedCardsHtmlElement.innerText = 'Cards : '
    totalCardsValueHtmlElement.innerText = 'Cards Value: '
    finalMessageHtmlElement.innerText = ''
    crupierCardsValueHtmlElement.innerText = ''
}


const setCardValue = (min, max) => {
    return Math.round(Math.random() * (max - min + 1) + min)
}

const pickCard = () => {
    return setCardValue(2, 12)
}

const sumCardsValue = () => {
    card = pickCard()
    totalCardsValue += card
}

const playerIsAlive = () => {
    if (totalCardsValue > 21) {
        return false
    } 
    return true
}

const blackJack = () => {
    if (totalCardsValue == 21) {
        return true
    }
    return false
}
const showPickedCard = (card) => {
    pickedCardsHtmlElement.innerText += card + ' - '
}

const showTotalCardsvalue = () => {
    totalCardsValueHtmlElement.innerText = 'Cards Value: ' + totalCardsValue
}

const showCrupierCardsvalue = () => {
    crupierCardsValueHtmlElement.innerText = 'Crupierd Cards: ' + crupierCardsvalue
}

const showHiddenButtons = () => {
    newCardHtmlButton.hidden = false
    endGameHtmlButton.hidden = false
    startGameHtmlButton.hidden = true
}

const hiddeButtons = () => {
    newCardHtmlButton.hidden = true
    endGameHtmlButton.hidden = true
    startGameHtmlButton.hidden = false
}

const loseGameMessage = () => {
    if (playerIsAlive()) {
        finalMessageHtmlElement.innerText = 'GAME OVER!! The Crupier beats you!!!'
    } else {
        finalMessageHtmlElement.innerText = 'GAME OVER!! You have more than 21!!!'
    }
}

const loseGame = () => {
    loseGameMessage()
    hiddeButtons()
    setInitialCardsValues()
}

const winGameMessage = () => {
    if (blackJack()) {
        finalMessageHtmlElement.innerText = 'BLACK JACK!!! YOU WIN!!!'
    } else {
        finalMessageHtmlElement.innerText = 'YOU WIN!!! The Crupier can\'t beat you!!!'
    }
}

const winGame = () => {
    winGameMessage()
    hiddeButtons()
    setInitialCardsValues()
}

const crupierCardsVsPlayerCards = () => {
    if (crupierCardsvalue < 22 && crupierCardsvalue >= totalCardsValue) {
        loseGame()
        console.log(totalCardsValue)
    } else {
        winGame()
    }
}

const startGame = () => {
    setInitialMessagesValues()
    sumCardsValue()
    showPickedCard(card)
    showHiddenButtons()
    showTotalCardsvalue()
}

const newCard = () => {
    sumCardsValue()
    showPickedCard(card)
    showTotalCardsvalue()

    if (! playerIsAlive()) {
        loseGame()
    }

    if (blackJack()) {
        winGame()
    }
}

const endGame = () => {
    crupierCardsvalue = setCardValue(16, 27)
    showCrupierCardsvalue()
    crupierCardsVsPlayerCards()
}