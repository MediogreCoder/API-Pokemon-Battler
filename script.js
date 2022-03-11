let sideBarPokes = document.querySelectorAll(".spriteimgs");
let sidePokename = document.querySelectorAll(".pokeList");
let spotlightPokemon = document.querySelector(".pokePhoto")
let spriteContainer = document.querySelector(".pokemons")


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

function getPokemon(n) {
  for (let i = 1; i <= n; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(result => {
        renderSprites(result)
      })
  } 
}
getPokemon(9)

function renderSprites(data) {
  let sprite = `
    <li>
      <a class="pokeList">${data.name}</a>
      <img src="${data.sprites.front_default}" class="spriteimgs" name="${data.id}">
    </li>
  `
  spriteContainer.insertAdjacentHTML("beforeend", sprite)

  let sprites = document.querySelectorAll(".spriteimgs")

  sprites.forEach((sprt) => {
    sprt.addEventListener("click", () => {
      if (data.id == sprt.name) {
        spotlightPokemon.src = data.sprites.front_default
      }
    })
  })
}


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
}