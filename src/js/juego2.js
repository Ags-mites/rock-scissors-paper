const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const btnStart = document.getElementById('start')
const lastLevel = 10

paper.onclick = () => Game.playerSelection(0);
scissors.onclick = () => Game.playerSelection(1);
rock.onclick = () => Game.playerSelection(2);

function Game() {
    this.selectionPC()
    this.incialGame()
    setTimeout(this.nextlevel(),500)
}
Game.prototype.selectionPC = () => {
    this.secuencePC = new Array(lastLevel).fill(0).map(n => Math.floor(Math.random() * 3))
}
Game.prototype.incialGame = () =>{
    this.nextlevel=this.nextlevel.bind(this)
    this.btnStartGame()
    this.level = 1
    this.option={
        paper,
        scissors,
        rock
    }
}
Game.prototype.btnStartGame = function(){
    if(btnEmpezar.classList.contains("hide")){
        btnEmpezar.classList.remove('hide')
    } else {
        btnEmpezar.classList.add('hide')
    }
}
Game.prototype.nextlevel = () =>{
    this.addEventBtn()
}
Game.prototype.addEventBtn =() => {
    this.option.paper.addEventListener("click", this.playerSelection)
    this.option.scissors.addEventListener("click", this.playerSelection)
    this.option.rock.addEventListener("click", this.playerSelection)
}
Game.prototype.playerSelection = function (ev){
    const  nameOption = ev
    const numberOption = this.traslatetoNumber(nameOption)
    console.log(numberOption)
    if(opcionUser == 2){
    alert("Elegiste Piedra!");
    console.log(this.secuencePC)
        if(this.secuencePC == 2){
            console.log(`este es un mensaje ${this.secuencePC} y tambien ${opcionUser}`)
        }
        
        else if(this.secuencePC == 0){
            console.log(`este es un mensaje ${this.secuencePC} y tambien ${opcionUser}`)
        }

        else if(this.secuencePC == 1){
            console.log(`este es un mensaje ${this.secuencePC} y tambien ${opcionUser}`)
        }
    }

    else if(opcionUser == 0){
        alert("Elegiste Papel!");
        if(opcionMaquina == piedra){
            alert("Ganaste!");
        }
        
        else if(opcionMaquina == papel){
            alert("Empate!");
        }

        else if(opcionMaquina == tijera){
            alert("Perdiste!");
        }
    }

    else if(opcionUser == 1){
	alert("Elegiste Tijera!");
	    if(opcionMaquina == piedra){
            alert("Perdiste!");
        }
    
        else if(opcionMaquina == papel)
    {
      alert("Ganaste!");	
    }

    else if(opcionMaquina == tijera)
    { 
      alert("Empate!");
    }

}
}
Game.prototype.traslatetoNumber = function(nameOption){
    switch(nameOption){
        case "paper":
            return 0
        case "scissors":
            return 1    
        case "rock":
            return 2
    } 
}

const player = new Game()

/*class Game {
    constructor() {
        this.initialGame()
        this.PCSelection()
    }
    initialGame() {
        this.optionplayer=this.optionplayer.bind(this)
        this.option = {
            paper,
            scissors,
            rock
        }
    }
    PlayerSelection(){
        this.option.paper.addEventListener("click",this.optionplayer)
        this.option.scissors.addEventListener("click",this.optionplayer)
        this.option.rock.addEventListener("click",this.optionplayer)
    }
    PCSelection() {
        this.PCSelection = Math.floor(Math.random() * 3)
    }
    transformnNumber(nameOption){
        switch(option){
            case "paper":
                return 0
            case "scissors":
                return 1
            case "rock":
                return 2
        }
    }
    optionplayer(ev){
        const nameOption = ev.target.dataset.option
        const numberOption = this.transformnNumber(nameOption)
        console.log(numberOption)
        console.log(this.PCSelection)
        this.PlayerSelection()
    }
} */
/* const initialGame = new Game()
const SelectPlayer = () => {
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}*/


/* paper.onclick = () => SelectPlayer(); */



/* 
//Genera un numero aleatorio entre un rango de enteros
function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2); 

opcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2" , 0);

alert("Javascript elegio:" + opciones[opcionMaquina]);


if(opcionUsuario == piedra)
{
  alert("Elegiste Piedra!");
  if(opcionMaquina == piedra)
  {
  	alert("Empate!");
  }
  
  else if(opcionMaquina == papel)
  {
    alert("Perdiste!");
  }
  
  else if(opcionMaquina == tijera)
  {
    alert("Ganaste!");
  }

}
  
  
else if(opcionUsuario == papel)
{
  alert("Elegiste Papel!");
  if(opcionMaquina == piedra)
  {
    alert("Ganaste!");
  }
  
  else if(opcionMaquina == papel)
  {
    alert("Empate!");
  }
  
  else if(opcionMaquina == tijera) 
  {
    alert("Perdiste!");
  }
  
}



else if(opcionUsuario == tijera)
{
	alert("Elegiste Tijera!");
	if(opcionMaquina == piedra)
    {
      alert("Perdiste!");
    }
    
    
    else if(opcionMaquina == papel)
    {
      alert("Ganaste!");	
    }

    else if(opcionMaquina == tijera)
    { 
      alert("Empate!");
    }

}

else

{
	alert("Debes elegir 0,1 ó 2; Tonto!");
} */