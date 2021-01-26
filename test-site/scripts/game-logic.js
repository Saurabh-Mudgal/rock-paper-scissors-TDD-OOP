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
}