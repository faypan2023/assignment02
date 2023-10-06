let coinFlip
let randomNum = Math.round(Math.random())//Generate a random 0 or 1
if (randomNum ===0){
    coinFlip = "Heads"
}else{
    coinFlip = "Tails"
}

let choice = prompt("enter 'Heads' or 'Tails':").toLowerCase()
//Convert user input to lowercase for case-insensitive comparison


if (choice === "heads"){
    if (coinFlip ==="Heads"){
        alert("The flip was heads and you chose heads...you win!")
    }else{
        alert("The flip was tails but you chose heads...you lose!")
    }
}else{
    if (coinFlip ==="Tails"){
        alert("The flip was tails and you chose tails...you win!")
    }else{
        alert("The flip was heads but you chose tails...you lose!")
    }
}