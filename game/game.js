//import the character class
const Character = require('./characters/character.js')

//import game piece classes
const StreetTile = require('./gamePieces/streetTiles.js');
const AlibiCard = require('./gamePieces/alibiCards.js');
const DetectiveCoin = require('./gamePieces/detectiveCoins.js');
const ActionTile = require('./gamePieces/actionTiles.js');
const TurnToken = require('./gamePieces/turnTokens.js');

//import game board classes
const StreetsArea = require('./gameBoardAreas/streetsArea.js');
const DetectivesArea = require('./gameBoardAreas/detectivesArea.js');
const AlibiDeck = require('./gameBoardAreas/alibiDeckArea.js');
const TurnTokenDeck = require('./gameBoardAreas/turnTokensArea.js');
const ActionsArea = require('./gameBoardAreas/actionsArea.js');

//import player classes
const Detective = require('./players/detective.js')
const Jack = require('./players/jack.js')

class Game {

  constructor() {

    //initialise the game pieces
    //initialise the characters
    const purpleCharacter = new Character('William Gull', 'purple');
    const pinkCharacter = new Character('Madame', 'pink');
    const blueCharacter = new Character('Inspector Lestrade', 'blue');
    const orangeCharacter = new Character('Jeremy Bert', 'orange');
    const greyCharacter = new Character('Joseph Lane', 'grey');
    const whiteCharacter = new Character('John Pizer', 'white');
    const blackCharacter = new Character('Sergeant Goodley', 'black');
    const greenCharacter = new Character('Miss Stealthy', 'green');
    const yellowCharacter = new Character('John Smith', 'yellow');
  
    //initialise the street tiles
    const purpleStreetTile = new StreetTile(purpleCharacter);
    const pinkStreetTile = new StreetTile(pinkCharacter);
    const blueStreetTile = new StreetTile(blueCharacter);
    const orangeStreetTile = new StreetTile(orangeCharacter);
    const greyStreetTile = new StreetTile(greyCharacter);
    const whiteStreetTile = new StreetTile(whiteCharacter);
    const blackStreetTile = new StreetTile(blackCharacter);
    const greenStreetTile = new StreetTile(greenCharacter);
    const yellowStreetTile = new StreetTile(yellowCharacter);
  
    //initialise the alibi cards
    const purpleAlibi = new AlibiCard(purpleCharacter, 1);
    const pinkAlibi = new AlibiCard(pinkCharacter, 2);
    const blueAlibi = new AlibiCard(blueCharacter, 0);
    const orangeAlibi = new AlibiCard(orangeCharacter, 1);
    const greyAlibi = new AlibiCard(greyCharacter, 1);
    const whiteAlibi = new AlibiCard(whiteCharacter, 1);
    const blackAlibi = new AlibiCard(blackCharacter, 0);
    const greenAlibi = new AlibiCard(greenCharacter, 1);
    const yellowAlibi = new AlibiCard(yellowCharacter, 1);
  
    //initialise the detective coins
    const sherlockCoin = new DetectiveCoin('Sherlock', 'red');
    const watsonCoin = new DetectiveCoin('Watson', 'brown');
    const dogCoin = new DetectiveCoin('Dog', 'blue');
  
    //initialise the action tiles
    const actionTileOne = new ActionTile([this.moveWatson, this.moveDog]);
    const actionTileTwo = new ActionTile([this.moveSherlock, this.drawAlibiCard]);
    const actionTileThree = new ActionTile([this.rotateTile, this.exchangeTiles]);
    const actionTileFour = new ActionTile([this.rotateTile, this.jokerMove]);
  
    //initialise the turn tokens
    const turnTokenOne = new TurnToken('detective', 1);
    const turnTokenTwo = new TurnToken('jack', 2);
    const turnTokenThree = new TurnToken('detective', 3);
    const turnTokenFour = new TurnToken('jack', 4);
    const turnTokenFive = new TurnToken('detective', 5);
    const turnTokenSix = new TurnToken('jack', 6);
    const turnTokenSeven = new TurnToken('detective', 7);
    const turnTokenEight = new TurnToken('jack', 8);
  
  
    //initialise the game board
    //initialise the street area
    const streetArea = new StreetsArea(
      [
        purpleStreetTile,
        pinkStreetTile,
        blueStreetTile,
        orangeStreetTile,
        greyStreetTile,
        whiteStreetTile,
        blackStreetTile,
        greenStreetTile,
        yellowStreetTile
      ]
    );
  
    //initialise the detective area
    const detectiveArea = new DetectivesArea(sherlockCoin, watsonCoin, dogCoin);
  
    //initialise the alibi deck
    const alibiDeck = new AlibiDeck(
      [
        purpleAlibi,
        pinkAlibi,
        blueAlibi,
        orangeAlibi,
        greyAlibi,
        whiteAlibi,
        blackAlibi,
        greenAlibi,
        yellowAlibi
      ]
    );
  
    //initialise the turn token deck
    const turnTokenDeck = new TurnTokenDeck(
      [
        turnTokenOne,
        turnTokenTwo,
        turnTokenThree,
        turnTokenFour,
        turnTokenFive,
        turnTokenSix,
        turnTokenSeven,
        turnTokenEight
      ]
    );
  
    //initialise the actions area
    const actionsArea = new ActionsArea(
      [
        actionTileOne,
        actionTileTwo,
        actionTileThree,
        actionTileFour
      ]
    );
  
    //initialise the players
    //initialise the detective
    const detective = new Detective();
  
    //initialise jack
    const jack = new Jack();

    //set the game attributes
    this.characters = [
      purpleCharacter,
      pinkCharacter,
      blueCharacter,
      orangeCharacter,
      greyCharacter,
      whiteCharacter,
      blackCharacter,
      greenCharacter,
      yellowCharacter
    ];
  
    this.detective = detective;
  
    this.jack = jack;
  
    this.actionsArea = actionsArea;
  
    this.alibiDeck = alibiDeck;
  
    this.streetArea = streetArea;
  
    this.turnTokenDeck = turnTokenDeck;
  
    this.detectiveArea = detectiveArea;
  
    //jack draws an alias card
    const cardDrawn = this.alibiDeck.drawAlibiCard();
    this.jack.alias = cardDrawn;
  
    //randomly reorder the streesArea tile order
    this.streetArea.shuffleStreets();
    //randomise street tile orientation
    for (let i = 0; i < this.streetArea.streetTiles.length ; i++) {
      this.streetArea.streetTiles[i].randomiseOrientation();
    }
    //rotate street tiles so no suspect is visible
    this.streetArea.streetTiles[0].orientation = 1;
    this.streetArea.streetTiles[2].orientation = 3;
    this.streetArea.streetTiles[7].orientation = 0;
  
    //ready to begin first turn
  }
  
