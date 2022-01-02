# Rock Paper Scissors - A BDD & OOP approach
[![jest version](https://img.shields.io/badge/jest-v27.4.0%5E-blue)](https://www.npmjs.com/package/jest)
[![@types/jest version](https://img.shields.io/badge/%40types%2Fjest-v27.4.0%5E-lightgrey)](https://www.npmjs.com/package/jest)
[![@babel/plugin-transform-modules-commonjs version](https://img.shields.io/badge/%40babel%2Fplugin--transform--modules--commonjs-v7.16.5%5E-goldenrod)](https://www.npmjs.com/package/@babel/plugin-transform-modules-commonjs)
[![npm version](https://img.shields.io/badge/npm-v6.14.14%5E-emerald)](https://www.npmjs.com/package/npm)

This is a static website for playing rock, paper scissors in _Player vs Computer_ and _Computer vs Computer_ mode. The code is designed to be extensible. It is developed using the concepts of Object Oriented Programming and Behavior Driven Development (an extenstion of TDD).
<br>

TO SEE | NAVIGATE TO | LINK
| :---: | :---: | :---:
Website Code | folder “test-site/” | [here](https://github.com/Saurabh-Mudgal/rock-paper-scissors-TDD-OOP/tree/main/test-site)
Test Suites | folder “tests/” | [here](https://github.com/Saurabh-Mudgal/rock-paper-scissors-TDD-OOP/tree/main/tests)
**Game's Computational Logic** | class GameLogic located in “test-site/scripts/game-logic.js” | [here](https://github.com/Saurabh-Mudgal/rock-paper-scissors-TDD-OOP/blob/main/test-site/scripts/game-logic.js)
Test Suite for Game Logic | lines 1-96 located in "tests/game-logic.test.js" | [here](https://github.com/Saurabh-Mudgal/rock-paper-scissors-TDD-OOP/blob/main/tests/game-logic.test.js)
Site Functionality Code | class ButtonLogic, ModeSelector located in “test-site/scripts/button-logic.js” | [here](https://github.com/Saurabh-Mudgal/rock-paper-scissors-TDD-OOP/blob/main/test-site/scripts/button-logic.js)
Test Suite for Functionality Code | located in "tests/button-logic.test.js" | [here](https://github.com/Saurabh-Mudgal/rock-paper-scissors-TDD-OOP/blob/main/tests/button-logic.test.js)

<br>
For a 5-minute code walkthrough video, installation instructions, features and documentation, read below.

- - - -


## View Demo

### Live website
Play around and test it yourself: [www.rock-paper-scissors-by-saurabh.netlify.app/](https://rock-paper-scissors-by-saurabh.netlify.app/)

### Code Walkthrough Video (<7 min)
[![Demo Video](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Installation Instructions

### Requirements
Testing library and its dependencies:
1) **Jest**: Testing library for JavaScript
2) **Babel**: Transpiler for ES module to CommonJS module; compatability for Jest
3) **NPM**: Node package manager for installing and managing dependencies

### Installation
Ensure you have npm installed on your device. If you don't, follow the instructions [here](https://nodejs.org/en/) to install node and npm. Once done, check that everything was installed by running the following on your CLI:
```git
$ node -v
$ npm -v
```
Download or clone this repository. Navigate to the root folder where you cloned this repository and proceed to install the dependencies as follows:
```git
$ npm install
```
Or, alternatively if missing "package.json" or "package-lock.json":
```git
$ npm init -y
$ npm i --save-dev jest @types/jest @babel/plugin-transform-modules-commonjs
```
Finally, to run the test suites yourself, navigate to the root directory and run the following CLI command:
```git
$ npm run test
```

- - - -

## Features

### Production
Feature | Description
| :---: | :---
Highlight Active | Highlights the latest round selection, including switching to the active game mode.
Info Box | An infobox that provides initial game mode instructions as well as win/ lose/ draw notification for the round and play again prompt.
Player Selections Log | Records and logs in a div (on screen) the selections for every round made by both players.
Turn Log | Records and updates the number of turns played in the respective game mode.
Score Log | Records and updates the score for respective players.
Exit Buttons | (1) _Resets_: Score log, Turn log, Player Selections log and Info Box <br>(2) _Scrolls_: to the top for game mode re-selection.
Mode Selector Buttons |  (1) _Resets_: Score log, Turn log, Player Selections log and Info Box <br>(2) _Scrolls_: to the selected mode for a new game.


### Development
Feature | Description
| :---: | :---
OOP | Designed using concepts of Object Oriented Programming to ensure readability and robustness, even as the codebase scales: <br><br>(1) Encapsulation: To organise all interdependent functions in one place. Ensure they are maintainable without breaking the code; seen in: _GameLogic_, _ButtonLogic_, _ModeSelector_ <br>(2) Abstraction: To ensure that files like main.js only access and execute minimal and meaningful methods and are not polluted by private methods; seen in: _GameLogic_, _ButtonLogic, _ModeSelector_ <br>(3) Inheritance: To reduce the lines of code written to achieve the MVP and improve readability; seen in: _ModeSelector_<br>(4) Polymorphism: To improve the performance and readability of the codebase; seen in:  _ModeSelector_
Unit Tests | Unit tests were written using the Jest library to produce test suites for:<br><br> 1) Main Game logic<br> 2) Site and Button Functionality
BDD (extension of TDD) | Test Driven Development was followed to produce high confidence code. Behaviour Driven Development was the design pattern used as an extension to TDD to define the overall behaviour of classes and methods on the collective, bigger scale. Then, iterate TDD to refactor code and achieve that behaviour.
Extendable Code | The codebase was modelled using Behavior Driven Development. This included thinking ahead and writing extensible code for smoother development work in the future. The code can be easily extended for:<br><br> 1) Rock Paper Scissors Lizard Spock<br> 2) Player vs Player mode

- - - -

# Creator
