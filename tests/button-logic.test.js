/**
 * @jest-environment jsdom
 */

 import ButtonLogic from '../test-site/scripts/button-logic.js';

 const buttonLogic = new ButtonLogic();




describe('class ButtonLogic has correct logic for scrolling and resetting', () => {

    describe('class ButtonLogic smoke tests', () => {

        it('should exist', () => {
            expect(ButtonLogic).toBeDefined();
        })

        it('should be a function type', () => {
            expect(typeof ButtonLogic).toBe("function");
        })

    })

    describe('class ButtonLogic has methods that execute as intended', () => {

        describe('.scrollToTop method exists and executes as intended', () => {

            describe('.scrollToTop smoke tests', () => {

                it('should exist', () => {
                    expect(buttonLogic.scrollToTop).toBeDefined();
                })
        
                it('should be a function type', () => {
                    expect(typeof buttonLogic.scrollToTop).toBe("function");
                })
            })
        })
    })
})
