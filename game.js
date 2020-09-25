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

    //creating the game logic

    this.moveDetective = function moveDetective(detective) {
      return function() {
        return `Move ${detective}`;
      };
    },
    this.moveSherlock = this.moveDetective('Sherlock');
    this.moveWatson = this.moveDetective('Watson');
    this.moveDog = this.moveDetective('Dog');


    this.jokerMove = function jokerMove() {
      return 'Joker Move';
    },
    
    this.rotateTile = function rotateTile() {
      return 'Rotate Tile';
    },
    this.exchangeTile = function exchangeTile() {
      return 'Exchange Tile';
    },
    this.drawAlibiCard = function drawAlibiCard(game, role) {
      let cardDrawn = game.alibiDeck.drawAlibiCard();
      if (role == 'detective') {
        game.characters[cardDrawn.name].isSuspect = false;
      } else {
        game.jack.addAlibiCard(cardDrawn);
      };
      return cardDrawn;
    }
  };
  init() {
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
    const actionTileOne = new ActionTile({moveWatson: this.moveWatson, moveDog: this.moveDog});
    const actionTileTwo = new ActionTile({moveSherlock: this.moveSherlock, drawAlibiCard: this.drawAlibiCard});
    const actionTileThree = new ActionTile({rotateTile: this.rotateTile, exchangeTile: this.exchangeTile});
    const actionTileFour = new ActionTile({rotateTile: this.rotateTile, jokerMove: this.jokerMove});
  
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
    this.characters = {
      'William Gull': purpleCharacter,
      'Madame': pinkCharacter,
      'Inspector Lestrade': blueCharacter,
      'Jeremy Bert': orangeCharacter,
      'Joseph Lane': greenCharacter,
      'John Pizer': whiteCharacter,
      'Sergeant Goodley': blackCharacter,
      'Miss Stealthy': greenCharacter,
      'John Smith': yellowCharacter
    };
  
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
    for (let i = 0; i < this.streetArea.positions.length ; i++) {
      this.streetArea.positions[i].tile.randomiseOrientation();
    }
    //rotate street tiles so no suspect is visible
    this.streetArea.positions[0].tile.orientation = 1;
    this.streetArea.positions[2].tile.orientation = 3;
    this.streetArea.positions[7].tile.orientation = 0;
  
    //ready to begin first turn
  }
}

game = new Game();

module.exports = game;