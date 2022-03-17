let sideBarPokes = document.querySelectorAll(".spriteimgs");
let bigPokeBall = document.getElementById("pokeall");
let sidePokename = document.querySelectorAll(".pokeList");
let spotlightPokemonOne = document.querySelector("#p1p");
let spotlightPokemonTwo = document.querySelector("#p2p");
// let spriteContainer = document.querySelectorAll(".pokemons");
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
let battleIcon = document.querySelector(".centerIcon")
let playerOneBattleCondition = 0;
let playerTwoBattleCondition = 0;
console.log(bigPokeBall)


// sidebarIdTracker = [];
// console.log(sidebarIdTracker)

// for (let i = 0; i < 10; i++) {
//   let numGrabs = i + 1;
//   console.log(numGrabs)
//   fetch("https://pokeapi.co/api/v2/pokemon/" + numGrabs)
//     .then(res => res.json())
//     .then(result => {
//       console.log(result)
//       sideBarPokes[i].src = result.sprites.front_default;
//       sidePokename[i].innerText = result.name;
//       sidebarIdTracker.push(result.id);

//     })
// } 

// --------------------------Working Code------------------------

// function getPokemon(n) {
//   for (let i = n; i <= n + 9 ; i++) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//       .then(res => res.json())
//       .then(result => {
//         // console.log(result)
//         renderSprites(result)
//       })
//   } 
// }

// getPokemon(1)


// function renderSprites(data) {
//   let sprite =
//     `
//     <li>
//       <a class="pokeList">${data.name}</a>
//       <img src="${data.sprites.front_default}" class="spriteimgs" name="${data.id}">
//     </li>
//   `
//   for (let i = 0; i < spriteContainer.length; i++) {
//     spriteContainer[i].insertAdjacentHTML("beforeend", sprite)
//   }
//   let sprites = document.querySelectorAll(".spriteimgs")

//   sprites.forEach((sprt) => {
//     sprt.addEventListener("click", () => {
//       if (data.id == sprt.name) {
//         console.log(data.id)
//         console.log(sprt.name)
//         console.log(data)
//         spotlightPokemon.src = data.sprites.front_default
//         leftPhoto.src = data.sprites.other["official-artwork"].front_default
//         // pokeName.insertAdjacentHTML("beforeend", "Name: " + data.forms["0"].name)
//         function chgback() {
//           if (data.types[0].type.name == "grass") {
//             document.body.style.backgroundColor = "#20b49c";
//           }
//           else if (data.types[0].type.name == "fire") {
//             document.body.style.backgroundColor = "#ee8328";
//           }
//           else if (data.types[0].type.name == "water") {
//             document.body.style.backgroundColor = "#84ADD7";
//           }
//         }
//         chgback();
//       }
     
//     })
//   })
// }

// --------------------------Working Code------------------------

//Move Set Path : moves[0].move.name
//Sprite front: sprites.front_default
// full art: sprites.other["official-artwork"].front_default 



function getPokemon(n) {
  for (let i = n; i <= n + 9 ; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(result => {
        // console.log(result)
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
        console.log(data.moves[0].move.url)
        spotlightPokemonOne.src = data.sprites.front_default
        spotlightPokemonOne.classList.add("pokePhotoOne")
        leftPhoto.src = data.sprites.other["official-artwork"].front_default 
        
      
        // pokeName.insertAdjacentHTML("beforeend", "Name: " + data.forms["0"].name)
        // function chgback() {
        //   if (data.types[0].type.name == "grass") {
        //     document.body.style.backgroundColor = "#20b49c";
        //   }
        //   else if (data.types[0].type.name == "fire") {
        //     document.body.style.backgroundColor = "#ee8328";
        //   }
        //   else if (data.types[0].type.name == "water") {
        //     document.body.style.backgroundColor = "#84ADD7";
        //   }
        // }
        // chgback();
       
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
        console.log(data.id)
        console.log(e.name)
        console.log(data)
        spotlightPokemonTwo.src = data.sprites.front_default
        spotlightPokemonTwo.classList.add("pokePhotoTwo")
        rightPhoto.src = data.sprites.other["official-artwork"].front_default
        // pokeName.insertAdjacentHTML("beforeend", "Name: " + data.forms["0"].name)
        // function chgback() {
        //   if (data.types[0].type.name == "grass") {
        //     document.body.style.backgroundColor = "#20b49c";
        //   }
        //   else if (data.types[0].type.name == "fire") {
        //     document.body.style.backgroundColor = "#ee8328";
        //   }
        //   else if (data.types[0].type.name == "water") {
        //     document.body.style.backgroundColor = "#84ADD7";
        //   }
        // }
        // chgback();
        battleCheckTwo()
        battle() 
      }
     
    })
  })
}

