
//Image append test for first 50 chars, page 50 is letter G

// for (let i = 0; i < 100; i++) {

//   fetch("https://api.disneyapi.dev/characters?page=61")
//     .then(res => res.json())
//     .then(result => {
//       console.log(result.data)
//       let allDisneyCharsImg = document.createElement("img");
//       allDisneyCharsImg.classList.add("charPhotos");
//       allDisneyCharsImg.src = result.data[i].imageUrl;
//       console.log(allDisneyCharsImg)
//       document.body.append(allDisneyCharsImg)
//     })

// }
//------------------------------------------------------

//Isolated first 51 names of page one, will need to target specific movies and names, find char IDs
//When fecthing from https://api.disneyapi.dev/characters
//name is located in result.data[i].name
//image is located in result.data[i].imageUrl
//id is located in result.data[i]._id
//film is located in result.data[i].films

// for (let i = 0; i < 51; i++) {
//   fetch("https://api.disneyapi.dev/characters")
//     .then(res => res.json())
//     .then(result => {
//       console.log(result.data[i]._id)
    
//     })
// }

//When fecthing from specific chars https://api.disneyapi.dev/characters(ID) ie. https://api.disneyapi.dev/characters(id)
//name is located in result.name
//image is located in result.imageUrl
//id is located in result._id
//film is located in result.films

  // fetch("https://api.disneyapi.dev/characters/309")
  //   .then(res => res.json())
  //   .then(result => {
  //     console.log(result.films[0])
  //     let disneyCharsImg = document.createElement("img");
  //     disneyCharsImg.classList.add("charPhotos");
  //     disneyCharsImg.src = result.imageUrl;
  //     console.log(disneyCharsImg)
  //     document.body.append(disneyCharsImg)
  //   })


  //-------------------------------------------

  // function dropDown() {
  //   let dD = document.getElementById("myLinks");
  //   if (dD.style.display === "block") {
  //     dD.style.display = "none";
  //   } else {
  //     dD.style.display = "block";
  //   }
  // }

  // let menu = document.querySelector(".menu");
  // let menuItems = document.querySelectorAll(".menuItem");
  // let hamburger= document.querySelector(".hamburger");
  // let closeIcon= document.querySelector(".closeIcon");
  // let menuIcon = document.querySelector(".menuIcon");
  
  // function toggleMenu() {
  //   if (menu.classList.contains("showMenu")) {
  //     menu.classList.remove("showMenu");
  //     closeIcon.style.display = "none";
  //     menuIcon.style.display = "none";
  //   } else {
  //     menu.classList.add("showMenu");
  //     closeIcon.style.display = "block";
  //     menuIcon.style.display = "none";
  //   }
  // }
  
  // hamburger.addEventListener("click", toggleMenu);

  // let fChars = [

  // ]
  // // for (let i = 0; i < 5; i++) {

  //Pokmon Name = result.name
  
      fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
        .then(res => res.json())
        .then(result => {
          console.log(result.name)
          let sideBarPokes = document.getElementsByClassName("spriteimgs")
          console.log(sideBarPokes)
          sideBarPokes[0].src = result.sprites.front_default;
          let sidePokename = document.getElementsByClassName("pokeList");
          console.log(sidePokename);
          sidePokename[0].innerText = result.name
        })
  
  
  
  
  
  
  
    // function menuOnClick() {
    //   document.getElementById("menu-bar").classList.toggle("change");
    //   document.getElementById("nav").classList.toggle("change");
    //   document.getElementById("menu-bg").classList.toggle("change-bg");
    // }
  

  
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle('unhide');
}