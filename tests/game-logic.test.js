/**
 * @jest-environment jsdom
 */

 import GameLogic from '../test-site/scripts/game-logic.js';

const gameLogic = new GameLogic("rock");

 describe('class GameLogic has correct rock, paper, scissors logic', () => {
    
    describe('GameLogic smoke tests', () => {

        it('should exist', () => {
            expect(GameLogic).toBeDefined();
        })

        it('should be a function type', () => {
            expect(typeof GameLogic).toBe("function");
        })

    })

    // 
    // Testing main game logic:
    // 

    describe('this.choices has the right relations for rock, paper, scissors', () => {

        const rock = new GameLogic("rock");
        const paper = new GameLogic("paper");
        const scissors = new GameLogic("scissors");

        describe('this.choices and this.playerChoice smoke test', () => {

            it('this.choice should exist', () => {
                expect(gameLogic.choices).toBeDefined();
            })
    
            it('this.choice should be an object type', () => {
                expect(typeof gameLogic.choices).toBe("object");
            })

            it('this.playerChoice should exist', () => {
                expect(gameLogic.playerChoice).toBeDefined();
            })
    
            it('this.playerChoice should be an object type', () => {
                expect(typeof gameLogic.choices).toBe("object");
            })
        })

        describe('this.choice and playerChoice logic works as intended', () => {

            it('should have correct logic for rock', () => {
                expect(rock.playerChoice.choice).toMatch("rock");
                expect(rock.playerChoice.emoji).toMatch("👊");
                expect(rock.playerChoice.beats.includes("scissors")).toBeTruthy

                expect(rock.playerChoice.choice).toMatch(gameLogic.choices[0].choice);
                expect(rock.playerChoice.emoji).toMatch(gameLogic.choices[0].emoji);
                expect(rock.playerChoice.beats).toEqual(gameLogic.choices[0].beats)
            })

            it('should have correct logic for paper', () => {
                expect(paper.playerChoice.choice).toMatch("paper");
                expect(paper.playerChoice.emoji).toMatch("✋");
                expect(paper.playerChoice.beats.includes("rock")).toBeTruthy
                
                expect(paper.playerChoice.choice).toMatch(gameLogic.choices[1].choice);
                expect(paper.playerChoice.emoji).toMatch(gameLogic.choices[1].emoji);
                expect(paper.playerChoice.beats).toEqual(gameLogic.choices[1].beats)
            })

            it('should have correct logic for rock', () => {
                expect(scissors.playerChoice.choice).toMatch("scissors");
                expect(scissors.playerChoice.emoji).toMatch("✌️");
                expect(scissors.playerChoice.beats.includes("paper")).toBeTruthy
                
                expect(scissors.playerChoice.choice).toMatch(gameLogic.choices[2].choice);
                expect(scissors.playerChoice.emoji).toMatch(gameLogic.choices[2].emoji);
                expect(scissors.playerChoice.beats).toEqual(gameLogic.choices[2].beats)
            })
        })

    })
})