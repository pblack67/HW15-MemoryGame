# Star Trek Memory Game

## Application Deployed on GitHub Pages

[Star Trek Memory Game](https://pblack67.github.io/HW15-MemoryGame/)

## Video Demonstration

[]()

### To run the application:

* npm start

### Technologies used: 

* React
* HTML
* CSS
* JavaScript

## Overview

Star Trek Memory game is a simple front-end application written in React. The user attempts to click on all the tiles displayed on screen. Each time the user clicks on a tile they haven't clicked on before they get a point. However, each time the user makes a selection the application shuffles the tiles in a different order. If a user clicks on a tile twice the game resets their score to zero and they have to start over.

![Correct Guess](/images/correct.png)

![Incorrect Guess](/images/incorrect.png)

## Architecture

This is a front-end application written in HTML, CSS and React. There is an overall <App> component that contains the <Score> component and a number of <MemoryTile> components. The <App> component maintains state and this cascades to the child components via props. A click handler is passed down to each <MemoryTile> component. This then will call the handler in <App> which shuffles the components and determines whether the tile was already clicks. If not, increment the score. If already clicked, then reset the score to 0. 