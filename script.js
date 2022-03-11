
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
  
  
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle('unhide');
}