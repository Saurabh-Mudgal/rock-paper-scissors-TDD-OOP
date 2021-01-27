/**
 * @jest-environment jsdom
 */

 import ButtonLogic from '../test-site/scripts/button-logic.js';

 const buttonLogic = new ButtonLogic();
 const scrollToTopSpy = jest.spyOn(buttonLogic, "scrollToTop");
 const clearLogSpy = jest.spyOn(buttonLogic, "clearLog");





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

            it('should scroll to top without errors', () => {
                const result = buttonLogic.scrollToTop();

                expect(result).toBeUndefined;
                expect(scrollToTopSpy).toHaveBeenCalledTimes(1);
        
                scrollToTopSpy.mockClear();    
            })
        })

        describe('.clearLog method exists and executes as intended', () => {

            describe('.clearLog smoke tests', () => {

                it('should exist', () => {
                    expect(buttonLogic.clearLog).toBeDefined();
                })
        
                it('should be a function type', () => {
                    expect(typeof buttonLogic.clearLog).toBe("function");
                })
            })

            it('should clear log without errors', () => {
                const result = buttonLogic.clearLog();

                expect(result).toBeUndefined;
                expect(clearLogSpy).toHaveBeenCalledTimes(1);
        
                clearLogSpy.mockClear();    
            })

        })
    })
})
