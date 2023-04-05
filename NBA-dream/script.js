{
    "data":[
      {
        "id":237,
        "first_name":"LeBron",
        "last_name":"James",
        "position":"F",
        "height_feet": 6,
        "height_inches": 8,
        "weight_pounds": 250,
        "team":{
          "id":14,
          "abbreviation":"LAL",
          "city":"Los Angeles",
          "conference":"West",
          "division":"Pacific",
          "full_name":"Los Angeles Lakers",
          "name":"Lakers"
        }
      }


let playerName = document.getElementById('player-name')

let playerToSearch = document.getElementById('input-player')
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let inputPlayer = playerToSearch.value
    console.log(playerToSearch.value)
    fetch(`https://www.balldontlie.io/api/v1/players`)
    .then(response => {
        console.log(response.status)
        return response.json()
    })
    .then(data => {
        console.log(data)
        playerName.innerText = data.name
        playerName.innerText.data.position
        playerName.innerText.data.height_feet
        playerName.innerText.data.height_inches
        
    })

    