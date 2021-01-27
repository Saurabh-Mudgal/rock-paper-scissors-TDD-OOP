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

    playerVsComputer() {
        let playerMode = true;
        this.runRound(this.playerChoice, this.randomChoice(), playerMode);
    }

    runRound(player1, player2, playerMode) {
        let player1Wins = (player1.beats.includes(player2.choice)) ? true : false
        let player2Wins = (player2.beats.includes(player1.choice)) ? true : false
        let draw = (!player1Wins && !player2Wins) ? true : false

        this.updateScore(player1Wins, player2Wins, playerMode);
        this.purgeHighlights();
        this.addResultDiv(player2, player2Wins, playerMode);
        this.addResultDiv(player1, player1Wins, playerMode);
        this.updateInfoBox(player1Wins, draw, playerMode);
    }

    updateInfoBox(winner, draw, playerMode) {
        const infoBox = (playerMode) ? document.querySelectorAll("#player-inst") : document.querySelectorAll("#comp-inst")
        let bestPlayer
        
        if (draw) {
            bestPlayer = "It was a draw"
        } else if(winner && playerMode) {
            bestPlayer = "You win"
        } else if(!winner && playerMode) {
            bestPlayer = "Computer wins"
        } else if(winner && !playerMode) {
            bestPlayer = "Player 1 wins"
        } else if(!winner && !playerMode) {
            bestPlayer = "Player 2 wins"
        }

        infoBox.forEach(info => {
            info.innerText = `${bestPlayer}! Click the emoji to play another round now.`
        })
    }

    purgeHighlights() {
        const oldDivs = document.querySelectorAll(".recent");
        oldDivs.forEach((oldDiv) => {
            if (oldDiv){
                oldDiv.classList.remove("recent")
            }
        })
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