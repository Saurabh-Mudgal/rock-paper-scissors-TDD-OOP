export default class GameLogic {
    constructor(playerChoice = null) {
        this.choices = [
            {
                choice: "rock",
                emoji: "👊",
                beats: ["scissors"]
            },
            {
                choice: "paper",
                emoji: "✋",
                beats: ["rock"]
            },
            {
                choice: "scissors",
                emoji: "✌️",
                beats: ["paper"]
            }
        ];
        this.playerChoice = this.choices.find(selection => selection.choice === playerChoice);

        // RockPaperScissorsLizardSpock: Add Lizard, Spock objects and modify "beats" of previous choices accordingly.
        // If extending to huge relations (eg pokemon, chess), easily isolate to SQL database and write queries to pull data directly. 
    }

    addResultDiv(selection, winner, playerMode){
        const div = document.createElement("div");
        div.classList.add("selection");
        div.classList.add("recent");
        if (winner) {div.classList.add("winner")}
        div.innerText = selection.emoji;

        const finalColumn = (playerMode) ? document.querySelectorAll("[data-final-column]") : document.querySelectorAll("[data-final2-column]")

        finalColumn.forEach(final => {
            final.after(div);
        })
    }

    updateScore(p1Wins, p2Wins, playerMode){
        const p1Score = (playerMode) ? document.querySelector("[data-your-score]") : document.querySelector("[data-player1-score]")
        const p2Score = (playerMode) ? document.querySelector("[data-computer-score]") : document.querySelector("[data-player2-score]")
        const turn = (playerMode) ? document.querySelector("[data-turn]") : document.querySelector("[data-turn-computer]")
        
        if (p1Wins) {p1Score.innerText = parseInt(p1Score.innerText) + 1;}
        if (p2Wins) {p2Score.innerText = parseInt(p2Score.innerText) + 1;}

        turn.innerText = parseInt(turn.innerText) + 1;
    }

    randomChoice() {
        const n = Math.floor(Math.random()*((this.choices).length));
        return this.choices[n];
    }
}