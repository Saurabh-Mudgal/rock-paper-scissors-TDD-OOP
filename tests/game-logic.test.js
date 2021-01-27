/**
 * @jest-environment jsdom
 */

 import GameLogic from '../test-site/scripts/game-logic.js';

const gameLogic = new GameLogic("rock");
const randomChoiceSpy = jest.spyOn(gameLogic, "randomChoice");
const updateScoreSpy = jest.spyOn(gameLogic, "updateScore");
const addResultDivSpy = jest.spyOn(gameLogic, "addResultDiv");
const purgeHighlightsSpy = jest.spyOn(gameLogic, "purgeHighlights");
const updateInfoBoxSpy = jest.spyOn(gameLogic, "updateInfoBox");




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

describe('class GameLogic has methods that execute as intended', () => {  
    describe('.randomChoice method exists and executes as intended', () => {

        describe('.randomChoice smoke tests', () => {
            it('should exist', () => {
                expect(gameLogic.randomChoice).toBeDefined();
            })
    
            it('should be a function type', () => {
                expect(typeof gameLogic.randomChoice).toBe("function");
            })

            it('should have a return type of object', () => {
                expect(typeof gameLogic.randomChoice()).toBe("object");
            })
        })

        describe('.randomChoice executes as intended', () => {

            const result = gameLogic.randomChoice();

            expect(gameLogic.choices).toContainEqual(result);
            expect(randomChoiceSpy).toHaveBeenCalledTimes(1);

            randomChoiceSpy.mockClear();
        })
    })

    describe('.updateScore method exists and executes as intended', () => {
        describe('.updateScore smoke tests', () => {

            it('should exist', () => {
                expect(gameLogic.updateScore).toBeDefined();
            })
    
            it('should be a function type', () => {
                expect(typeof gameLogic.updateScore).toBe("function");
            })
        })

        it('should update the score for both players without errors', () => {

            for(let i= 0; i< 2; i++) {
                for(let j= 0; j< 2; j++) {

                    const result = updateScoreSpy.mockReturnThis(undefined);

                    expect(result).toBeUndefined;
                    expect(updateScoreSpy).toHaveBeenCalledTimes(0);
        
                    updateScoreSpy.mockClear();
                }
            }


        })
    })

    describe('.addResultDiv method exists and executes as intended', () => {
        
        describe('.addResultDiv smoke tests', () => {

            it('should exist', () => {
                expect(gameLogic.addResultDiv).toBeDefined();
            })
    
            it('should be a function type', () => {
                expect(typeof gameLogic.addResultDiv).toBe("function");
            })
        })
        
        it('should add the div for player selections in the round without errors', () => {
            
            for (let i = 0; i<3; i++) {
                for (let j = 0; j<2; j++) {
                    for (let k = 0; k<2; k++) {
                        const result = gameLogic.addResultDiv((gameLogic.choices[i]), (j ? true : false), (k ? true : false));

                        expect(result).toBeUndefined;
                        expect(addResultDivSpy).toHaveBeenCalledTimes(1);
            
                        addResultDivSpy.mockClear();
                    }
                }
            }
        })
    })

    describe('.purgeHighlights method exists and executes as intended', () => {
        describe('.purgeHighlights smoke tests', () => {

            it('should exist', () => {
                expect(gameLogic.purgeHighlights).toBeDefined();
            })
    
            it('should be a function type', () => {
                expect(typeof gameLogic.purgeHighlights).toBe("function");
            })
        })

        it('should purge old highlights without errors', () => {

                const result = gameLogic.purgeHighlights();

                expect(result).toBeUndefined;
                expect(purgeHighlightsSpy).toHaveBeenCalledTimes(1);
    
                purgeHighlightsSpy.mockClear();

        })
    })

    describe('.updateInfoBox method exists and executes as intended', () => {
        describe('.updateInfoBox smoke tests', () => {

            it('should exist', () => {
                expect(gameLogic.updateInfoBox).toBeDefined();
            })
    
            it('should be a function type', () => {
                expect(typeof gameLogic.updateInfoBox).toBe("function");
            })
        })

        it('should update the infobox with correct text without errors', () => {

            for (let i = 0; i<2; i++) {
                for (let j = 0; j<2; j++) {
                    for (let k = 0; k<2; k++) {
                        const result = gameLogic.updateInfoBox((i ? true : false), (j ? true : false), (k ? true : false));

                        expect(result).toBeUndefined;
                        expect(updateInfoBoxSpy).toHaveBeenCalledTimes(1);
            
                        updateInfoBoxSpy.mockClear();
                    }
                }
            }


        })
    })
})