genoneButton.addEventListener("click", function () {
  console.log("heres gen 1!")
  resetOne()
  resetTwo()
  getPokemon(1);
}) 

gentwoButton.addEventListener("click", function () {
  console.log("heres gen 2!")
  resetOne()
  resetTwo()
  getPokemon(152);
}) 

genthreeButton.addEventListener("click", function () {
  console.log("heres gen 3!")
  resetOne()
  resetTwo()
  getPokemon(252);
}) 



randoButton.addEventListener("click", function () {
  console.log("heres random!")
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
    console.log(playerOneBattleCondition, playerTwoBattleCondition)
    battleIcon.src = "battle.png";
    battleIcon.classList.add("battleCenter")
    }
  }

battleIcon.addEventListener("click", gottaGoFast) 


  function gottaGoFast() {
    document.getElementById("backdrop").style.animation = "rotation 2s infinite linear";
   
    {
        function prepareForBattle() {
          pokemoves = document.querySelectorAll(".attacks")
          
        document.getElementById("backdrop").style.animation = "rotation 1000000000000000s infinite linear ";
        document.getElementById("backdrop").style.bottom = "80px"
        document.getElementById("pokeall").style.backgroundImage = "url(battlefield.png)";
        document.getElementById("backdrop").style.backgroundImage = "url() ";
        document.querySelector(".leftImage").src = " ";
        document.querySelector(".rightImage").src = " ";
        document.querySelector(".centerIcon").src = " ";
          document.querySelector("#p1p").src = data.sprites.back_default;
          
        for (let i = 0; i <= 2; i++) {
          pokemoves[i].style.display = "block";
        }
        toggleSidebar()
      }
      setTimeout(prepareForBattle, 2000);
      // removeSlow()
      // setTimeout(function(){ document.getElementById("backdrop").style.animation = "rotation 1000000000000000s infinite linear";}, 2000)
    }
  }

// function removeSlow() {
//   document.getElementById("backdrop").style.animation = "rotation 1000000000000000s infinite linear";
// }



  // let spriteContainer = document.querySelectorAll(".pokemons");
  // console.log(spriteContainer[0])
  // for (let i = 0; i > 3; i++) {
  //   spriteContainer[i].innerHTML = ' ';
  // }
  //console.log(document.querySelector(".pokemons"))
  //  document.querySelector(".pokemons").innerHTML = " ";



// sidePokename[i].addEventListener("click", function () {
//     let numGrabs2 = i;
//     fetch("https://pokeapi.co/api/v2/pokemon/" + numGrabs)
//       .then(res => res.json())
//       .then(result => { 
//       spotlightPokemon.src = result.sprites.other.dream_world.front_default
//       })
//    })



// for (let i = 0; 1 < sidebarIdTracker.length; i++) {
//   sideBarPokes[i].addEventListener("click", enlarge(i))
// }

// function enlarge(i) {
//   return function () {
//     console.log("you clicked #" + i)
//   }
// }
  
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle('unhide');
  document.getElementById("sidebar2").classList.toggle('unhide');
}

