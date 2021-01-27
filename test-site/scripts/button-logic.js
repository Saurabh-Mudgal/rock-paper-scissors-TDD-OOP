export default class ButtonLogic {
    // constructor(button) {
    //     this.button = button;
    //     this.mode = (this.button.classList[1]);
    // }

    // ^^The commented code above can be used if button area specific DOM manupliation is required.^^

    scrollToTarget() {
        this.scrollToTop();
        this.refresh();
    }

    refresh() {
        this.clearLog();
        this.defaultText();
    }

    defaultText() {
        const playerInstructions = document.querySelectorAll("#player-inst")
        const compInstructions = document.querySelectorAll("#comp-inst")

        playerInstructions.forEach(playerInstruction => {
            playerInstruction.innerText = "Please select your choice by clicking the ROCK, PAPER, SCISSORS emoji above :)"
        })
        compInstructions.forEach(compInstruction => {
            compInstruction.innerText = "Simulate a computer round by clicking the PLAY emoji above :)"
        })
    }

    clearLog() {
        const logDivs = document.querySelectorAll(".selection")
        const records = document.querySelectorAll(".record")

        logDivs.forEach(logDiv => {
            logDiv.remove()
        })

        records.forEach(record => {
            record.innerText = "0"
        })
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

export class ModeSelector extends ButtonLogic {
    constructor(modeButton) {
        super();
        this.button = modeButton;
        this.gameModeChoice = this.button.dataset.gamemode;
    }

    scrollToTarget() {
        this.refresh();
        this.scrollToGame();
    }
    
    scrollToGame() {
        const elem = document.getElementById(this.gameModeChoice);
        
        elem.scrollIntoView();
    }
}