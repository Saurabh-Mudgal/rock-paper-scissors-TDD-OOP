/**
* @jest-environment jsdom
*/

import ButtonLogic from '../test-site/scripts/button-logic.js';

const buttonLogic = new ButtonLogic();
const scrollToTopSpy = jest.spyOn(buttonLogic, "scrollToTop");
const clearLogSpy = jest.spyOn(buttonLogic, "clearLog");
const defaultTextSpy = jest.spyOn(buttonLogic, "defaultText");
const refreshSpy = jest.spyOn(buttonLogic, "refresh");
const scrollToTargetSpy = jest.spyOn(buttonLogic, "scrollToTarget");



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

        describe('.defaultText method exists and executes as intended', () => {

            describe('.defaultText smoke tests', () => {

                it('should exist', () => {
                    expect(buttonLogic.defaultText).toBeDefined();
                })
        
                it('should be a function type', () => {
                    expect(typeof buttonLogic.defaultText).toBe("function");
                })
            })

            it('should change default text as intended without errors', () => {
                const result = buttonLogic.defaultText();

                expect(result).toBeUndefined;
                expect(defaultTextSpy).toHaveBeenCalledTimes(1);
        
                defaultTextSpy.mockClear();    
            })

        })

        describe('.refresh method exists and executes as intended', () => {
            
            describe('.refresh smoke tests', () => {

                it('should exist', () => {
                    expect(buttonLogic.refresh).toBeDefined();
                })
        
                it('should be a function type', () => {
                    expect(typeof buttonLogic.refresh).toBe("function");
                })
            })

            it('should refresh the game UI as intended without errors', () => {
                
                clearLogSpy.mockReturnValue("refresh Mock");
                defaultTextSpy.mockReturnValue("refresh Mock");
                        
                const result = buttonLogic.refresh();

                expect(result).toBeUndefined;
                expect(refreshSpy).toHaveBeenCalledTimes(1);
            
                refreshSpy.mockClear();
                defaultTextSpy.mockClear();
                clearLogSpy.mockClear();
            })

        })

        describe('.scrollToTarget method exists and executes as intended', () => {
            
            describe('.scrollToTarget smoke tests', () => {

                it('should exist', () => {
                    expect(buttonLogic.scrollToTarget).toBeDefined();
                })
        
                it('should be a function type', () => {
                    expect(typeof buttonLogic.scrollToTarget).toBe("function");
                })
            })

            it('should scroll to the target div as intended without errors', () => {
                
                scrollToTopSpy.mockReturnValue("refresh Mock");
                refreshSpy.mockReturnValue("refresh Mock");
                        
                const result = buttonLogic.scrollToTarget();

                expect(result).toBeUndefined;
                expect(scrollToTargetSpy).toHaveBeenCalledTimes(1);
            
                scrollToTargetSpy.mockClear();
                scrollToTopSpy.mockClear();
                refreshSpy.mockClear();
            })
        })
    })
})
