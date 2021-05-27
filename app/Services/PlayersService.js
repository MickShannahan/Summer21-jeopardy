import { ProxyState } from "../AppState.js"
import Player from "../Models/Player.js"
import { sandbox } from "./axiosService.js"


class PlayersService{
  async score(correct) {
    let player = ProxyState.activePlayer
    let question = ProxyState.question
    if(correct){
      player.points += question.points
    } else {
      player.points -= question.points
    }
    let res = await sandbox.put(player.id, player)
    console.log(res.data)
    ProxyState.activePlayer = ProxyState.activePlayer
    ProxyState.players = ProxyState.players
  }
  setPlayer(id) {
    let player = ProxyState.players.find(p=> p.id == id)
    ProxyState.activePlayer = player
    console.log('player selected', ProxyState.activePlayer)
  }
  async getPlayers() {
    let res = await sandbox.get()
    console.log('All Players',res.data)
    ProxyState.players = res.data.map(p => new Player(p))
    console.log("all playres who are now actual players", ProxyState.players)
  }

  async addPlayer(newPlayer) {
   let res = await sandbox.post('', newPlayer)
   ProxyState.players = [...ProxyState.players, new Player(res.data)]
  }

  
}

export const playersService = new PlayersService()