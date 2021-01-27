import GameLogic from "./game-logic.js";
import ButtonLogic, { ModeSelector } from "./button-logic.js";

// Selection Window

const gameModeButtons = document.querySelectorAll("[data-gamemode]");

gameModeButtons.forEach(gameModeButton => {
    gameModeButton.addEventListener('click', (e) => {
        const gameMode = new ModeSelector(gameModeButton);
        gameMode.scrollToTarget();
    })
})



// Player Vs Computer

const selectionButtons = document.querySelectorAll("[data-selection]");

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', (e) => {
        const playerChoice = selectionButton.dataset.selection;
        const playerRound = new GameLogic(playerChoice);
        playerRound.playerVsComputer();
    })
})



// Player Vs Computer

const playButtons = document.querySelectorAll("[data-play]");

playButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', (e) => {
        const computerRound = new GameLogic();
        computerRound.computerVsComputer();
    })
})



// Exit Game Button

const exitButtons = document.querySelectorAll(".exit-button")

exitButtons.forEach(exitButton => {
    exitButton.addEventListener('click', (e) => {
        const exitEvent = new ButtonLogic();
        exitEvent.scrollToTarget();
    })
})