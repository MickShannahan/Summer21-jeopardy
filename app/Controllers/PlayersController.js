import { ProxyState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"


function _draw(){
  let players = ProxyState.players
  let playersElm = document.getElementById('players')
  let template = ''
  players.forEach(p => template += p.Template)
  playersElm.innerHTML = template
}

function _drawActivePlayer(){
  let player = ProxyState.activePlayer
  let name = document.getElementById('player')
  let points = document.getElementById('points')
  name.innerText = player.name
  points.innerText = player.points
}

function _growButton(){
  let player = ProxyState.activePlayer
  let button = document.getElementById('button')
  button.style.transform = `scale(${player.points/1000})`
  if(player.points < -1000){
    document.getElementById('bg').style.backgroundColor = 'red'
  }
}



export default class PlayersController{
  constructor(){
    ProxyState.on('players', _draw)
    ProxyState.on('activePlayer', _drawActivePlayer)
    ProxyState.on('activePlayer', _growButton)
    playersService.getPlayers()
  }


  addPlayer(event){
    try {
      event.preventDefault()
      let form = event.target
      let newPlayer ={
        name: form.playerName.value,
      }
      playersService.addPlayer(newPlayer)
    } catch (error) {
      console.error(error)
    }
  }


  setPlayer(id){
    playersService.setPlayer(id)
  }

  score(correct){
    console.log('you answered', correct)
    playersService.score(correct)
  }
}