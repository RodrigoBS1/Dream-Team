import API_TOKEN from "./config.js"
let form = document.getElementById('playerForm')
//let activeImage = document.getElementsByClassName("activeImage")
let playerName = document.getElementById('playerName')
let playerList = document.getElementById('#player-list')

console.log(playerName)

    form.addEventListener('submit',(event)=>{
        event.preventDefault()
    fetch(`https://www.balldontlie.io/api/v1/players?search=${playerName.value}`)
    .then(response => response.json())
    .then(data => {
            
        console.log(data)
        
    })
   })


   /*function displayPlayer(playerName) {
    playerList.innerHTML = ''
    fetch(`https://www.balldontlie.io/api/v1/players?search=${playerName.value}`)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((data) => {
            playerList.insertAdjacentHTML(
                "beforeend",
                `
                <article class="players">
                    <h3 id="player-name">${data.first_name}, ${data.last_name}</h3>
                    <p id="tem">${data.team.city}</p>
                    <button>Try It</button>
                </article>
                `
            );
        });
    })
}

//<img src="${drink.image}" alt="" height="250px" width="250px"></img>*/