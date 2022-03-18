let sideBarPokes = document.querySelectorAll(".spriteimgs");
let bigPokeBall = document.getElementById("pokeall");
let sidePokename = document.querySelectorAll(".pokeList");
let spotlightPokemonOne = document.querySelector("#p1p");
let spotlightPokemonTwo = document.querySelector("#p2p");
let spriteContainerOne = document.querySelectorAll(".pokemonsOne");
let spriteContainerTwo = document.querySelectorAll(".pokemonsTwo");
let genoneButton = document.getElementById("genone");
let gentwoButton = document.getElementById("gentwo");
let genthreeButton = document.getElementById("genthree");
let randoButton = document.getElementById("random");
let leftInfo = document.querySelector(".leftbox");
let pokeInfo = document.querySelector(".bottomrightbox");
let leftPhoto = document.querySelector(".leftImage");
let rightPhoto = document.querySelector(".rightImage");
let battleIcon = document.querySelector(".centerIcon");
let p1PokeMoves = document.querySelectorAll(".p1");
let p2PokeMoves = document.querySelectorAll(".p2");
let playerOneHealth = document.getElementById("p1Health");
let playerTwoHealth = document.getElementById("p2Health");
let playerOneBattleCondition = 0;
let playerTwoBattleCondition = 0;

//Pokemon Health = data.stats[0].base_stat


function getPokemon(n) {
  for (let i = n; i <= n + 8 ; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(result => {
        // //console.log(result)
        renderSpritesOne(result)
        renderSpritesTwo(result)
      })
  } 
}

getPokemon(1)


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

  sprites.forEach((e) => {
    e.addEventListener("click", () => {
      if (data.id == e.name) {
        console.log(data.stats[0].base_stat)
        spotlightPokemonOne.src = data.sprites.front_default
        spotlightPokemonOne.classList.add("pokePhotoOne")
        leftPhoto.src = data.sprites.other["official-artwork"].front_default 
        playerOneHealth.value = (10 * (data.stats[0].base_stat))
        {
          for (let i = 0; i < 4; i++) {
            // console.log(data.stats)
            // console.log(p1PokeMoves[i].innerText)
            p1PokeMoves[i].innerText = data.moves[i].move.name;
              fetch(data.moves[i].move.url)
              .then(res => res.json())
              .then(result => {
                //console.log(result.power)
                {p1PokeMoves[i].dataset.num = result.power }
               })
          }
        }
        battleCheckOne()
        battle() 
      }
     
    })
  })
}

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
        //console.log(data.id)
        //console.log(e.name)
        //console.log(data)
        spotlightPokemonTwo.src = data.sprites.front_default
        spotlightPokemonTwo.classList.add("pokePhotoTwo")
        rightPhoto.src = data.sprites.other["official-artwork"].front_default
        playerTwoHealth.value = (10 * (data.stats[0].base_stat))
      
        {
          for (let i = 0; i < 4; i++) {
            //console.log(data.moves[i].move.name)
            //console.log(p2PokeMoves[i].innerText)
            p2PokeMoves[i].innerText = data.moves[i].move.name;
            //console.log("here",p2PokeMoves[i].dataset)
            fetch(data.moves[i].move.url)
              .then(res => res.json())
              .then(result => {
                //console.log(result.power)
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

genoneButton.addEventListener("click", function () {
  //console.log("heres gen 1!")
  resetOne()
  resetTwo()
  getPokemon(1);
}) 

gentwoButton.addEventListener("click", function () {
  //console.log("heres gen 2!")
  resetOne()
  resetTwo()
  getPokemon(152);
}) 

genthreeButton.addEventListener("click", function () {
  //console.log("heres gen 3!")
  resetOne()
  resetTwo()
  getPokemon(252);
}) 

randoButton.addEventListener("click", function () {
  //console.log("heres random!")
  resetOne()
  resetTwo()
  getPokemon(randomNumber(1, 881));


})

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

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

function battle() {
  if ((playerOneBattleCondition == 1) && (playerTwoBattleCondition == 1)) {
    //console.log(playerOneBattleCondition, playerTwoBattleCondition)
    battleIcon.src = "battle.png";
    battleIcon.classList.add("battleCenter")
    }
  }

battleIcon.addEventListener("click", gottaGoFast) 


  function gottaGoFast() {
    document.getElementById("backdrop").style.animation = "rotation 2s infinite linear";
   
    {
        function prepareForBattle() {
        
        document.getElementById("backdrop").style.animation = "rotation 1000000000000000s infinite linear ";
        document.getElementById("backdrop").style.bottom = "80px"
        document.getElementById("pokeall").style.backgroundImage = "url()";
        document.getElementById("backdrop").style.backgroundImage = "url() ";
        document.querySelector(".leftImage").src = " ";
        document.querySelector(".rightImage").src = " ";
        document.querySelector(".centerIcon").src = " ";
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


p1PokeMoves.forEach(pickAttack1 => {
  pickAttack1.addEventListener("click", p1whichAttack) 
})

function p1whichAttack() {
  for (let i = 0; i < 4; i++) {
    playerTwoHealth.value -= parseInt(p1PokeMoves[i].dataset.num)
  }
}

p2PokeMoves.forEach(pickAttack2 => {
  pickAttack2.addEventListener("click", p2whichAttack) 
})

function p2whichAttack() {
  for (let i = 0; i < 4; i++) {
    playerOneHealth.value -= parseInt(p2PokeMoves[i].dataset.num)
  }
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle('unhide');
  document.getElementById("sidebar2").classList.toggle('unhide');
}

