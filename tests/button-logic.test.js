/**
 * @jest-environment jsdom
 */

 import ButtonLogic from '../test-site/scripts/button-logic.js';



describe('class ButtonLogic has correct logic for scrolling and resetting', () => {

    describe('class ButtonLogic smoke tests', () => {

        it('should exist', () => {
            expect(ButtonLogic).toBeDefined();
        })

        it('should be a function type', () => {
            expect(typeof ButtonLogic).toBe("function");
        })

    })
})
