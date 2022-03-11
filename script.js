for (let i = 0; i < 10; i++) {
  let numGrabs = i + 1;
  console.log(numGrabs)
  fetch("https://pokeapi.co/api/v2/pokemon/" + numGrabs)
    .then(res => res.json())
    .then(result => {
      console.log(result)
      let sideBarPokes = document.getElementsByClassName("spriteimgs")
      sideBarPokes[i].src = result.sprites.front_default;
      let sidePokename = document.getElementsByClassName("pokeList");
      sidePokename[i].innerText = result.name
    })
} 


  
  
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle('unhide');
}