  //creating the game logic
  //move sherlock clockwise around the board a distance between 1 and 2
  moveSherlock(distance) {
    if (distance < 3 && distance > 0) {
      this.detectiveArea.moveDetective('sherlock', distance);
    } else {
      console.log('Distance moved must be either 1 or 2.')
    };
  }

  //move watson clockwise around the board a distance between 1 and 2
  moveWatson(distance) {
    if (distance < 3 && distance > 0) {
      this.detectiveArea.moveDetective('watson', distance);
    } else {
      console.log('Distance moved must be either 1 or 2.')
    };
  }

  //move dog clockwise around the board a distance between 1 and 2
  moveDog(distance) {
    if (distance < 3 && distance > 0) {
      this.detectiveArea.moveDetective('dog', distance);
    } else {
      console.log('Distance moved must be either 1 or 2.')
    };
  }
  
  //move any one detective 1 space clockwise. Jack may choose to not move any detectives
  jokerMove(role, detective, distance) {
    if (role == 'detective') {
      if (distance == 1) {
        this.detectiveArea.moveDetective(detective, distance)
      } else {
        console.log('The detective MUST move ONE of his detectives ONE space.')
      }
    }
    if (role == 'jack') {
      if (distance >= 0 && distance <= 1) {
        this.detectiveArea.moveDetective(detective, distance);
      } else {
        console.log('Jack MAY move ONE detective UP TO ONE space.');
      }
    }
  }
  
  //changes the orientation of a tile at a given index on the board by 90 to 180 degrees
  rotateTile(position, newOrientation) {
    let currentOrientation = this.streetArea.streetTiles[position].orientation;
    if (newOrientation != currentOrientation) {
      this.streetArea.streetTiles[position].orientation = newOrientation;
    } else {
      console.log('You must rotate ONE tile at least 90 degrees.');
    };
  }

  //exchanges the positions of two tiles in the game board
  exchangeTiles(index1, index2) {
    if (index1 != index2) {
      this.streetArea.exchangeTiles(index1, index2);
    } else {
      console.log('You must exchange a tile with a DIFFERNT tile.')
    }
  }

  //draws an alibi card from the stack
  //if detective draws the card, change the character suspect value to false
  //if jack draws, add the card to his stack and add hourglasses to his total
  drawAlibiCard(role) {
    let cardDrawn = this.alibiDeck.drawAlibiCard();
    if (role == 'detective') {
      this.characters.forEach(character => {
        if (character.name == cardDrawn.name) {
          character.isSuspect = false;
        };
      });
    } else {
      this.jack.addAlibiCard(cardDrawn);
    };
    return cardDrawn;
  }

  getSuspects() {
    let suspects = [];
    this.characters.forEach(character => {
      if (character.isSuspect) {
        suspects.push(character);
      };
    });
    return suspects;
  };

  playTurn() {
    //draw turn token, if no tokens check for winner
    let turnToken = game.turnTokenDeck.drawToken();
    if (turnToken) {
      //get available actions (randomly flip action tokens on odd terns, toggle side for even turns)
      let firstPlayer;
      let secondPlayer;
      if (turnToken.turnNumber % 2 != 0) {
        this.actionsArea.flipTokens();
        firstPlayer = 'detective'
        secondPlayer = 'jack'
      } else {
        this.actionsArea.toggleTokens();
        firstPlayer = 'jack'
        secondPlayer = 'detective'
      }
      let availableActions = this.actionsArea.availableActions;

      //players take the actions

      //can jack be seen?

      //resolve suspects
    }
  };

  getWinner() {
    //check for winner
    let jackHourglasses = this.jack.hourglasses;
    let suspects = this.getSuspects();
  };
}

game = new Game();

module.exports = game;