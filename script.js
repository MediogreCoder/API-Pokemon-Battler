let sideBarPokes = document.querySelectorAll(".spriteimgs"); // burger menu sprites
let bigPokeBall = document.getElementById("pokeall"); //center piece
let sidePokename = document.querySelectorAll(".pokeList"); //burger menu names
let spotlightPokemonOne = document.querySelector(".p1p"); //chosen sprite in center
let spotlightPokemonTwo = document.querySelector(".p2p"); //chosen sprite in center
let spriteContainerOne = document.querySelectorAll(".pokemonsOne"); //container for sprites in burger
let spriteContainerTwo = document.querySelectorAll(".pokemonsTwo"); //container for sprites in burger
let genoneButton = document.getElementById("genone"); //buttons to cycle through gens 1
let gentwoButton = document.getElementById("gentwo"); //buttons to cycle through gens 2
let genthreeButton = document.getElementById("genthree"); //buttons to cycle through gens 3
let randoButton = document.getElementById("random"); //buttons to random
let leftInfo = document.querySelector(".leftbox"); // entire left colunm
let pokeInfo = document.querySelector(".bottomrightbox"); //bottom right box for art and attacks
let leftPhoto = document.querySelector(".leftImage"); //left art
let rightPhoto = document.querySelector(".rightImage"); //right art
let battleIcon = document.querySelector(".centerIcon"); //center icon, battle visual
let p1PokeMoves = document.querySelectorAll(".p1"); //player one attacks
let p2PokeMoves = document.querySelectorAll(".p2"); //player two attacks
let playerOneHealth = document.getElementById("p1Health"); //player one health
let playerTwoHealth = document.getElementById("p2Health"); //player two health
let playerOneBattleCondition = 0; //check if p1 picked
let playerTwoBattleCondition = 0; //check if p2 picked
let deadCheckOne = 0; //check if p1 pokemon has 0 hp
let deadCheckTwo = 0; //check if p2 pokemon has 0 hp
let chosenNameOne = ""; //used to fill pokenam after pick
let chosenNameTwo = ""; //used to fill pokenam after pick


//API Glossary:
//Pokemon Health = data.stats[0].base_stat
//Pokemon Name = data.name
//Pokemon Front View Sprit = data.sprites.front_default
//Official artwork = data.sprites.other["official-artwork"].front_default
//attack move link from api = data.moves.move.url

// main fetch to populate burger menu
function getPokemon(n) {
  for (let i = n; i <= n + 8 ; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(result => {
        renderSpritesOne(result)
        renderSpritesTwo(result)
      })
  } 
}

//grabs the default 9 first gen starters
getPokemon(1)

//runs after fetch to populate the burger menu- generates list objects and inserts the HTL directly into container
function renderSpritesOne(data) {
  let sprite =
    `
    <li>
      <a class="pokeList">${data.name}</a>
      <img src="${data.sprites.front_default}" class="spriteimgsOne" name="${data.id}">
    </li>
  `
  for (let i = 0; i < spriteContainerOne.length; i++) {
    spriteContainerOne[i].insertAdjacentHTML("beforeend", sprite)
  }
  let sprites = document.querySelectorAll(".spriteimgsOne")
//event listeners for pokemon selection 
  sprites.forEach((e) => {
    e.addEventListener("click", () => {
      if (data.id == e.name) {
        console.log(data.name)
        chosenNameOne = data.name;
        spotlightPokemonOne.src = data.sprites.front_default;
        spotlightPokemonOne.style.display = "flex"
        leftPhoto.src = data.sprites.other["official-artwork"].front_default;
        playerOneHealth.value = (10 * (data.stats[0].base_stat));
        playerOneHealth.max = (10 * (data.stats[0].base_stat));
//fills the 4 move spaces with attack name and power from attack URL api
        {
          for (let i = 0; i < 4; i++) {
            p1PokeMoves[i].innerText = data.moves[i].move.name;
              fetch(data.moves[i].move.url)
              .then(res => res.json())
              .then(result => {
                console.log(data.moves[i])
                {p1PokeMoves[i].dataset.num = result.power }
               })
          }
        }
//after every selecting, marks down whether we can battle or not and spawns the battle icon
        battleCheckOne()
        battle() 
      }
    })
  })
}
// functionally the same as the code block for player one
function renderSpritesTwo(data) {
  let sprite =
    `
    <li>
      <a class="pokeList">${data.name}</a>
      <img src="${data.sprites.front_default}" class="spriteimgsTwo" name="${data.id}">
    </li>
  `
  for (let i = 0; i < spriteContainerTwo.length; i++) {
    spriteContainerTwo[i].insertAdjacentHTML("beforeend", sprite)
  }
  let sprites = document.querySelectorAll(".spriteimgsTwo")

  sprites.forEach((e) => {
    e.addEventListener("click", () => {
      if (data.id == e.name) {
        chosenNameTwo = data.name;
        spotlightPokemonTwo.src = data.sprites.front_default
        spotlightPokemonTwo.style.display = "flex"
        rightPhoto.src = data.sprites.other["official-artwork"].front_default
        playerTwoHealth.value = (10 * (data.stats[0].base_stat))
        playerTwoHealth.max = (10 * (data.stats[0].base_stat))
      
        {
          for (let i = 0; i < 4; i++) {
            p2PokeMoves[i].innerText = data.moves[i].move.name;
            fetch(data.moves[i].move.url)
              .then(res => res.json())
              .then(result => {
                {p2PokeMoves[i].dataset.num = result.power }
               })
          }
        }     
        battleCheckTwo()
        battle() 
      }
     
    })
  })
}
//event listeners for the 4 buttons to change burger menu pokemin between generations, hard coded for the starters
//runs original fetch after resetting(deletes current selection)

