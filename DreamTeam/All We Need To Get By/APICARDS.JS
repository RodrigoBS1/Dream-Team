import API_TOKEN from "./config.js"
let form = document.getElementById('playerForm')
let activeImage = document.getElementsByClassName("activeImage")
console.log(activeImage)
let playerID
let playerBirthday
let playerHeightFeet
let playerHeightInches
let playerWeight

let cardTitle = document.querySelector('.card-title')
console.log(`Here is cardTitle: ${cardTitle}`)
let liPID = document.getElementsByClassName('pid')
console.log(`Here is liPID: ${liPID}`)
let liDOB = document.querySelector('.dob')
let liHeight = document.querySelector('.height')
let liWeight = document.querySelector('.weight')



form.addEventListener('submit',()=>{
    event.preventDefault()
    let formData = new FormData(form)
    let playerName = formData.get('playerName')
    console.log(form)
    console.log(playerName)
    //separate first and last name in string
    let name = playerName.split(" ")
    let firstName = name[0].toLowerCase()
    console.log(firstName)
    let firstNameCap = firstName.slice(0,1)
    console.log(firstNameCap)
    firstNameCap=(firstNameCap.toUpperCase())+(firstName.slice(1,firstName.length))
    console.log(firstNameCap)
    let lastName = name[1].toLowerCase()
    console.log(lastName)

    

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${API_TOKEN}`,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    }

    fetch(`https://api-nba-v1.p.rapidapi.com/players?name=${lastName}`, options)
	.then(response => response.json())

	.then(data=>{
       console.log(data.response)
       for(let i = 0; i < data.response.length; i++){

            if(data.response[i].firstname === firstNameCap){
            //console.log('yeah')
            //console.log(data.response[i].id)
            cardTitle.innerText = firstNameCap
            playerID = data.response[i].id
            console.log(playerID)
            liPID.innerText = playerID.toString()
            playerBirthday = data.response[i].birth.date
            console.log(playerBirthday)

            playerHeightFeet = data.response[i].height.feets
            console.log(playerHeightFeet)
            playerHeightInches = data.response[i].height.inches
            console.log(playerHeightInches)
            playerWeight = data.response[i].weight.pounds
            console.log(playerWeight)

            
            }
        }
    })




    
    


})
    

