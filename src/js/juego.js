const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const rock = document.getElementById("rock")
const ingame = document.getElementById("ingame")
const result = document.getElementById("result")
const textResult = document.getElementById("text__result")
const YouPicked = document.getElementById("YouPicked")
const TheHousePicked = document.getElementById("TheHousePicked")
let classButtons = [
    "button__blue",
    "button__yellow",
    "button__red"
]

paper.onclick = () => Game(0)
scissors.onclick = () => Game(1)
rock.onclick = () => Game(2)

function Game(player) {
    const selectionPC =  Math.floor(Math.random() * 3)
    const traslatePlayer = traslateNumbertoLetter(player)
    const traslatePC = traslateNumbertoLetter(selectionPC)
    buttonsClass(player, selectionPC)
    if (player == selectionPC){
        textResult.innerHTML = `EMPATE escojieron ${traslatePlayer}`
    }
    else{
        if (player === 0){
            //papel
            if(selectionPC == 2){
                textResult.innerHTML = `YOU WIN`
            }
            else if(selectionPC == 1){
                
                textResult.innerHTML = `YOU LOSE`
            }
        }else if(player === 1 ){
            //tijeras
            if(selectionPC == 0){
                textResult.innerHTML = `YOU WIN`
            }
            else if(selectionPC == 2){
                textResult.innerHTML = `YOU LOSE`
            }            
        }else if(player === 2 ){
            //piedra 
            if(selectionPC == 1){
                textResult.innerHTML = `YOU WIN`
            }
            else if(selectionPC == 0){
                textResult.innerHTML = `YOU LOSE`
            }
        }
        
    }
}

function buttonsClass(player, selectionPC){
    ingame.classList.add("hide");
    result.classList.remove("hide");
    YouPicked.classList.add(classButtons[player]);
    TheHousePicked.classList.add(classButtons[selectionPC]);
}

function  traslateNumbertoLetter(player){
    switch (player){
        case 0:
            return "papel"
        case 1:
            return "tijera"
        case 2:
            return "roca"
    }
}