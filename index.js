let score1 = 0
let score2 = 0
let homeScore = document.getElementById("score1") 
let guestScore = document.getElementById("score2")

// Home Score 

function homePlusOne() {
    score1 += 1 
    homeScore.textContent = score1 
}

function homePlusTwo() {
    score1 += 2 
    homeScore.textContent = score1  
}

function homePlusThree() {
    score1 += 3 
    homeScore.textContent = score1
}

// Guest Score 

function guestPlusOne() {
    score2 += 1 
    guestScore.textContent = score2 
}

function guestPlusTwo() {
    score2 += 2 
    guestScore.textContent = score2  
}

function guestPlusThree() {
    score2 += 3 
    guestScore.textContent = score2 
}