genoneButton.addEventListener("click", function () {
  resetOne()
  resetTwo()
  getPokemon(1);
}) 

gentwoButton.addEventListener("click", function () {
  resetOne()
  resetTwo()
  getPokemon(152);
}) 

genthreeButton.addEventListener("click", function () {
  resetOne()
  resetTwo()
  getPokemon(252);
}) 

randoButton.addEventListener("click", function () {
  resetOne()
  resetTwo()
  getPokemon(randomNumber(1, 881));
})

//random number generator for random buttom, can be purposed for future random needs
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

//menu and board clear functions
function resetOne() {
  let elements = document.querySelectorAll('.pokemonsOne')
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = ''
  }
}

function resetTwo() {
    let elements = document.querySelectorAll('.pokemonsTwo')
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = ''
    }
  }

//checks if we can go in battle, req both players have to pick
  function battleCheckOne() {
    if (leftPhoto.src != " ") {
      playerOneBattleCondition = 1;
    }
  }

  function battleCheckTwo() {
    if (rightPhoto.src != " ") {
      playerTwoBattleCondition = 1;
    }
  }

//activates battle icon
function battle() {
  if ((playerOneBattleCondition == 1) && (playerTwoBattleCondition == 1)) {
    battleIcon.src = "battle.png";
    battleIcon.classList.add("battleCenter")
    }
}
  
//main function to intiate battle page, populates attacks and removes pokeball, toggles sidebar, has a 2 second delay
battleIcon.addEventListener("click", gottaGoFast) 

  function gottaGoFast() {
    document.getElementById("backdrop").style.animation = "rotation 2s infinite linear";
   
    {
        function prepareForBattle() {
        document.getElementById("backdrop").style.animation = "rotation 1000000000000000s infinite linear ";
        document.getElementById("backdrop").style.bottom = "80px"
        document.getElementById("pokeall").style.backgroundImage = "url()";
        document.getElementById("backdrop").style.backgroundImage = "url() ";
        document.querySelector(".leftImage").style.display = "none";  
        document.querySelector(".rightImage").style.display = "none";
        document.querySelector(".centerIcon").style.display = "none";
        document.querySelector(".p1title").innerText = chosenNameOne;
        document.querySelector(".p2title").innerText = chosenNameTwo;  
        playerOneHealth.style.display = "block";
        playerTwoHealth.style.display = "block";
          
          toggleSidebar()
          {
            let pokemoves = document.querySelectorAll(".attacks");
              for (let i = 0; i <= 2; i++) {
                pokemoves[i].style.display = "flex";
              }
          }
        
      }
      setTimeout(prepareForBattle, 2000);
    }
  }


//damage the oposite HP upon clicking an attack. Will subtract attack dmg from HP dataset, has check function to end game
for(var i = 0; i < p1PokeMoves.length; i++) {
  p1PokeMoves[i].addEventListener("click", doDamagetoP2(i));
}

function doDamagetoP2(i) {
  return function () {
    playerTwoHealth.value -= parseInt(p1PokeMoves[i].dataset.num);
    deadCheckTwo = playerTwoHealth.value;
    p2CheckDead();
};
}


for (let i = 0; i < p2PokeMoves.length; i++) {
  p2PokeMoves[i].addEventListener("click", doDamagetoP1(i));
}

function doDamagetoP1(i) {
  return function () {
    playerOneHealth.value -= parseInt(p2PokeMoves[i].dataset.num);
    deadCheckOne = playerOneHealth.value;
    p1CheckDead();
  }
}

//checks if HP is 0, flips dead aniamtions and shows new game button
function p2CheckDead() {
  if (deadCheckTwo == 0) {
    spotlightPokemonTwo.classList.add("p2Dead")
    console.log("p2 dead")
    document.querySelector("#newGame").style.display = "flex"
    
  }
}

function p1CheckDead() {
  if (deadCheckOne == 0) {
    spotlightPokemonOne.className = "p1Dead";
    document.querySelector("#newGame").style.display = "flex"
  }
}

//reveals and hides sidebar
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle('unhide');
  document.getElementById("sidebar2").classList.toggle('unhide');
}

window.onload = toggleSidebar;
